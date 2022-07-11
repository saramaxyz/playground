import AWS from 'aws-sdk';
import {useEffect, useState} from "react"
import {useSelector} from "react-redux";

AWS.config.update({
    accessKeyId: "AKIA6FXCMD5TFVBTUCZZ",
    secretAccessKey: "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",
    region: "us-west-1",
});
const s3 = new AWS.S3();

const monthConversion = {
    "Jan": 0,
    "Feb": 1,
    "Mar": 2,
    "Apr": 3,
    "May": 4,
    "Jun": 5,
    "Jul": 6,
    "Aug": 7,
    "Sep": 8,
    "Oct": 9,
    "Nov": 10,
    "Dec": 11
}


function useBarks() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [data, setData] = useState([]);
    const selector = ({auth}) => auth
    const auth = useSelector(selector)

    useEffect(() => {

        const {googleId} = auth
        //const googleId = "115087737562134809990"
        const prefix = googleId + "/"

        const params = {
            Bucket: "sarama-audio-files",
            Delimiter: "",
            Prefix: prefix
        }

        // Add event listener
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                const contents = data.Contents.filter(({Key}) => !Key.endsWith("/"))
                let barkData = []
                for (let content of contents) {
                    const timeValues = content.Key.split(";")[3].split("-0700")[0].split("\uf03a")
                    let dateValues = timeValues[0].split(" ")
                    let tmp = new Date()

                    tmp.setDate(dateValues[0])
                    const monthIndex = monthConversion[dateValues[1]]
                    tmp.setMonth(monthIndex)
                    tmp.setYear(dateValues[2])
                    tmp.setHours(dateValues[3])
                    tmp.setMinutes(timeValues[1])
                    tmp.setSeconds(timeValues[2])
                    barkData.push({
                        date: tmp,
                        duration: 10,
                        prefix: content.Key,
                    })
                }
                setData(barkData)


            }
        });
    }, []); // Empty array ensures that effect is only run on mount
    return data;
}







export default useBarks

import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DailyBarkGraph from "./DailyBarkGraph";
import {connect} from "react-redux"
import AWS from 'aws-sdk';

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


// const dataUrl = "https://sarama-public.s3.us-west-1.amazonaws.com/bark_data.json"
const getDateKey = (a) => new Date(a.getFullYear(), a.getMonth(), a.getUTCDate(), 0, 0, 0)

function groupTimesByDay(theList) {
    var toReturn = {};

    for (let listItem of theList) {
        const {date, duration} = listItem
        const dateKey = getDateKey(new Date(date))
        if (toReturn.propertyIsEnumerable(dateKey))
            toReturn[dateKey] += duration
        else
            toReturn[dateKey] = duration

    }

    return toReturn
}

function processBarkData(barkData) {
    var toReturn = {};

    for (let listItem of barkData) {
        const {date, duration, prefix} = listItem
        const dateKey = getDateKey(new Date(date))
        const finishDate = new Date(new Date(date).getTime() + 60000 * duration)
        const interval = [date, finishDate, prefix]
        if (toReturn[dateKey] === undefined) {
            toReturn[dateKey] = [interval]

        } else {
            toReturn[dateKey].push(interval)

        }

    }

    return toReturn
}

const ActivityCalendar = ({auth}) => {

    const [data, setData] = useState([])
    const [date, setDate] = useState(new Date());
    // const {googleId} = auth
    const googleId = "115087737562134809990"
    const prefix = googleId + "/"

    useEffect(() => {
        const params = {
            Bucket: "sarama-audio-files",
            Delimiter: "",
            Prefix: prefix
        }

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
                    console.log(content.Key)
                    barkData.push({
                        date: tmp,
                        duration: 10,
                        prefix: content.Key,
                    })
                }
                setData(barkData)


            }
        });

    }, [])


    if (data.length === 0)
        return <h2>
            No barks recorded
        </h2>


    const dailyBarkData = processBarkData(data)

    return (
        <div className='calendar-container' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "flex-start",
        }}>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                marginTop: "2rem",
                marginLeft: "4rem"
            }}>
                <Calendar
                    minDate={new Date(2022, 0)}
                    maxDate={new Date()}
                    onChange={setDate}
                    value={date}
                    formatDay={(locale, date) => {
                        console.log(dailyBarkData[date])
                        return <div style={{
                            position: 'relative',
                        }}>
                            <h2>{date.getDate()}</h2>
                            <p style={{
                                position: 'absolute',
                                bottom: "1rem",
                                left: "1rem"
                            }}>{(!!dailyBarkData[date]) ? dailyBarkData[date].length : 0}</p>
                        </div>
                    }}

                />
            </div>


                <DailyBarkGraph date={date} data={dailyBarkData[date]}/>
        </div>


    );

}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(ActivityCalendar)

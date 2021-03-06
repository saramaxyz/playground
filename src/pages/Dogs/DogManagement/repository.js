import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: "AKIA6FXCMD5TFVBTUCZZ",
    secretAccessKey: "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",
    region: "us-west-1",
});
const s3 = new AWS.S3();

class DogCrudRepository {

    purgeDog = async (googleId, imageId) => {

    }

    getQueryResult = async (googleId) => {
        return new Promise((resolve, reject) => {
            const bucketName = "sarama-user-dogs"
            const prefix = googleId
            const params = {
                Bucket: bucketName,
                Delimiter: "",
                Prefix: prefix
            }
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    console.log(err)
                    reject(err, err.stack);
                } else {
                    const contents = data.Contents.filter(({Key}) => !Key.endsWith("/"))
                    const dogDict = {}
                    for (let content of contents) {
                        const contentKey = content.Key
                        const dogId = contentKey.split("/")[1]
                        const imageId = contentKey.split("/")[2]

                        dogDict[dogId] = `https://${bucketName}.s3.us-west-1.amazonaws.com/${contentKey}`

                    }
                    const dogData = Object.entries(dogDict).map(([dogName,media]) => ({name:dogName,mediaUrl:media}))
                    resolve(dogData)

                }
            })


        })

    }
}

export default DogCrudRepository

import getApi from "../../../repositories/getApi";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: "AKIA6FXCMD5TFVBTUCZZ",
    secretAccessKey: "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",
    region: "us-west-1",
});
const s3 = new AWS.S3();

class DogCrudRepository {

    deleteImage = async (googleId, imageId) => {
        return await getApi()
            .deleteImage(googleId, imageId)

    }

    getQueryResult = async (googleId, dogName) => {
        return new Promise((resolve, reject) => {
            const bucketName = "sarama-user-dogs"
            const prefix = googleId + "/" + dogName
            const params = {
                Bucket: "sarama-user-dogs",
                Delimiter: "",
                Prefix: prefix
            }
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    console.log(err)
                    reject(err, err.stack);
                } else {
                    const contents = data.Contents.filter(({Key}) => !Key.endsWith("/"))
                    const dogData = []
                    for (let content of contents) {
                        const contentKey = content.Key
                        const dogId = contentKey.split("/")[1]
                        const imageId = contentKey.split("/")[2]

                        const mediaUrl = `https://${bucketName}.s3.us-west-1.amazonaws.com/${contentKey}`
                        dogData.push({
                            id:imageId,
                            media_url:mediaUrl
                        })
                    }
                    resolve(dogData)

                }
            })


        })

    }
}

export default DogCrudRepository

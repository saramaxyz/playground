export const url = "https://d3v8ap4u5cf7by.cloudfront.net"
// export const url = "http://ec2-54-151-86-65.us-west-1.compute.amazonaws.com"
class APIService {

    inferAction(action, userId, file) {
        const formData = new FormData()
        formData.append("user_id", userId)
        formData.append("file", file)
        return fetch(`${url}/api/actions/${action}`, {
            method: "POST",
            mode: "cors",
            body: formData
        })
            .then(r => r.json())
    }

    insertDog(name, file, userId) {
        const formData = new FormData();
        formData.append("name", name)
        formData.append("file", file)
        formData.append("user_id", userId)
        return fetch(`${url}/api/dogs/insert`, {
            method: 'POST',
            body: formData,
            mode: "cors"
        })
    }

    fetchDogs(userId) {
        const formData = new FormData()
        formData.append("user_id", userId)
        return fetch(`${url}/api/dogs/all`, {
            method: "POST",
            body: formData,
            mode: "cors"
        })
            .then(r => r.json())
    }

    fetchResults(userId) {

        const formData = new FormData()
        formData.append("user_id", userId)


        return fetch(`${url}/api/results/fetch`, {
            method: "POST",
            body:formData,
            mode:"cors"
        })
            .then(r => r.json())
            .catch(() => ({results:[]}))
            // .then(resp => resp.json())
    }

    getVideoMetadata(videoId) {
        const formData = new FormData()
        formData.append("video_id", videoId)
        return fetch(`${url}/api/results/video`, {
            method: "POST",
            mode: "cors",
            body: formData
        })
            .then(resp => resp.json())
    }

}

let service = null

export default () => {
    if (service === null) service = new APIService()

    return service

}

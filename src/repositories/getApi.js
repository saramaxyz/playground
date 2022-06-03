export const url = "https://d3mifhy8ied3p3.cloudfront.net"

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

    purgeDog(userId,dogName) {
        const formData = new FormData()
        formData.append("user_id", userId)
        formData.append("dog_name", dogName)
        return fetch(`${url}/api/dogs/purge`, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        })

    }

    deleteImage(userId, imageId) {
        const formData = new FormData()
        formData.append("user_id", userId)
        formData.append("dog_id", imageId)
        return fetch(`${url}/api/dogs/delete`, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        })

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

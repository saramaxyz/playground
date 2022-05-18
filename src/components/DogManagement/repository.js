import getApi from "../../repositories/getApi";


class DogManagementRepository {

    purgeDog = async (googleId,dogName) => {
        return await getApi()
            .purgeDog(googleId,dogName)

    }

    getQueryResult = async (googleId) => {
        return await getApi()
            .fetchDogs(googleId)
            .then(obj => {
                const {dogs} = obj

                return Object.entries(dogs).map(([name, images]) => {
                    if (images.length > 0) {
                        return {
                            name,
                            mediaUrl: images[0].media_url
                        }
                    } else {
                        return {
                            name,
                            mediaUrl: null
                        }
                    }

                })
            })
    }

}

export default DogManagementRepository

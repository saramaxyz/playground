import getApi from "../../repositories/getApi";


class DogCrudRepository {

    deleteImage = async (googleId,imageId) => {
        return await getApi()
            .deleteImage(googleId,imageId)

    }

    getQueryResult = async (googleId,dogName) => {
        return await getApi()
            .fetchDogs(googleId)
            .then(obj => {
                const {dogs} = obj
                return dogs[dogName]

            })
    }

}

export default DogCrudRepository

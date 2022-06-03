import axios from "axios"
import qs from "qs";

export const apiAddress = "http://54.183.216.31"
export const customersUrl = apiAddress + "/api/wishlists"


class CustomerRepository {

    async getUser(userId) {

        const query = qs.stringify({
            filters: {
                user_id: {
                    $eq: userId,
                },
            },
            populate: "*"

        }, {});
        const config = {
            method: 'get',
            url: customersUrl + "?" + query,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return await axios(config)
            .then(function (response) {
                const user = response.data.data
                if (user.length === 0)
                    return null
                else
                    return {
                        id: user[0].id,
                        ...user[0].attributes
                    }

            })
            .catch(console.error)
    }


    async bulkUpdate(userObject, userId) {
        const config = {
            data: {
                data: userObject
            },
            method: 'put',
            url: customersUrl + `/${userId}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return await axios(config)
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    async updateUser(userObject) {
        const {user_id} = userObject
        const user = await this.getUser(user_id)
        if (user === null) {
            const config = {
                data: {
                    data: userObject
                },
                method: 'post',
                url: customersUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            return await axios(config)
                .then(function (response) {
                    return response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })


        } else {
            console.log(user)
            return await this.bulkUpdate(userObject, user.id)
        }
    }

    async getCourses() {

        const config = {
            method: 'get',
            url: customersUrl + "?populate=*",
            headers: {}
        };
        return await axios(config)
            .then(function (response) {
                return response.data.data;
            })

    }

    async getCourseDetails(courseId) {


        const query = qs.stringify({
            filters: {
                course_id: {
                    $eq: courseId,
                },
            },
            populate: "*"

        }, {});
        const config = {
            method: 'get',
            url: customersUrl + `?${query}`,
            headers: {}
        };

        return await axios(config)
            .then(function (response) {
                return response.data.data;
            })

    }
}

export default CustomerRepository

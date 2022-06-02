import axios from "axios"
import qs from "qs";

export const apiAddress = "http://54.183.216.31"
export const coursesUrl = apiAddress + "/api/courses"


class CourseRepository {

    deleteCourse(courseObject) {
    }

    async createCourse(courseObject) {
        const data = JSON.stringify({
            "data": courseObject
        });

        const config = {
            method: 'post',
            url: coursesUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    async getCourses() {

        const config = {
            method: 'get',
            url: coursesUrl + "?populate=*",
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
            url: coursesUrl + `?${query}`,
            headers: {}
        };

        return await axios(config)
            .then(function (response) {
                return response.data.data;
            })

    }

    getImageUrl(imageUrl) {
        return apiAddress + imageUrl
    }
}

export default CourseRepository

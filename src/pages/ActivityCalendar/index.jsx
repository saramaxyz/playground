import React, {useEffect, useState} from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const dataUrl = "https://sarama-public.s3.us-west-1.amazonaws.com/bark_data.json"
const getDateKey = (a) => `${a.getFullYear()}-${a.getMonth()}-${a.getUTCDate()}`

function groupTimesBy(theList) {
    var toReturn = {};

    for (let listItem of theList) {
        const {date, duration} = listItem
        const dateKey = getDateKey(new Date(date))
        if (toReturn.propertyIsEnumerable(dateKey))
            toReturn[dateKey] += duration
        else
            toReturn[dateKey] = duration

    }

    return Object.keys(toReturn).map(key => [key, toReturn[key]]).sort((a, b) => {

        return new Date(b[0]).getTime() - new Date(a[0]).getTime()
    }).reverse()
}

const ActivityCalendar = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(setData)
    })


    if (data.length === 0)
        return null


    const points = groupTimesBy(data).map(([d, value]) => {
        return {
            date: getDateKey(new Date(d)),
            count: value
        }
    })

    console.log(points)
    return <CalendarHeatmap
        startDate={new Date(points[0].date)}
        endDate={new Date(points[points.length - 1].date)}
        values={points}
    />


}

export default ActivityCalendar

import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DailyBarkGraph from "./DailyBarkGraph";

const dataUrl = "https://sarama-public.s3.us-west-1.amazonaws.com/bark_data.json"
const getDateKey = (a) => new Date(a.getFullYear(),a.getMonth(),a.getUTCDate(),0,0,0)

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
        const {date, duration} = listItem
        const dateKey = getDateKey(new Date(date))
        const finishDate = new Date(new Date(date).getTime() + 60000*duration )
        const interval = [date,finishDate]
        if (toReturn[dateKey] === undefined){
            toReturn[dateKey] = [ interval ]

        }
        else{
            toReturn[dateKey].push(interval)

        }

    }

    return toReturn
}

const ActivityCalendar = () => {

    const [data, setData] = useState([])
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(setData)
    },[])


    if (data.length === 0)
        return null


    const dailyBarkData = processBarkData(data)

    return (
        <div className='calendar-container' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:"flex-start",
        }}>
            <div style={{
                display: 'flex',
                marginTop:"4rem",
                marginLeft:"4rem"
            }}>
                <Calendar
                    minDate={new Date(2022,0)}
                    maxDate={new Date()}
                    onChange={setDate}
                    value={date}  />
            </div>
            <div style={{
                marginTop:"4rem"
            }}>
                <DailyBarkGraph date={date} data={dailyBarkData[date]}/>
            </div>
        </div>


    );

}

export default ActivityCalendar

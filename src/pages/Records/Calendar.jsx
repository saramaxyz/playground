import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DailyBarkGraph from "./DailyBarkGraph";
import {connect} from "react-redux"
import useBarks from "../../hooks/useBarks"



// const dataUrl = "https://sarama-public.s3.us-west-1.amazonaws.com/bark_data.json"
const getDateKey = (a) => new Date(a.getFullYear(), a.getMonth(), a.getUTCDate(), 0, 0, 0)

function processBarkData(barkData) {
    var toReturn = {};

    for (let listItem of barkData) {
        const {date, duration, prefix} = listItem
        const dateKey = getDateKey(new Date(date))
        const finishDate = new Date(new Date(date).getTime() + 60000 * duration)
        const interval = [date, finishDate, prefix]
        if (toReturn[dateKey] === undefined) {
            toReturn[dateKey] = [interval]

        } else {
            toReturn[dateKey].push(interval)

        }

    }

    return toReturn
}

const ActivityCalendar = () => {

    const [date, setDate] = useState(new Date());
    const data = useBarks()

    if (data.length === 0)
        return <h2>
            No barks recorded
        </h2>


    const dailyBarkData = processBarkData(data)

    return (
        <div className='calendar-container' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "flex-start",
            marginTop:"2rem"
        }}>
            <div style={{
                display: 'flex',
                justifyContent: "center"
            }}>
                <Calendar
                    minDate={new Date(2022, 0)}
                    maxDate={new Date()}
                    onChange={setDate}
                    value={date}
                    formatDay={(locale, date) => {
                        return <div style={{
                            position: 'relative',
                        }}>
                            <h2>{date.getDate()}</h2>
                            <p style={{
                                position: 'absolute',
                                bottom: "1rem",
                                left: "1rem"
                            }}>{(!!dailyBarkData[date]) ? dailyBarkData[date].length : 0}</p>
                        </div>
                    }}

                />
            </div>


                <DailyBarkGraph date={date} data={dailyBarkData[date]}/>
        </div>


    );

}

export default ActivityCalendar

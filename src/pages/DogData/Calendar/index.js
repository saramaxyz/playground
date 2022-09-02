import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DailyBarkGraph from "./DailyBarkGraph";

const months = {
    "Jan":0,
    "Feb":1,
    "Mar":2,
    "Apr":3,
    "May":4,
    "Jun":5,
    "Jul":6,
    "Aug":7,
    "Sep":8,
    "Oct":9,
    "Nov":10,
    "Dec":11
}



const getDateKey = (a) => new Date(a.getFullYear(), a.getMonth(), a.getUTCDate(), 0, 0, 0)


function processBarkData(barkData) {
    var toReturn = {};

    for (let listItem of barkData) {
        const [filename, dogName, mood] = listItem
        const rawDate = filename
                .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                .split(";")[3].split(".")[0]
        const hourRaw = rawDate.split(" ")[3]
        const hour = parseInt(hourRaw.slice(0,2))
        const minute = parseInt(hourRaw.slice(2,4))
        const second = parseInt(hourRaw.slice(4,6))


        const date = new Date(rawDate.split(" ")[2], months[rawDate.split(" ")[1]], rawDate.split(" ")[0],hour,minute,second)
        const dateKey = getDateKey(new Date(date))
        const interval = [date, mood]
        if (toReturn[dateKey] === undefined) {
            toReturn[dateKey] = [interval]

        } else {
            toReturn[dateKey].push(interval)

        }

    }
    return toReturn
}

const ActivityCalendar = ({data}) => {

    const [date, setDate] = useState(new Date());
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
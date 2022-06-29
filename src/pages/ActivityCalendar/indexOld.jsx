import {BarChart, ChartContainer, ChartRow, Charts, Resizable, styler, YAxis} from "react-timeseries-charts"
import {Index, TimeSeries} from "pondjs";
import {useEffect, useState} from "react";


const dataUrl = "https://sarama-public.s3.us-west-1.amazonaws.com/bark_data.json"
const getDateKey = (a) => new Date(a.getFullYear(), a.getMonth(), a.getUTCDate())

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

    let sorted = Object.keys(toReturn).map(key => [key, toReturn[key]]).sort((a, b) => {

        return new Date(b[0]).getTime() - new Date(a[0]).getTime()
    }).reverse()
    return sorted
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


    const points = groupTimesBy(data).map(([d, value]) => [
        Index.getIndexString("1d", new Date(d)),
        value
    ])
    const series = new TimeSeries({
        name: "hilo_rainfall",
        columns: ["index", "precip"],
        points
    });
    console.log(series)
    const style = styler([
        {key: "precip", color: "#A5C8E1"},
    ]);


    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <b>BarChart</b>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <Resizable>
                        <ChartContainer timeRange={series.range()}>
                            <ChartRow height="150">
                                <YAxis
                                    id="bark"
                                    label="Bark activity (minutes)"
                                    format=".2f"
                                    width="70"
                                    type="linear"
                                />
                                <Charts>
                                    <BarChart
                                        axis="rain"
                                        style={style}
                                        spacing={1}
                                        columns={["precip"]}
                                        series={series}
                                    />
                                </Charts>
                            </ChartRow>
                        </ChartContainer>
                    </Resizable>
                </div>
            </div>
        </div>
    );


}

export default ActivityCalendar

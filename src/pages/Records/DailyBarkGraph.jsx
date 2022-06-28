import React, {useEffect, useRef} from "react";
import * as d3 from "d3";

const convertToTimeSeries = (date, intervals) => {

    const out = []

    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate() + 1)
    const todayTimestamp = date.getTime() / 60 / 1000
    let tmp = new Date(date)
    let time = nextDay.getTime() / 60 / 1000 - todayTimestamp


    for (let i = 0; i < 24 * 60; i++) {
        tmp.setMinutes(tmp.getMinutes() + 1)
        out.push([`${tmp.getHours()}:${tmp.getMinutes()}`, 0])

    }

    for (let interval of intervals) {
        const begin = parseInt(new Date(interval[0]).getTime() / 60 / 1000 - todayTimestamp)
        const end = parseInt(new Date(interval[1]).getTime() / 60 / 1000 - todayTimestamp)
        out.forEach((_, index) => {
            if (index > begin && index < end) {
                out[index][1] = 1
            }
        })
    }
    return out
}

const DailyBarkGraph = ({date, data = null}) => {

    const ref = useRef()

    useEffect(() => {
        if (data === null) {
            return
        }
        const parseTime = d3.timeParse("%H:%M")
        const {current} = ref
        current.querySelectorAll("*").forEach(child => child.remove())

        const timeSeries = convertToTimeSeries(date, data).map(([date, value]) => [parseTime(date), value])

        var margin = {top: 20, right: 20, bottom: 50, left: 70},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#daily-bark").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);
        x.domain(d3.extent(timeSeries, (d) => {
            return d[0];
        }));
        y.domain([0, 1]);


        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        console.log(d3.axisBottom(x).tickValues())

        svg.append("g")
            .call(
                d3.axisLeft(y)
                    .tickFormat((d,i) => {
                        if(d === 1) return "BARK"
                        else return null
                    }).tickValues([1])
            );


        var valueLine = d3.line()
            .x((d) => {
                return x(d[0]);
            })
            .y((d) => {
                return y(d[1]);
            }).defined(function (d) {
                return d[1] !== 0;
            });


        svg.append("path")
            .data([timeSeries])
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 16)
            .attr("d", valueLine);
    }, [data])


    if (data === null) {
        return <h2>
            No activities detected.
        </h2>
    }


    return <>
        <h2 style={{
            marginLeft:"4rem"
        }}>Bark calendar</h2>
        <div ref={ref} style={{
            width: "100vw",
            height: "100vh"
        }} id={"daily-bark"}/>
    </>
}

export default DailyBarkGraph

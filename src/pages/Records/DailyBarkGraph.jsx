import React, {useEffect, useRef} from "react";
import * as d3 from "d3";
import {connect} from "react-redux"


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

const DailyBarkGraph = ({auth, date, data = null}) => {

    const ref = useRef()


    useEffect(() => {
        if (data === null) {
            return
        }
        const parseTime = d3.timeParse("%H:%M")
        const {current} = ref
        current.querySelectorAll("*").forEach(child => child.remove())


        const durationSeries = data.map(d => {
            const hourAndMinute = `${new Date(d[0]).getHours()}:${new Date(d[0]).getMinutes()}`
            return [parseTime(hourAndMinute), (d[1] - d[0]) / 60 / 1000]
        })
        const timeSeries = convertToTimeSeries(date, data).map(([date, value]) => [parseTime(date), value])

        var margin = {top: 20, right: 20, bottom: 50, left: 32},
            width = 640 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#daily-bark").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // var x = d3.scaleTime().range([0, width]);
        // var y = d3.scaleLinear().range([height, 0]);


        const x = d3.scaleLinear().range([0, width]);
        const y = d3.scaleTime().range([0, height]);

        x.domain([0, 2]);

        y.domain(d3.extent(timeSeries, (d) => {
            return d[0];
        }));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).tickValues(d3.axisLeft(y).scale().ticks(12).slice(1)));


        svg.append("g")
            .call(
                d3.axisBottom(x).tickValues([])
            )
            .attr("transform", `translate(0, ${2 * width})`)
            .call(g => g.select(".domain").remove())


        var rects = svg.selectAll('rect')
            .data(durationSeries).enter()
            .append('rect')
            .attr('x', margin.left)
            .attr('y', (d, i) => {
                const endDay = new Date(0)
                endDay.setHours(23, 59)
                const current = new Date(0)
                current.setHours(d[0].getHours(), d[0].getMinutes(), d[0].getMinutes())
                return parseInt(current / endDay * (height - margin.top)) + margin.top
            })
            .attr('width', () => width)
            .attr('height', (d) => d[1])
            .attr("fill", "red")

        var labels = svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(function (d) {
                return d
            })
            .attr("y", function (d, i) {
                return i * 15 + 10
            })
            .attr("x", function (d) {
                return d - 20
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", "white")


        rects.on("mouseover", function (d) {
            d3.select(this)
                .attr("fill", "rgb(0," + d + ",0)")
                .style("cursor","pointer")

        })

        rects.on("click", function (_, i) {
            let controlDate = new Date(i)

            data.forEach(([date, _, prefix]) => {
                date = new Date(date)
                date.setMinutes(date.getMinutes() - 10)
                if (date.getHours() === controlDate.getHours() && date.getMinutes() === controlDate.getMinutes()) {
                    console.log(prefix)
                    window.open("https://sarama-audio-files.s3.us-west-1.amazonaws.com/" + prefix)
                }
            })
            d3.select(this)
                .attr("fill", "yellow")
        })

        rects.on("mouseout", function (d) {
            d3.select(this)
                .attr("fill", "red")
                .style("cursor","default")
        })


    }, [data])


    if (data === null) {
        return <h2 style={{
            textAlign: "center"
        }}>
            No activities detected.
        </h2>
    }


    return <div style={{
        width:"100%",
        height:"16rem",
        display: "flex",
        flexDirection:"column",
        alignItems:"center"
    }}>
        <h2 style={{
            textAlign: 'center',
            marginTop:"2rem",
            marginBottom:"2rem"
        }}>Bark calendar</h2>
        <div ref={ref} id={"daily-bark"}/>
    </div>
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(DailyBarkGraph)

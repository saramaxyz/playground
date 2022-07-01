import React, {useEffect, useRef, useState} from "react"
import useScreenSize from "use-screen-size";
import * as d3 from "d3";
import BottomDrawer from "./BottomDrawer";

const origData = [[6.57702, 10.969171],
    [6.016272, 12.361106],
    [4.0511127, 14.098904],
    [5.191047, 14.038471],
    [5.827024, 11.185174],
    [5.916754, 10.760244],
    [5.3452363, 11.981587],
    [6.286866, 11.528534],
    [4.6060653, 14.287905],
    [4.0442743, 12.78861],
    [4.7343946, 12.4975815],
    [5.271102, 12.792229],
    [4.2247825, 13.376097],
    [4.513495, 11.970427],
    [4.7637844, 13.559613]]

const dataXy = [
    {x: 6.57702, y: 10.969171},
    {x: 6.016272, y: 12.361106},
    {x: 4.0511127, y: 14.098904},
    {x: 5.191047, y: 14.038471},
    {x: 5.827024, y: 11.185174},
    {x: 5.916754, y: 10.760244},
    {x: 5.3452363, y: 11.981587},
    {x: 6.286866, y: 11.528534},
    {x: 4.6060653, y: 14.287905},
    {x: 4.0442743, y: 12.78861},
    {x: 4.7343946, y: 12.4975815},
    {x: 5.271102, y: 12.792229},
    {x: 4.2247825, y: 13.376097},
    {x: 4.513495, y: 11.970427},
    {x: 4.7637844, y: 13.559613}
]

const data = [
    {
        x: 6.57702,
        y: 10.969171,
        url: 'Kai;⚠️ Wants Attention;195c9e0b320945f9fb42a7ddf24312e7;16 Jun 2022 180653 -0700.wav'
    },
    {
        x: 6.016272,
        y: 12.361106,
        url: 'Kai;⚠️ Wants Attention;24b3866ec18dd49b02baa67c721d6244;16 Jun 2022 180627 -0700.wav'
    },
    {
        x: 4.0511127,
        y: 14.098904,
        url: 'Kai;🍖Hungry🎾Playful;d3770c7e983cb16d4481dc997d84d87a;16 Jun 2022 184503 -0700.wav'
    },
    {
        x: 5.191047,
        y: 14.038471,
        url: 'Kai;🎾Playful;a71aa12594653a1831329b7c9bdd8ea1;16 Jun 2022 161858 -0700.wav'
    },
    {
        x: 5.827024,
        y: 11.185174,
        url: 'Kai;🎾Playful;bac23f213a14b4ce5a06c44f1ab9185c;16 Jun 2022 184224 -0700.wav'
    },
    {
        x: 5.916754,
        y: 10.760244,
        url: 'Kai;🤷🏽‍♂️Dunno;d32a20a19ec501802371625e8bfd38f4;18 Jun 2022 153734 -0700.wav'
    },
    {
        x: 5.3452363,
        y: 11.981587,
        url: 'Kai;🤷🏽‍♂️Dunno;f853f692885872aa974a93f2ec800821;11 Jun 2022 102031 -0700.wav'
    },
    {
        x: 6.286866,
        y: 11.528534,
        url: 'Kai;🤷🏽‍♂️Dunno;fd9b1e83c6ac3f49d7c5ab8559c3686a;18 Jun 2022 153810 -0700.wav'
    },
    {
        x: 4.6060653,
        y: 14.287905,
        url: 'Kai;🚨Intruder Alert;5cb5191dd7f39f381b065fa3c8deaf04;17 Jun 2022 130109 -0700.wav'
    },
    {
        x: 4.0442743,
        y: 12.78861,
        url: 'Kash\n' +
            'Kai;🚨Intruder Alert;5a9f32a7ea375d3849364d52717e1b23;12 Jun 2022 10:23:09 -0700.'
    },
    {
        x: 4.7343946,
        y: 12.4975815,
        url: 'KashKai;🤷🏽‍♂️Dunno;1a8f04339f44d524e19058be568f13f5;13 Jun 2022 090233 -0700.wav'
    },
    {
        x: 5.271102,
        y: 12.792229,
        url: 'KashKai;🤷🏽‍♂️Dunno;5f2ccd09240cbcc9084842a456178f24;17 Jun 2022 183121 -0700.wav'
    },
]

const labels = ['Kai;⚠️ Wants Attention;195c9e0b320945f9fb42a7ddf24312e7;16 Jun 2022 18:06:53 -0700.', 'Kai;⚠️ Wants Attention;24b3866ec18dd49b02baa67c721d6244;16 Jun 2022 18:06:27 -0700.', 'Kai;🍖Hungry\n🎾Playful;d3770c7e983cb16d4481dc997d84d87a;16 Jun 2022 18:45:03 -0700.', 'Kai;🎾Playful;a71aa12594653a1831329b7c9bdd8ea1;16 Jun 2022 16:18:58 -0700.', 'Kai;🎾Playful;bac23f213a14b4ce5a06c44f1ab9185c;16 Jun 2022 18:42:24 -0700.', 'Kai;🚨Intruder Alert;5cb5191dd7f39f381b065fa3c8deaf04;17 Jun 2022 13:01:09 -0700.', 'Kai;🤷🏽\u200d♂️Dunno;d32a20a19ec501802371625e8bfd38f4;18 Jun 2022 15:37:34 -0700.', 'Kai;🤷🏽\u200d♂️Dunno;f853f692885872aa974a93f2ec800821;11 Jun 2022 10:20:31 -0700.', 'Kai;🤷🏽\u200d♂️Dunno;fd9b1e83c6ac3f49d7c5ab8559c3686a;18 Jun 2022 15:38:10 -0700.', 'Kash\nKai;🚨Intruder Alert;5a9f32a7ea375d3849364d52717e1b23;12 Jun 2022 10:23:09 -0700.', 'Kash\nKai;🤷🏽\u200d♂️Dunno;1a8f04339f44d524e19058be568f13f5;13 Jun 2022 09:02:33 -0700.', 'Kash\nKai;🤷🏽\u200d♂️Dunno;5f2ccd09240cbcc9084842a456178f24;17 Jun 2022 18:31:21 -0700.']
const prafulId = "115087737562134809990"

const ClusterPlot = ({}) => {
    const size = useScreenSize()
    const ref = useRef()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [item, setItem] = useState(null)
    useEffect(() => {
        if (data === null) {
            return
        }
        const {current} = ref
        current.querySelectorAll("*").forEach(child => child.remove())

        var margin = {top: 16, right: 20, bottom: 256, left: 20},
            targetWidth = 640 - margin.left - margin.right,
            targetHeight = 500 - margin.top - margin.bottom;

        const aspect = targetHeight / targetWidth

        const width = size.width * .75
        const height = width * aspect


        var svg = d3.select("#cluster-plot")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);


        const xDomain = d3.extent(data, (d) => {
            return d.x;
        })
        var x = d3.scaleLinear()
            .domain([xDomain[0]-2,xDomain[1]+2])
            .range([0, width]);

        const yDomain = d3.extent(data, (d) => {
            return d.y;
        })
        var y = d3.scaleLinear()
            .domain([
                yDomain[0] - 2,
                yDomain[1] + 2
            ])
            .range([height, 0]);

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "bubble")
            .transition()
            .duration(800)


        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // var x = d3.scaleTime().range([0, width]);
        // var y = d3.scaleLinear().range([height, 0]);

        const handleClick = (_,d) => {
            data.forEach(({x,y,url}) => {
                if (d.x === x && d.y === y) {
                    const link = "https://sarama-audio-files.s3.us-west-1.amazonaws.com/" + prafulId + "/" + url
                    setDrawerOpen(true)
                    setItem({
                        prefix:url,
                        url: link
                    })
                }
            })
            d3.select(this)
        }

        svg.append("g")
            .attr("transform", `translate(0, ${margin.left})`)
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .on("click", handleClick)

            .attr("url", d => d.url)
            .attr("cx", function (d) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            })
            .attr("r", 10)
            .style("fill", "#69b3a2")


        d3.select(window)
            .on("resize", function () {
                svg.attr("width", width);
                svg.attr("height", height);
            });


        svg.on("mouseover", function (d) {
            d3.select(this)
                .attr("fill", "rgb(0," + d + ",0)")
                .style("cursor", "pointer")
        })


        if (window.ontouchstart === undefined) {
            svg.on("mouseout", function (d) {
                d3.select(this)
                    .attr("fill", "red")
                    .style("cursor", "default")
            })
        } else {

        }


    }, [size.width, data])

    return <div style={{
        width: "100%",
        height: "16rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <h2 style={{
            textAlign: 'center',
            marginTop: "2rem",
            marginBottom: "2rem"
        }}>Bark calendar</h2>
        <div ref={ref} id={"cluster-plot"}/>
        <BottomDrawer setDrawer={setDrawerOpen} item={item} open={drawerOpen}/>

    </div>
}

export default ClusterPlot

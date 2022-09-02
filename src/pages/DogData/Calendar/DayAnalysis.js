import React from "react"
import {colorOf} from "./DailyBarkGraph";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {SentimentSatisfied} from "@material-ui/icons";


const positive = ["Happy"]
const negative = ["Upset", "Fearful"]

const Box = ({color}) => {
    return <div style={{
        backgroundColor:color,
        width:"4rem",
        height:"4rem",
        marginBottom:"1rem",
        marginRight:".5rem"
    }}></div>
}

const DailyMoodAverage = ({
    negatives,
    positives
}) => {
    if(negatives > positives){
        return <SentimentVeryDissatisfiedIcon sx={{
            height:"12rem",
            width:"12rem"
        }} color={"error"}/>
    }else if(negatives < positives){
        return <SentimentVerySatisfiedIcon sx={{
            height:"12rem",
            width:"12rem"
        }} color={"success"}/>
    }else{
        return <SentimentSatisfied sx={{
            height:"12rem",
            width:"12rem"
        }} color={"warning"}/>
    }
}

const MoodContainer = ({mood,number}) => {
    return <div style={{
        display:"flex",
        width:"50%",
        alignItems:"center",
        justifyContent:"start"
    }}>
        <Box color={colorOf[mood]}/>
        {
            `Number of ${mood.toLowerCase()} barks: ${number}`
        }
    </div>

}

const DayAnalysis = ({ date, data = [] }) => {

    const numberOfPositives = data.reduce((total, elem) => {
        if (positive.includes(elem[1])) {
            return 1 + total
        } else {
            return total
        }
    },0)


    const numberOfNegatives = data.reduce( (total, elem) => {
        if (negative.includes(elem[1])) {
            return 1 + total
        } else {
            return total
        }
    },0)


    const numberOfHappyBarks = data.reduce( (total, elem) => {
        if (elem[1] === "Happy") {
            return 1 + total
        } else {
            return total
        }
    },0)

    const numberOfFearfulBarks = data.reduce( (total, elem) => {
        if (elem[1] === "Fearful") {
            return 1 + total
        } else {
            return total
        }
    },0)

    const numberOfUpsetBarks = data.reduce( (total, elem) => {
        if (elem[1] === "Upset") {
            return 1 + total
        } else {
            return total
        }
    },0)



    return <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:"16rem",
        marginTop:"-12rem",
        width:"96%",
    }}>
        <h2>Daily Barks</h2>
        <MoodContainer mood="Happy" number={numberOfHappyBarks}/>
        <MoodContainer mood="Fearful" number={numberOfFearfulBarks}/>
        <MoodContainer mood="Upset" number={numberOfUpsetBarks}/>
        <h2>Daily Mode</h2>
        <DailyMoodAverage positives={numberOfPositives} negatives={numberOfNegatives}/>

    </div>
}

export default DayAnalysis;
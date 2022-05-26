import React from "react"
import Sidebar from "../../components/Sidebar";
import GridContainer from "../../components/GridContainer";
import {connect} from "react-redux"
import "./style.scss"
import Description from "./Description";
import Card from "../../components/Card";
import acceptingStranger from "./assets/accepting_a_stranger.jpg"
import sittingPolitely from "./assets/sitting_politely.jpg"
import grooming from "./assets/grooming.jpeg"
import outForWalk from "./assets/out_for_walk.jpg"
import walkCrowd from "./assets/walk_crowd.jpeg"
import sitAndDown from "./assets/sit_and_down.jpeg"
import recall from "./assets/recall.png"
import reactionToDogs from "./assets/reaction_to_dogs.jpg"
import reactionToDistraction from "./assets/reaction_to_distraction.jpg"
import supervisedSeparation from "./assets/supervised_seperation.JPG"


const TestContainer = ({name, description, image}) => {
    return <Card className="test-container">
            <img src={image}/>
            <h3>{name}</h3>
    </Card>
}

const tests = [
    {
        name: "Test 1:Accepting a Stranger",
        description: "The dog must allow a friendly stranger to approach and speak to the dog’s owner. The evaluator will approach the dog and owner naturally, and will greet the owner while ignoring the dog. The owner and evaluator will shake hands and have a quick conversation. The dog must not ask nervous or shy.",
        image: acceptingStranger
    },
    {
        name: "Test 2:Sitting Politely for Petting",
        description: "Your dog must allow a friendly stranger to pet it while it is out with its handler (aka you).",
        image: sittingPolitely
    },
    {
        name: "Test 3:Appearance and Grooming",
        description: "Your dog must permit someone else to check it’s ears and front feet, as a groomer or veterinarian might do. The evaluator will inspect your dog to make sure it is clean, well groomed, and healthy (normal weight, clean, alert). ",
        image: grooming
    },
    {
        name: "Test 4:Out For A Walk",
        description: "You will walk your dog on a loose lead as the evaluator provides directions. In some cases, the path will be told to you beforehand. Other times, the evaluator will tell you when to turn as you are walking. Your dog may walk on either side of you, so long as your dog’s position shows that it knows you are in control and is paying attention to you.",
        image:outForWalk,
    },
    {
        name: "Test 5:Walking Through A Crowd",
        description: "Your dog will walk around with you and pass close to several people (at least three). This demonstrates that your dog can move politely in pedestrian traffic and can remain under control in public spaces.",
        image:walkCrowd,
    },
    {
        name: "Test 6:Sit and Down on Command + Staying In Place",
        description: "Your dog must be able to do sit and do down on your command. Then, the owners will choose a position (sit or down, it’s your choice) and leave the dog in the stay. Your dog will be on a 20ft long line for this evaluation.",
        image:sitAndDown
    },
    {
        name: "Test 7:Come When Called",
        description: "Your dog must come to you when called from a distance of 10 feet. You may tell your dog to “stay” or “wait,” or you can simply walk away with no instructions for the dog.",
        image:recall
    },
    {
        name: "Test 8:Reaction to Other Dogs",
        description: "You and your dog will be approached by another handler with his or her dog. You will approach one another from a distance of about 20 feet. Then you will stop, shake hands, and exchange pleasantries.",
        image:reactionToDogs
    },
    {
        name: "Test 9:Reaction to Distraction",
        description: "The evaluator will select and present two distractions, such as dropping an item or having a jogger run in front of the dog. The dog can express natural interest or curiosity, but should not show aggressiveness, panic, try to run away, or bark.",
        image:reactionToDistraction
    },
    {
        name: "Test 10:Supervised Separation",
        description: "An evaluator will ask if they can watch your dog, and then will take your dog’s leash. You, the owner, will go out of sight for three minutes. Your dog doesn’t need to stay completely still, but must not bark, whine, pace nervously, or show any sign of anxiety. This test demonstrates that your dog can be left with a trusted person.",
        image:supervisedSeparation
    },
]

const CgcPage = () => {

    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        width:"100vw",
        height:"100vh"
    }}>
        <Sidebar/>
        <GridContainer>
            <Description/>
            <div className={"cgc-container__tests"}>
                {
                    tests.map(({name, description, image}) => {
                        return <TestContainer name={name} description={description} image={image}/>
                    })
                }
            </div>
        </GridContainer>

        {/*<div className={"cgc-container"}>*/}
        {/*    <Description/>*/}
        {/*    <div className={"cgc-container__tests"}>*/}
        {/*        {*/}
        {/*            tests.map(({name, description, image}) => {*/}
        {/*                return <TestContainer name={name} description={description} image={image}/>*/}
        {/*            })*/}
        {/*        }*/}
        {/*    </div>*/}
        {/*</div>*/}

    </div>
}


export default connect()(CgcPage)

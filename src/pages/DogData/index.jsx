import React from "react"
import {
    useParams
} from "react-router-dom";
import AppBoilerplate from "../../components/AppBoilerplate";
import Calendar from "./Calendar"


const data = [
    [`Kai;⚠️ Wants Attention;195c9e0b320945f9fb42a7ddf24312e7;16 Jun 2022 180653 -0700.m4a`,"Kai","Happy"],
    [`Kai;⚠️ Wants Attention;24b3866ec18dd49b02baa67c721d6244;16 Jun 2022 180627 -0700.m4a`,"Kai","Fearful"],
    [`Kai;🍖Hungry🎾Playful;d3770c7e983cb16d4481dc997d84d87a;16 Jun 2022 184503 -0700.m4a`,"Kai","Upset"],
    [`Kai;🎾Playful;a71aa12594653a1831329b7c9bdd8ea1;16 Jun 2022 161858 -0700.m4a`,"Kai","Upset"],
    [`Kai;🎾Playful;bac23f213a14b4ce5a06c44f1ab9185c;16 Jun 2022 184224 -0700.m4a`,`Kai`,`Unknown`],
    [`Kai;🚨Intruder Alert;5cb5191dd7f39f381b065fa3c8deaf04;17 Jun 2022 130109 -0700.m4a`,`Kai`,`Upset`],
    [`Kai;🤷🏽‍♂️Dunno;d32a20a19ec501802371625e8bfd38f4;18 Jun 2022 153734 -0700.m4a`,`Kai`,`Fearful`],
    [`Kai;🤷🏽‍♂️Dunno;f853f692885872aa974a93f2ec800821;11 Jun 2022 102031 -0700.m4a`,`Kai`,`Happy`],
    [`Kai;🤷🏽‍♂️Dunno;fd9b1e83c6ac3f49d7c5ab8559c3686a;18 Jun 2022 153810 -0700.m4a`,`Kai`,`Upset`],
    [`KashKai;🚨Intruder Alert;5a9f32a7ea375d3849364d52717e1b23;12 Jun 2022 102309 -0700.m4a`,`Kash`,`Upset`],
    [`KashKai;🤷🏽‍♂️Dunno;1a8f04339f44d524e19058be568f13f5;13 Jun 2022 090233 -0700.m4a`,`Kash`,`Happy`],
    [`KashKai;🤷🏽‍♂️Dunno;5f2ccd09240cbcc9084842a456178f24;17 Jun 2022 183121 -0700.m4a`,`Kash`,`Happy`],
]



// Fear = #000000
// Happy = #32c809
// Upset = #0910B3
//

const DogData = () => {
    const {dogName} = useParams()

    const dogData = data.filter(([_,name]) => name === dogName)


    return <AppBoilerplate>
        <h1>{dogName}</h1>
        <Calendar data={dogData}/>
    </AppBoilerplate>
}

export default DogData;

import React from "react"
import {connect} from "react-redux";
import "./style.scss"

const texts = [
    "The Canine Good Citizen Program was designed by the American Kennel Club (AKC) to encourage dog owners to teach their dogs good manners. It also promotes responsible pet ownership. The test trains your dog to be well-behaved and calm in any situation.",
    "Once your dog is ready, it can take the Canine Good Citizen test. An AKC Approved Evaluator administers the test, and if your dog passes, it receives a Canine Good Citizen certificate. "
]


const Description = () => {
    return <div className="description-container">
        <div className="description-container__left">
            <div className="description-container__left__image"/>
        </div>
        <div className="description-container__right">
            <h2 className="description-container__right__header">Canine Good Citizen Training</h2>
            <p className="description-container__right__text">{texts[0]}</p>
            <p className="description-container__right__text">{texts[1]}</p>
        </div>
    </div>
}

export default connect()(Description)

import React, { Component } from 'react'
import LexiOne from '../../../static/assets/img/lexiOne.jpg'
import LexiTwo from '../../../static/assets/img/lexiTwo.jpg'

export default class Investments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: "",
            last: "",
            email: "",
            instagram:"",
            purpose:"",
            joining:"",
            time:"",
            scenery:"",
            about:"",
            phone:"",
            questions:"",
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value})
    } 

    render() {
        return (
            <div className="investment-wrapper">

                <div className="pricing">

                    <div className="pricing-box-family">

                        <div className="pricing-box-family-heading">

                            <h1>
                                Family Session
                            </h1>

                        </div>

                        <div className="pricing-box-family-price">
                            <p>
                                $100
                            </p>
                        </div>

                        <div className="pricing-box-family-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolorem molestiae similique velit consectetur? Animi sit perspiciatis itaque in reprehenderit maxime quis, quaerat tempore laudantium.
                            </p>
                        </div>

                        <div className="pricing-box-family-button">
                            <button>
                                Book Now!
                            </button>
                        </div>

                        
                    </div>

                    <div className="pricing-box-couple">

                        <div className="pricing-box-couple-heading">

                            <h1>
                                couple Session
                            </h1>

                        </div>

                        <div className="pricing-box-couple-price">
                            <p>
                                $100
                            </p>
                        </div>

                        <div className="pricing-box-couple-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolorem molestiae similique velit consectetur? Animi sit perspiciatis itaque in reprehenderit maxime quis, quaerat tempore laudantium.
                            </p>
                        </div>

                        <div className="pricing-box-couple-button">
                            <button>
                                Book Now!
                            </button>
                        </div>
                        
                    </div>

                    <div className="pricing-box-individial">

                        <div className="pricing-box-individial-heading">

                            <h1>
                                individial Session
                            </h1>

                        </div>

                        <div className="pricing-box-individial-price">
                            <p>
                                $100
                            </p>
                        </div>

                        <div className="pricing-box-individial-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolorem molestiae similique velit consectetur? Animi sit perspiciatis itaque in reprehenderit maxime quis, quaerat tempore laudantium.
                            </p>
                        </div>

                        <div className="pricing-box-individial-button">
                            <button>
                                Book Now!
                            </button>
                        </div>
                        
                    </div>


                </div>


            </div>
        )
    }
}
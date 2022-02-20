import React, { Component } from 'react'
import LexiOne from '../../../static/assets/img/lexiOne.jpg'
import LexiTwo from '../../../static/assets/img/lexiTwo.jpg'





export default class About extends Component {
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
            <div className="about-wrapper">

                <div className="heading">
                    <h1>
                        Hello Friends!
                    </h1>

                    <p>
                        Here is a little about myself
                    </p>
                </div>



                <div className="bottom-about">
                    <div className="image">
                        <img src={LexiTwo} alt="lexi" />

                    </div>    
                    

                    <div className="text">

                        <p>

                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nam omnis non, officiis sed illum dolorem aperiam ipsam voluptas magnam, corrupti at nihil numquam ullam! Voluptates minima magnam eum corrupti accusantium, repellat molestiae quod, reiciendis ducimus unde deserunt minus consequuntur temporibus consequatur impedit dolorum, labore odio obcaecati cum similique laudantium neque qui quaerat voluptatem. Similique, impedit officiis nemo ipsa, sint enim eos omnis maxime quasi est illo ab? Omnis ullam quo doloremque suscipit atque debitis non cumque consectetur, rerum explicabo veritatis est enim magni. Architecto enim adipisci rerum magni beatae dolorem a, harum mollitia cupiditate, incidunt eaque molestiae expedita numquam.

                        </p>

                    </div>
                        
                    
                </div>
            </div>
        )
    }
}
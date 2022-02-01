import React, { Component } from 'react'
import LexiOne from '../../../static/assets/img/lexiOne.jpg'
import LexiTwo from '../../../static/assets/img/lexiTwo.jpg'

export default class wedding extends Component {
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
            <div className="wedding-wrapper">

                <div className="top-wedding">

                    <div className="image">
                        <img src={LexiTwo} alt="lexi" />

                        <div className="text">
                            <h2>
                                
                                Lets capture a piece of your love story!
                            </h2>

                        </div>
                    </div>    
                </div>

                <div className="bottom-wedding">


                    <div className="left-hand-text">

                        <div className="text">

                            <div className="top">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel assumenda, repellendus qui beatae consectetur fugit?
                            </div>

                            <div className="bottom">
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa ab mollitia? Quas, veniam debitis odio architecto tempora autem? Voluptatibus.
                                </div>

                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel consequuntur veniam, dolorem quo nam nisi dolor quasi magni, saepe dolores, itaque voluptatum? Sapiente ullam beatae reprehenderit repellendus aut consequatur!
                                </div>
                            </div>
                        </div>

                        <div className="image-text">
                            <img src={LexiOne} alt="example" />
                        </div>

                    </div>

                    <div className="input-boxes">

                        <div className="name">

                            <div className="input-text-wedding">
                                <div className="text">
                                    *First Name
                                </div>

                                    <input 
                                        type="input" 
                                        name = "First"
                                        value = {this.state.first}
                                        onChange = {this.handleChange}
                                    />
                            </div>

                            <div className="input-text-wedding">
                                <div className="text">
                                    *Last Name
                                </div>

                                <input 
                                    type="input" 
                                    name = "Last"
                                    value = {this.state.last}
                                    onChange = {this.handleChange}
                                />
                            </div>

                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                *Email
                            </div>

                            <input 
                                type="input" 
                                name = "email"
                                value = {this.state.email}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>


                            <input 
                                type="input" 
                                name = "instagram"
                                value = {this.state.instagram}
                                onChange = {this.handleChange}
                            />

                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>
                            
                            <input 
                                type="input" 
                                name = "purpose"
                                value = {this.state.purpose}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>
                            

                            <input 
                                type="input" 
                                name = "joining"
                                value = {this.state.joining}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>

                            <input 
                                type="input" 
                                name = "time"
                                value = {this.state.time}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>

                            <input 
                                type="input" 
                                name = "scenery"
                                value = {this.state.scenery}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>

                            <input 
                                type="input" 
                                name = "about"
                                value = {this.state.about}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>

                            <input 
                                type="input" 
                                name = "phone"
                                value = {this.state.phone}
                                onChange = {this.handleChange}
                            />
                        </div>

                        <div className="input-text-wedding">
                            <div className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque reiciendis esse quibusdam corrupti eos, expedita ratione eum maxime iure unde alias magnam nemo eius.
                            </div>

                            <input 
                                type="input" 
                                name = "questions"
                                value = {this.state.questions}
                                onChange = {this.handleChange}
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
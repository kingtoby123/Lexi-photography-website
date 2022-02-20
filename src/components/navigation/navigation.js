import React, { Component } from 'react'

import { NavLink } from "react-router-dom";


export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="navigation-wrapper">

                <div className="nav-link-wrapper">
                    <div>
                      <NavLink exact to="/" activeClassName="nav-link-active">
                          <p>
                                Home
                          </p>
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about" activeClassName="nav-link-active">

                            <p>

                                About Me
                            </p>

                        </NavLink>

                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/investments" activeClassName="nav-link-active">

                            <p>
                                Investment

                            </p>



                        </NavLink>

                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/session" activeClassName="nav-link-active">

                            <p>

                                Book A Session
                            </p>

                        </NavLink>

                    </div>
                </div>

                    

            </div>
                
        )
    }
}


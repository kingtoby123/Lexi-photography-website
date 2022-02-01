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
                <div className="left-side">

                <div className="nav-link-wrapper">
                      <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                      </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/couple" activeClassName="nav-link-active">
                            Couple Inquiry

                        </NavLink>

                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/family" activeClassName="nav-link-active">
                            Family Inquiry

                        </NavLink>

                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/wedding" activeClassName="nav-link-active">
                            Wedding Inquiry

                        </NavLink>

                    </div>

                    

                </div>
                
            </div>
        )
    }
}


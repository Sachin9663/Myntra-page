import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './nav.js'
import './header.css';
import SearchBox from "./searchBox";
import HeaderIcon from "./icon";




class Header extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <div>
                        <Link to='#'><h1></h1></Link>
                    </div>
                    <div>
                        <Nav/>
                    </div>
                    <div>
                        <SearchBox/>
                    </div>
                    <div>
                        <HeaderIcon/>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Header;

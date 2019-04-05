import React, { Component } from 'react';
import Nav from './nav.js'
import './header.css';
import SearchBox from "./searchBox";
import HeaderIcon from "./icon";




class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div>
                        <h1></h1>
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
        )
    }
}
export default Header;

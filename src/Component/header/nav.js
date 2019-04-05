import React, { Component } from 'react';
import './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
            <Router>
            <div className="_nav">
                <div className='_list'>
                    <ul>
                        <li>
                            <Link to="#"> Men</Link>
                        </li>
                        <li>
                            <Link to="#"> Woman</Link>
                        </li>
                        <li>
                            <Link to="#"> Kids</Link>
                        </li>
                        <li>
                            <Link to="#"> Home & Living</Link>
                        </li>
                        <li>
                            <Link to="#"> Discover</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </Router>
        );
    }
}
export default Nav;

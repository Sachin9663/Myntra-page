import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="_nav">
                <div className='_list'>
                    <ul>
                        <li>Men</li>
                        <li>Woman</li>
                        <li>Kids</li>
                        <li>Home & Living</li>
                        <li>Discover</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Nav;

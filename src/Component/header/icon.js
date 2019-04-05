import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './icon.css';

class HeaderIcon extends Component{
    render() {
        return(
            <div className='header-Icon'>
                <div className='icon' >
                    <Link to='#'>
                        <span><i className="fas fa-user-alt"></i></span>
                        <div className="texts">Profile</div>
                    </Link>
                </div>
                <div className='icon'>
                    <Link to='#'>
                        <span><i className="fas fa-clipboard-check"></i></span>
                        <div className="texts">Wishlist</div>
                    </Link>
                </div>

                <div className='icon'>
                    <Link to='#'>
                        <span><i className="fas fa-shopping-bag"></i></span>
                        <div className="texts">Bag</div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default HeaderIcon;
import React, { Component } from 'react';
import './icon.css';

class HeaderIcon extends Component{
    render() {
        return(
            <div className='header-Icon'>
                <div className='icon' >
                    <span><i className="fas fa-user-alt"></i></span>
                    <div className="texts">Profile</div>
                </div>
                <div className='icon'>
                    <span><i className="fas fa-clipboard-check"></i></span>
                    <div className="texts">Wishlist</div>
                </div>
                <div className='icon'>
                    <span><i className="fas fa-shopping-bag"></i></span>
                    <div className="texts">Bag</div>
                </div>
            </div>
        )
    }
}
export default HeaderIcon;
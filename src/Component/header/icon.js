import React, { Component } from 'react';
import './icon.css';

class HeaderIcon extends Component{
    render() {
        return(
            <div className='header-Icon'>
                <div className='icon icon1' >
                    <span><i className="fas fa-user-alt"></i></span>
                    <div className="text">Profile</div>
                </div>
                <div className='icon icon2'>
                    <span><i className="fas fa-clipboard-check"></i></span>
                    <div className="text">Wishlist</div>
                </div>
                <div className='icon icon3'>
                    <span><i className="fas fa-shopping-bag"></i></span>
                    <div className="text">Bag</div>
                </div>
            </div>
        )
    }
}
export default HeaderIcon;
import React, { Component } from 'react';
import './searchBox.css';



class SearchBox extends Component{
    render(){
        return(
            <div className='search-Box'>
                <span className='font-awesome'><i className="fas fa-search"></i></span>
                <input type='text'
                    placeholder='Search for products, brands and more'
                />
            </div>
        )
    }
}
export default SearchBox;
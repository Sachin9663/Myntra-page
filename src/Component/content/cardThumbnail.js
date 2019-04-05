import React, {Component} from 'react';
import './thumbnail.css';

class Brandthumbnail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let { image , message} = this.props;
        return(
            <div>
                <div className='cardProp'>
                    <div className='imgShadow'>
                        <img src={image} />
                    </div>
                    <div className="brand-info">
                        <span className='deals'>HOT DEALS</span>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Brandthumbnail;
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
                    <img src={image} />
                    <div className="brand-info">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Brandthumbnail;
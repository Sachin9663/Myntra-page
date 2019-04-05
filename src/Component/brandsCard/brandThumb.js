import React, {Component} from 'react';
import './brandThumb.css';
class Thumb extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let { image} = this.props;
        return(
                <div className='brand-image'>
                    <img src={image} />
                </div>
        )
    }
}
export default Thumb;
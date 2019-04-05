import React,{Component} from "react";
import './text.css';

class Text extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='text'>
                <h2>Brands in Focus</h2>
                <p>Show some brands Love</p>
            </div>
        )
    }
}
export default Text;
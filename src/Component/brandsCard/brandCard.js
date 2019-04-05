import React,{Component} from 'react';
import data from "../../images";
import Thumb from "./brandThumb";
import './brandCard.css';

class Card extends Component{
    constructor(props) {
        super(props);

    }
    render(){
            let arr = data["brands-focus-images"];
            return(
                    <div className='b-card'>
                        {
                            arr.map(item => {
                                return(
                                    <div className='thumb'>
                                        <Thumb
                                            image={item.image}/>
                                    </div>
                                )
                            })

                        }
                    </div>
            )
    }
}
export default Card;


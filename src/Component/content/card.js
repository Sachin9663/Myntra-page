import React,{Component} from 'react';
import data from '../../images';
import Brandthumbnail from './cardThumbnail';
import './card.css';


class Brands extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let arr = data["deals-card-images"];
        return(
            <div>
                <div className='topText'>
                </div>
                <div className='cards'>

                {
                    arr.map(item => {
                        return(

                            <div>
                                <Brandthumbnail
                                    image={item.image}
                                    message={item.message}
                                />
                            </div>

                        )
                    })
                }
                </div>
            </div>
        )

    }
}
export default Brands;
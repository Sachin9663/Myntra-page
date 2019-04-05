import React, { Component } from 'react';
import Header from './Component/header/header';
import Slider from './Component/slider/slider';
import Brands from './Component/content/card';
import Card from './Component/brandsCard/brandCard';
import './App.css';
import Text from "./Component/text";
import TextSlide from './Component/textSlider/textSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <div className='mainContent'>
            <Slider/>
            <Brands/>
            <TextSlide/>
            <Text/>
            <Card/>
        </div>
      </div>

    );
  }
}
export default App;

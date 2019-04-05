import React, { Component } from 'react';
import Header from './Component/header/header';
import Slider from './Component/slider/slider';
import Brands from './Component/content/card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <div className='mainSlider'>
          <Slider/>
        </div>
        <div className='cards'>
          <Brands/>
        </div>

      </div>
    );
  }
}
export default App;

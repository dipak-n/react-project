import React from "react";
import './style.css';
import Slider from './Slider'

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img alt="Text" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="Text" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="Text" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="Text" src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
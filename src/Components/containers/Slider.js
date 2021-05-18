import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = () => {
  const images = [
    {
      src: require("../../assets/images/r1.jpg").default
    },
    {
      src: require("../../assets/images/r2.jpg").default
    },

  ]

  return (
    <div className="slide-container">
      <Slide indicators={true} transitionDuration={400}>
        {

          images.map((each, index) => {

            return (<div key={index} className="each-fade" >
              <div className="fadeImage" >
                <img src={each.src} style={{width:"100%"}}></img>
                <div style={{position:"absolute"}}>Slide 3</div>
              </div>
            </div>)
          })

        }

      </Slide>
    </div>
  );
};

export default Slider;
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { NavItem } from 'reactstrap';
import { apiurl, GetNoneToken } from '../../datacrud/datacrud';
import Rimage from '../Rimage';
const Slider = (props) => {
  const [images, setImages] = useState([])
  // const images = [
  //   {
  //     src: require("../../assets/images/r1.jpg").default
  //   },
  //   {
  //     src: require("../../assets/images/r2.jpg").default
  //   },

  // ]
  useEffect(() => {
    start();
  }, [props])
  const start = async () => {
    if (props.data) {
      setImages(props.data)
    } else {
      var data = await GetNoneToken("Sliders/GetAllSite").then(x => { return x.data }).catch(x => { return false })
      setImages(data)
    }


  }

  return (
    <div className={images.length > 0 ? "slide-container" : ""}>
      {
        images.length > 0 &&

        <Slide indicators={true} transitionDuration={400}>
          {

            images.map((each, index) => {

              return (<div key={index} className="each-fade" >
                <div className="fadeImage" >
                  {each.redirectUrl == "" &&
                    <Rimage src={each.url} style={{ width: "100%" }}></Rimage>

                  }
                  {each.redirectUrl != "" &&
                    <a href={each.redirectUrl} target="_blank">
                      <Rimage alt={each.name} title={each.name} src={each.url} style={{ width: "100%" }}></Rimage>

                    </a>

                  }

                  {/* <div style={{ position: "absolute" }}>Slide 3</div> */}
                </div>
              </div>)
            })

          }

        </Slide>
      }
    </div>
  );
};

export default Slider;
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { NavItem } from 'reactstrap';
import { apiurl, GetNoneToken } from '../../datacrud/datacrud';
const Slider = () => {
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
  }, [])
  const start = async () => {
    var data = await GetNoneToken("Sliders/GetAllSite").then(x => { return x.data }).catch(x => { return false })
    setImages(data)
    console.log(data)
  }

  return (
    <div className={images.length > 0 ?"slide-container":""}>
      {
        images.length > 0 &&

        <Slide indicators={true} transitionDuration={400}>
          {

            images.map((each, index) => {

              return (<div key={index} className="each-fade" >
                <div className="fadeImage" >
                  {each.redirectUrl == "" &&
                    <img src={apiurl + each.url} style={{ width: "100%" }}></img>

                  }
                  {each.redirectUrl != "" &&
                    <a href={each.redirectUrl} target="_blank">
                      <img alt={each.name} title={each.name} src={apiurl + each.url} style={{ width: "100%" }}></img>

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
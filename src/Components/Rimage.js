import React, { useEffect, useState } from 'react';
import Image from 'react-image-webp';
import { apiurl } from '../datacrud/datacrud';

function Rimage(props) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(0));

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])
    return (
        <>
            {windowDimensions.width < 800 &&
                <Image
                    webp={apiurl + "mini" + props.src}
                    src={apiurl + "mini" + props?.src?.replace("webp", "png")}
                    alt={props.alt} title={props.title} style={props.style} className={props.className}>

                </Image>
            }
            {windowDimensions.width > 800 &&
                <Image
                    webp={apiurl + props.src}
                    src={apiurl + props?.src?.replace("webp", "png")}
                    alt={props.alt} title={props.title} style={props.style} className={props.className}>

                </Image>
            }
        </>
    );
}

export default Rimage;
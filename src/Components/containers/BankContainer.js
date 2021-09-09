import React, { useEffect, useState } from "react"
import { apiConstant } from "../../datacrud/datacrud"

export const BankContainer = (props) => {

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

    if (props.Banks.length == 0 || windowDimensions.width < 800) {
        return (<div></div>)
    } else {
        return (

            props.Banks.map((item, key) => {

                return (
                    <a key={key} href={"/bankalar/" + item.bankUrlName} style={{ cursor: "pointer" }} className="col-2 banklist">
                        <img title={item.bankName + " ve kredi.com.tr çözüm ortaklığı"} alt={item.bankName + " çözüm ortaklığı"} style={{ cursor: "pointer" }} src={apiConstant + "/StaticF" + item.logoUrl} style={{ width: "100%" }}></img>
                    </a>
                )

            })

        )
    }

}
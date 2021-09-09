import React from "react";
import Image from "react-image-webp";

const MiddleMenu = (props) => {

    return (
        <div className="row">
            {
                props.Loans.map((item, key) => {
                    if (item.urlName.includes("ihtiyac")) {
                        return (
                            <a href={item.urlName} key={key} className="middle-menu-item col-3">
                                <div>
                                    <Image title="İhtiyaç kredisi kredi.com.tr" alt="ihtiyaç kredisi sayfası" style={{ width: "50%" }}
                                        webp={require("../../assets/images/moneycolor.webp").default}
                                        src={require("../../assets/images/moneycolor.png").default}></Image>
                                    <p className="middle-menu-text">İhtiyaç Kredisi</p>

                                </div>
                            </a>
                        )
                    } if (item.urlName.includes("tasit")) {
                        return (
                            <a href={item.urlName} key={key} className="middle-menu-item col-3">
                                <div>
                                    <Image title="Taşıt kredisi kredi.com.tr" alt="taşıt kredisi sayfası" style={{ width: "50%" }}
                                        webp={require("../../assets/images/carColor.webp").default}
                                        src={require("../../assets/images/carColor.png").default}></Image>
                                    <p className="middle-menu-text">Taşıt Kredisi</p>

                                </div>
                            </a>)
                    } if (item.urlName.includes("konut")) {
                        return (
                            <a href={item.urlName} key={key} className="middle-menu-item col-3">
                                <div>
                                    <Image title="Konut kredisi kredi.com.tr" alt="konut kredisi sayfası" style={{ width: "50%" }} 
                                    src={require("../../assets/images/homecolor.png").default}  webp={require("../../assets/images/homecolor.webp").default}
                                    ></Image>
                                    <p className="middle-menu-text">Konut Kredisi</p>

                                </div>
                            </a>
                        )

                    } if (item.urlName.includes("kobi")) {
                        return (
                            <a href={item.urlName} key={key} className="middle-menu-item col-3">
                                <div>
                                    <img title="Kobi kredisi kredi.com.tr" alt="kobi kredisi sayfası" style={{ width: "33%" }} src={require("../../assets/images/corporatecolor.png").default}></img>
                                    <p className="middle-menu-text">Kobi Kredisi</p>

                                </div>
                            </a>
                        )

                    }


                })
            }




        </div>

    )

}
export default MiddleMenu

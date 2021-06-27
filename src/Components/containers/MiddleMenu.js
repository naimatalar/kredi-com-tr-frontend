import React from "react";

const MiddleMenu = (props) => {

    return (
        <div className="row">
            {
                props.Loans.map((item, key) => {
                    if (item.urlName.includes("ihtiyac")) {
                        return (
                            <a href={item.urlName} key={key}   className="middle-menu-item col-3">
                                <div>
                                    <img title="İhtiyaç kredisi kredi.com.tr" alt="ihtiyaç kredisi sayfası" style={{ width: "50%" }} src={require("../../assets/images/moneycolor.png").default}></img>
                                    <p className="middle-menu-text">İhtiyaç Kredisi</p>

                                </div>
                            </a>
                        )
                    } if (item.urlName.includes("tasit")) {
                        return (
                            <a href={item.urlName} key={key}   className="middle-menu-item col-3">
                                <div>
                                    <img title="Taşıt kredisi kredi.com.tr" alt="taşıt kredisi sayfası" style={{ width: "50%" }} src={require("../../assets/images/carColor.png").default}></img>
                                    <p className="middle-menu-text">Taşıt Kredisi</p>

                                </div>
                            </a>)
                    } if (item.urlName.includes("konut")) {
                        return (
                            <a  href={item.urlName} key={key}   className="middle-menu-item col-3">
                                <div>
                                    <img title="Konut kredisi kredi.com.tr" alt="konut kredisi sayfası" style={{ width: "50%" }} src={require("../../assets/images/homecolor.png").default}></img>
                                    <p className="middle-menu-text">Konut Kredisi</p>

                                </div>
                            </a>
                        )

                    } if (item.urlName.includes("kobi")) {
                        return (
                            <a  href={item.urlName} key={key}  className="middle-menu-item col-3">
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

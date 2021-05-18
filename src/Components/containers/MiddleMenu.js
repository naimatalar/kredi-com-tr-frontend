import React from "react";

const MiddleMenu = () => {

    return (
        <div className="row">
            <a href="#" className="middle-menu-item col-3">
                <div>
                    <img style={{ width: "50%" }} src={require("../../assets/images/moneywhite.png").default}></img>
                    <p className="middle-menu-text">İhtiyaç Kredisi</p>

                </div>
            </a>

            <a href="#" className="middle-menu-item col-3">
                <div>
                    <img style={{ width: "50%" }} src={require("../../assets/images/carWhite.png").default}></img>
                    <p className="middle-menu-text">Taşıt Kredisi</p>

                </div>            </a>
            <a href="#" className="middle-menu-item col-3">
                <div>
                    <img style={{ width: "50%" }} src={require("../../assets/images/homewhite.png").default}></img>
                    <p className="middle-menu-text">Konut Kredisi</p>

                </div>
            </a>
            <a href="#" className="middle-menu-item col-3">
                <div>
                    <img style={{ width: "33%" }} src={require("../../assets/images/corporate.png").default}></img>
                    <p className="middle-menu-text">Kobi Kredisi</p>

                </div>
            </a>
        </div>

    )

}
export default MiddleMenu

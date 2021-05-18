import React from "react";
import { Link } from "react-router-dom";
export const LoanRate = () => {

    const data = [
        { logo: require("../../assets/images/a1.png").default, bank: "Akbank", loanType: "Taşıt Kredisi", rate: "1.20" },
        { logo: require("../../assets/images/a5.jpg").default, bank: "QNB Finansbank", loanType: "İhtiyaç Kredisi", rate: "1.10" },
        { logo: require("../../assets/images/a3.png").default, bank: "ING Bank", loanType: "İhtiyaç Kredisi", rate: "1.15" },
        { logo: require("../../assets/images/a4.png").default, bank: "Garanti BBVA", loanType: "Konut Kredisi", rate: "1.25" },
        { logo: require("../../assets/images/a4.png").default, bank: "Garanti BBVA", loanType: "Araç Kredisi", rate: "1.10" },
        { logo: require("../../assets/images/a1.png").default, bank: "Akbank", loanType: "Kobi Kredisi", rate: "0.95" },
        { logo: require("../../assets/images/a3.png").default, bank: "Garanti BBVA", loanType: "Araç Kredisi", rate: "1.25" },
    ]

    return (

        <div>
            <div className="loan-rate-container">
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                       Banka Faiz Oranları
                    </p>
                </div>
                <div className="container">
                    <div className="row row-container" >
                        {data.map((item, index) => {
                            var rowLabel = (index) % 2 == 0 ? "labelbackground" : ""
                            return (
                                <div key={index} className={"row loan-item " + rowLabel} >
                                    <div className="col-3 ">
                                        <img src={item.logo} style={{ width: "80%", height: 15 }}></img>
                                    </div>
                                    <div className="col-5 ">
                                        <b>{item.loanType}</b><br/>
                                        <span style={    {fontSize: 11}}>{item.bank}</span>
                                    </div>
                                    <div className="col-4 ">
                                        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}><b>{item.rate}</b><br /><span>incle</span></Link>
                                    </div>
                                </div>

                            )

                        })}

                    </div>

                </div>
            </div>
        </div>
    )

}
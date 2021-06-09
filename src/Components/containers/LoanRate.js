import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiConstant, GetNoneToken } from "../../datacrud/datacrud";
export const LoanRate = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        start()
    }, [])
    const start = async () => {
        var data = await GetNoneToken("BankLoanRates/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        setData(data)
    }

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
                                        <img src={apiConstant + "/StaticF" + item.logo} style={{ width: "100%",  }}></img>
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
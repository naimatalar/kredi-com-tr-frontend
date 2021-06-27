import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input";

import { apiConstant, apiurl, GetNoneToken } from "../../datacrud/datacrud";
export const DispositContainer = (props) => {
    const [data, setData] = useState([])



    useEffect(() => {
        start()
    }, [])

    const start = async () => {
        var data = await GetNoneToken("SelectedDisposits/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        setData(data)
    }
    return (



        <>
            {
                data.map((item, key) => {
                    let cssclass="col-12 col-md-6 col-lg-6 justify-content-around";
                    if (props.Big) {
                        cssclass="col-12 justify-content-around"
                    }
                    return (

                        <div key={key} className={cssclass}>
                            <div className="disposit-item mb-4 p-3 ">
                                <div className="row justify-content-around mb-2" style={{    padding: "3px 0 3px 0px",background:"gainsboro"}}>
                                    <img style={{ width: 150 }} src={apiurl + item.bankLogoUrl}></img>
                                    <div style={{ fontSize: 12, color: "black", textAlign: "center" }}><b style={{ color: "black" }}>Ana Para</b> <br></br>
                                    <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    float: "left",
                                                   textAlign:"center",
                                                    background: "none",
                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}
                                                  
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="0"
                                                    disabled
                                                    prefix="₺"
                                                    value={item.amount} />
                                    </div>
                                    <div style={{ fontSize: 12, color: "black", textAlign: "center",fontWeight:"bold" }}><b style={{ color: "black" }}>Vade</b> <br></br>{item.dayTerm} Gün</div>
                     

                                </div>
                                <div className="row justify-content-around">

                                    <div style={{ color: "black" ,textAlign:"center",fontWeight:"bold" }}><b style={{ color: "rebeccapurple" }}>Net Kazanç</b> <br></br>
                                    <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    float: "left",
                                                   textAlign:"center",
                                                    background: "none",
                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}
                                                  
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="0"
                                                    disabled
                                                    prefix="₺"
                                                    value={item.netResult}/>
                                    </div>
                                    <div style={{ color: "black",textAlign:"center",fontWeight:"bold" }}><b style={{ color: "rebeccapurple" }}>Toplam Kazanç</b> <br></br>
                                    <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    float: "left",
                                                   textAlign:"center",
                                                    background: "none",
                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}
                                                  
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="0"
                                                    disabled
                                                    prefix="₺"
                                                    value={item.totalResult}/>
                                    </div>

                                    <div className="align-self-center">
                                        <a href="#" style={{
                                            fontSize: 14,
                                            background: "rebeccapurple"
                                        }} className="default-button">
                                            Hemen Başvur</a></div>

                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </>

    )

}
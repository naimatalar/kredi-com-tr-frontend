import React, { useEffect, useState } from "react"
import CurrencyInput from "react-currency-input"
import { apiurl, GetNoneToken } from "../datacrud/datacrud"

export const RedirectProduct = (props) => {
    const [loanData, setLoanData] = useState({})
    const [creditCartData, setCreditCart] = useState({})

    useEffect(() => {
        start()

    }, [])
    let id = new URLSearchParams(props.location.search).get("o")
    let t = new URLSearchParams(props.location.search).get("t")
    const start = async () => {


        if (t == "0") {

            let ld = await GetNoneToken("RedirectDatas/GetLoanRedirectById/" + id).then(x => { return x.data }).catch(x => { return false })
            setLoanData(ld)

            setInterval(() => {
                window.location.replace(ld.redirectUrl)
            }, 3000)
        } else if (t == "1") {

            let ld = await GetNoneToken("RedirectDatas/GetCreditCartRedirectById/" + id).then(x => { return x.data }).catch(x => { return false })
            setCreditCart(ld)
            setInterval(() => {
                window.location.replace(ld.redirectUrl)
            }, 3000)


        }


    }



    return (
        <div className="redirect-page-master">
            <div className="row">
                <div className="col-12 row justify-content-center mt-5 mb-3">
                    <img style={{ width: "25%" }} src={require("../assets/images/lg.png").default}></img>
                </div>
                <div className="col-12 row justify-content-center mb-4 bt-4">
                    <img style={{ width: "8%" }} src={require("../assets/images/down.gif").default}></img>

                    {/* <img src={apiurl+loanData.bankLogoUrl}></img> */}
                </div>
                <div className="col-12 row justify-content-center">

                    <h5>Yönlendiriliyor</h5>
                </div>

                {t == "0" &&
                    <>
                        <div className="col-12 row justify-content-center">

                            <img style={{ width: "20%" }} src={apiurl + loanData.bankLogoUrl}></img>
                        </div>

                        <div className="col-12 row justify-content-center">
                            <div>
                                <CurrencyInput style={{
                                    padding: 0,
                                    border: "none",
                                    display: "flex",
                                    fontWeight: "bold",
                                    width: "auto",
                                    background: "none",
                                    textAlign: "center"
                                }}

                                    decimalSeparator="."
                                    thousandSeparator="."
                                    precision="0"
                                    disabled
                                    prefix="₺"
                                    value={loanData.json?.amount} />
                            </div>

                        </div>
                        <div className="col-12 row justify-content-center">
                            <b style={{ fontSize: 19 }}>{loanData.json?.loanName} </b>
                        </div>
                        <div className="col-12 row justify-content-center">

                            <b>{loanData.json?.term}&nbsp; </b> ay vade &nbsp;<b>{loanData.json?.rate}&nbsp; </b> faiz oranı
                        </div>
                    </>
                }

                {t == "1" &&
                    <>
                        <div className="col-12 row justify-content-center">

                            <img style={{ width: "20%" }} src={apiurl + creditCartData.bankLogoUrl}></img>
                        </div>

                        <div className="col-12 row justify-content-center">

                            <b>{creditCartData.json?.creditCartName}&nbsp; Kredi Kartı Başvurusu  </b>  
                        </div>
                    </>
                }
                <div className="col-12 row justify-content-center mt-3">
                    <span style={{ color: "black" }}>Başvurunuzu yapabilmek için yönlendirilen {creditCartData.json?.bankName} sayfasındaki formu doldurunuz.</span>

                </div>


            </div>

        </div>
    )
}
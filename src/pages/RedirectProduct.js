import React, { useEffect, useState } from "react"
import CurrencyInput from "react-currency-input"
import Image from "react-image-webp"
import { KrediInput } from "../Components/KrediInput"
import Rimage from "../Components/Rimage"
import { apiurl, GetNoneToken } from "../datacrud/datacrud"

 const RedirectProduct = (props) => {
    const [loanData, setLoanData] = useState({})
    const [creditCartData, setCreditCart] = useState({})
    const [dispositData, setDispositData] = useState({})

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
            }, 2000)
        } else if (t == "1") {

            let ld = await GetNoneToken("RedirectDatas/GetCreditCartRedirectById/" + id).then(x => { return x.data }).catch(x => { return false })
            setCreditCart(ld)
            setInterval(() => {
                window.location.replace(ld.redirectUrl)
            }, 2000)

        } else if (t == "2") {

            let ld = await GetNoneToken("RedirectDatas/GetDispositRedirect/" + id).then(x => { return x.data }).catch(x => { return false })
            setDispositData(ld)
            setInterval(() => {
                window.location.replace(ld.redirectUrl)
            }, 2000)

        }


    }



    return (
        <div className="redirect-page-master">
            <div className="row m-0 p-0 justify-content-center align-items-baseline">
                <div className="col-12 row justify-content-center mt-5 mb-3">
                    <Image className="redirect-product-logo" 
                    webp={require("../assets/images/lg.webp").default}
                    src={require("../assets/images/lg.png").default}></Image>
                </div>
                <div className="col-12 row justify-content-center mb-4 bt-4 ">
                    <img  className="redirect-product-arrow"  src={require("../assets/images/down.gif").default}></img>

                   
                </div>
                <div className="col-12 row justify-content-center redirect-product-text-container">

                    <h5>Yönlendiriliyor</h5>
                </div>

                {t == "0" &&
                    <>
                        <div className="col-12 row justify-content-center mt-5 mb-5">

                            <Rimage className="redirect-bank-logo" src={loanData.bankLogoUrl}></Rimage>
                        </div>

                        <div className="col-12 row justify-content-center">
                            <div>
                                <KrediInput style={{
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
                        <div className="col-12 row justify-content-center text-center">

                            <b>{loanData.json?.term}&nbsp; </b> ay vade &nbsp;<b>{loanData.json?.rate}&nbsp; </b> faiz oranı
                        </div>
                    </>
                }

                {t == "1" &&
                    <>
                        <div className="col-12 row justify-content-center mt-5 mb-5">

                            <Rimage className="redirect-bank-logo"  src={ creditCartData.bankLogoUrl}></Rimage>
                        </div>

                        <div className="col-12 row justify-content-center text-center">

                            <b>{creditCartData.json?.creditCartName}&nbsp; Kredi Kartı Başvurusu  </b>
                        </div>
                    </>
                }


                {t == "2" &&
                    <>
                        <div className="col-12 row justify-content-center mt-5 mb-5">

                            <Rimage className="redirect-bank-logo"  src={ dispositData.bankLogoUrl}></Rimage>
                        </div>
                        <div className="col-12 row justify-content-center">
                            <div>
                                <KrediInput style={{
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
                                    value={dispositData.json?.amount} />
                            </div>

                        </div>
                        <div className="col-12 row justify-content-center">
                            <b style={{ fontSize: 19 }}>Vadeli Mevduat </b>
                        </div>
                        <div className="col-12 row justify-content-center text-center">

                            <b>{dispositData.json?.term}&nbsp; </b> ay vade &nbsp;<b>{dispositData.json?.rate}&nbsp; </b> faiz oranı
                        </div>
                    </>
                }
                <div className="col-12 row justify-content-center mt-3 text-center">
                    <span style={{ color: "black" }}>Başvurunuzu yapabilmek için yönlendirilen {creditCartData.json?.bankName} sayfasındaki formu doldurunuz.</span>

                </div>


            </div>

        </div>
    )
}
export default RedirectProduct
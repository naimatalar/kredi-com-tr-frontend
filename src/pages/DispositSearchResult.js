import React, { useEffect, useState } from "react"
import { apiurl, GetNoneToken, PostNoneToken } from "../datacrud/datacrud"
import { LoanRate } from "../Components/containers/LoanRate";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { DispositContainer } from "../Components/containers/DispositContainer";

export const DispositSearchResult = (props) => {
    var [data, setData] = useState(
        [{
            dispositCurrency: 0,
            dispositCurrencyText: "",
            dispositName: "",
            netAmount: 0,
            rate: 0,
            totalAmount: 0,
            bankLogoUrl: "",
            bankUrlName: "",
            bankName: "",
        }])
    const [loansOption, setLoanOption] = useState([])
    const [currency, setCurrency] = useState()
    const [termsValue, setTermsValue] = useState()
    const [currencyIcon, setCurrencyIcon] = useState("")
    const [currencyIconStatic, setCurrencyIconStatic] = useState("")


    const [amount, setAmount] = useState(null)
    const [amountStatic, setAmountStatic] = useState(null)

    const [loanType, setLoanType] = useState()
    useEffect(() => {
        start()
    }, [])

    const start = async () => {

        let a = new URLSearchParams(props.location.search).get("amount")
        let c = new URLSearchParams(props.location.search).get("c")
        let t = new URLSearchParams(props.location.search).get("term")

        
        let data = await GetNoneToken("Disposits/Search?amount=" + a + "&&term="+t+"&&c=" + c).then(x => { return x.data }).catch(x => { return false })

        setAmount(a)
        setCurrency(c)
setTermsValue(t)
        setAmountStatic(a)
        setData(data)
        if (c == 0) {
            setCurrencyIconStatic("₺")
        } else if (c == 1) {
            setCurrencyIconStatic("$")

        } else if (c == 2) {
            setCurrencyIconStatic("€")
        }

        currencIconChange(c)

    }
    const currencIconChange = (c) => {
        if (c == 0) {
            setCurrencyIcon("₺")
        } else if (c == 1) {
            setCurrencyIcon("$")

        } else if (c == 2) {
            setCurrencyIcon("€")
        }
    }
    const calculate = async () => {


        let prm = new URLSearchParams(props.location.search)
        prm.set("amount", amount.replace(".","").replace(currencyIcon,""))
        prm.set("term", termsValue)
        prm.set("c", currency)
        window.location.replace("/vadeli-mevduati-hesaplama-ve-basvuru?" + prm)
    }
    return (<div className="container">
        <div className="row mt-3">
            <div className="col-12  ">

                <div className="col-12 mb-3">
                    <div className="row" style={{ background: "rgb(169 194 253 / 36%)", padding: "10px 0px 13px 0", border: "1px solid #9fb8ff" }}>
                        <div className="col-12 col-md-3 ">
                            <label className="col-12 mb-0">Para Birimi</label>

                            <Dropdown
                                options={[
                                    { value: "0", label: "Türk Lirası" },
                                    { value: "1", label: "Dolar" },
                                    { value: "2", label: "Euro" },

                                ]}
                                onChange={(element) => {setCurrency(element.value);currencIconChange(element.value)}}
                            placeholder="Para Birimi"
                            arrowClassName="dropdownArrow"
                            value={currency}
                            />
                        </div>

                        <div className="col-12 col-md-3 mb-2">
                            <label className="col-12 mb-0">Anapara</label>
                            <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                                decimalSeparator=","
                                thousandSeparator="."
                                precision="0"
                                onChange={(x) => { setAmount(x) }}
                                value={amount}

                                prefix={currencyIcon}
                            />
                        </div>
                        <div className="col-12  col-md-3 mb-2">

                            <label className="col-12 mb-0">Vade</label>
                            <input type="text" onChange={(e) => { setTermsValue(e.target.value) }} value={termsValue}></input>
                        </div>



                        <div className="col-6 col-md-3 mt-4" style={{ justifyontent: "flex-end", }}>
                            <button onClick={(x) => { calculate() }} className="default-button" type="submit">TEKRAR ARA</button>
                        </div>
                    </div>

                </div>
                <hr></hr>


            </div>
            <div className="col-12 col-md-4 d-none d-lg-block d-md-block" style={{
                border: "1px solid #077a68",
                paddingTop: 10,
                borderRadius: 8
            }}>
                <div className="row">
                    <div className="col-12 mb-3"><b style={{ color: "black", fontSize: 18 }}>&nbsp;Öne Çıkan Mevduat Hesapları</b> </div>
                    <DispositContainer Big={true}></DispositContainer>

                </div>

                <div className="row">
                    {/* <LoanRate></LoanRate> */}

                </div>

            </div>
            <div className="col-12 col-md-8">

                {
                    data.map((item, key) => {
                        return (
                            <div key={key} className="col-12 row loan-search-list-item mb-3">
                                <div className="col-3">
                                    <div className="mb-2">
                                        <img src={apiurl + item.bankLogoUrl} style={{ width: "100%" }}></img>
                                    </div>

                                    <div className="mb-2" style={{ color: "grey", textAlign: "center" }}>{item.dispositName}</div>
                                </div>
                                <div className="col-2">
                                    <div className="">
                                        <span style={{ color: "#1a1a1a" }}>Anapara </span>
                                    </div>

                                    <div className="mb-2"><b style={{ color: "black" }}>
                                        <CurrencyInput style={{
                                            padding: 0,
                                            border: "none",
                                            display: "inline",
                                            float: "left",
                                            background: "none",
                                            color: "black",
                                            fontWeight: "bold",
                                            maxWidth: "100%"
                                        }}
                                            className="col-7"
                                            decimalSeparator=","
                                            thousandSeparator="."
                                            precision="0"
                                            disabled
                                            prefix={currencyIconStatic}
                                            value={amountStatic} />
                                    </b></div>
                                    <div style={{ color: "black" }}>Faiz : <b style={{ color: "black" }}>{item.rate}</b>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="">
                                        <span style={{ color: "#1a1a1a" }}>Net Kazanç</span>
                                    </div>

                                    <div className="mb-2">
                                        <CurrencyInput style={{
                                            padding: 0,
                                            border: "none",
                                            display: "inline",
                                            float: "left",
                                            background: "none",
                                            color: "black",
                                            fontWeight: "bold",
                                            maxWidth: "100%"

                                        }}
                                            className="col-7"
                                            decimalSeparator=","
                                            thousandSeparator="."
                                            precision="2"
                                            disabled
                                            prefix={currencyIconStatic}
                                            value={(item.netAmount).toFixed(0)} />
                                    </div>
                                    <div style={{ color: "black" }}>
                                        {item.minTerm} Gün Vade
                                    </div>
                                </div>
                                <div className="col-3 pt-1 pb-1 text-center" style={{ background: "rgb(255 243 243)", border: "1px solid #ff9999" }}>
                                    <div className="">
                                        <span style={{ color: "#1a1a1a", fontSize: 19 }}>Toplam Kazanç</span>
                                    </div>

                                    <div style={{ overflow: "hidden" }}>
                                        <CurrencyInput style={{
                                            padding: 0,
                                            border: "none",
                                            display: "inline",
                                            float: "left",
                                            background: "none",
                                            color: "black",
                                            fontWeight: "bold",
                                            maxWidth: "100%",
                                            textAlign: "center",
                                            fontSize: 20

                                        }}
                                            className="col-7"
                                            decimalSeparator=","
                                            thousandSeparator="."
                                            precision="0"
                                            disabled
                                            prefix={currencyIconStatic}
                                            value={(item.totalAmount).toFixed(0)}
                                        />
                                    </div>

                                </div>
                                <div className="col-2 row m-0 justify-content-center align-content-space-between" style={{ height: 80 }}>
                                    <div className="">
                                        <button className="loan-search-list-item-button default-button">BAŞVUR</button>
                                    </div>

                                    <div className="mb-2" style={{ textAlign: "center" }}>
                                        <a href="" style={{ fontWeight: "bold", color: "rgb(85 0 195)", textDecoration: "underline" }}  >Detay</a>
                                    </div>
                                </div>

                            </div>)

                    })
                }
            </div>

        </div>
    </div>)
}
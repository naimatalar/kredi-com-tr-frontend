import { LabelSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Select, { components } from "react-select";
import { GetNoneToken } from '../../datacrud/datacrud';

import "currency-flags/dist/currency-flags.css"
import CurrencyInput from 'react-currency-input';
import { PriceSplitter } from '../PriceSplitter';


function Exchange(props) {
    var HtmlToReactParser = require('html-to-react').Parser;
    const [currencies, setCurrencies] = useState([])
    const [selectOptions, setSelectOptions] = useState([{ value: "", label: "" }])
    const [baseCurrecy, setBaseCurrency] = useState({ value: "", label: "" })
    const [convertingCurrecy, setsetConvertingCurrency] = useState({ value: "", label: "" })
    const [moneyValue, setModeyValue] = useState(1)
    const api = "https://api.exchangerate-api.com/v4/latest/USD";
    const [baseResult, setBaseResult] = useState(1)
    const [amountVal, setAmountVal] = useState(1)
    const [currencybs, setCurrencyBs] = useState({ base: "", converting: "" })

    useEffect(() => {
        start()
    }, [])

    const start = async () => {
        let cr = await GetNoneToken("Exchange/getExhange").then(x => { return x.data }).catch(x => { return false })
        setCurrencies(cr)

        var dd = [];

        for (const item of cr) {
            dd.push({ value: item.kod, label: <div style={{ textAlign: "center" }}><div style={{ width: 50, float: "left" }}>  <div className={"currency-flag currency-flag-" + item.kod.toLowerCase()}></div>   </div> <div style={{ width: 50 }}>{item.kod}</div></div> })
        }

        setSelectOptions(dd);

        setBaseCurrency(dd.find(x => { return x.value == "USD" }))
        setsetConvertingCurrency(dd.find(x => { return x.value == "TRY" }))


    }




    const getResults = () => {

        setCurrencyBs({ base: baseCurrecy.value, converting: convertingCurrecy.value })
        fetch(`${api}`)
            .then(currency => {
                return currency.json();
            }).then(displayResults);
    }
    const displayResults = (currency) => {
        setModeyValue(amountVal)
        let fromRate = currency.rates[baseCurrecy.value];
        let toRate = currency.rates[convertingCurrecy.value];
        var data =
            ((toRate / fromRate) * amountVal).toFixed(2);
        setBaseResult(data)

    }



    const ReChange = () => {
        debugger
        setBaseCurrency(convertingCurrecy)
        setsetConvertingCurrency(baseCurrecy)

    }

    const changeBaseCurrent = (bs) => {
        setBaseCurrency(bs)
    }
    const changeConvertingCurrent = (bs) => {
        setsetConvertingCurrency(bs)
    }


    return (
        <div className="select-base row justify-content-center">

            <div className="col-12 col-md-6 row justify-content-center mt-2">

                {/* <div className="col-7 pr-0">
                    <CurrencyInput style={{ padding: 6 }}></CurrencyInput>
                </div> */}
                <div className="col-12 row justify-content-around align-items z-ssom mb-1">
                    <label className="col-5"><b style={{
                        color: " #07457a",
                        fontSize: " 16px"
                    }}>Şu Para Biriminden</b></label>
                    <button className="col-1 arrv-change" onClick={()=>{ReChange()}} title="Değiştir">→<br></br>←</button>
                    <label className="col-5"><b style={{
                        color: " #07457a",
                        fontSize: " 16px"
                    }}>Şu Para Birimine Çevir</b></label>
                </div>
                <div className="col-6 pl-0">

                    <Select
                        closeMenuOnSelect={true}
                        placeholder={"Seçiniz"}
                        options={selectOptions}
                        isSearchable={true}
                        onChange={changeBaseCurrent}
                        value={baseCurrecy}


                    />
                </div>
                <div className="col-6">

                    <Select
                        closeMenuOnSelect={true}
                        placeholder={"Seçiniz"}
                        options={selectOptions}
                        isSearchable={true}
                        value={convertingCurrecy}
                        onChange={changeConvertingCurrent}

                    />
                </div>
                <div className="col-6 pl-0 mt-2">
                    <CurrencyInput
                        precision="0"
                        thousandSeparator="."
                        suffix={" " + baseCurrecy.value}
                        value={amountVal} onChange={(val) => { setAmountVal(val.replace(/\./g, "").replace(" " + baseCurrecy.value, "")) }} style={{ padding: 6 }}></CurrencyInput>
                </div>
                <div className="col-6 mt-2">
                    <button className="default-button" onClick={() => { getResults() }}>Çevir</button>
                </div>


            </div>
            <div className="col-12 col-md-6 row justify-content-center mt-2">
                <div className="col-12 row d-none d-lg-flex d-md-flex">
                    <div className="fsc">1.00 ₺ &nbsp;</div> <div className="fsp">  </div> <div style={{
                        fontSize: "22px",
                        lineHeight: "17px",
                        margin: "0px 10px 0 0"
                    }}> &nbsp;=</div>
                    <div className="col">
                        <div className="row justify-content-around" >
                            <div className="row">
                                <div className="pull-left row align-items-center" style={{ margin: "0 30px 0 10px" }}>
                                    <div style={{ fontSize: 15 }}>  {currencies.find(x => { return x.kod == "USD" })?.banknoteBuying} $ &nbsp;
                                    </div> <div className={"currency-flag currency-flag-usd"}>
                                    </div>
                                </div>

                                <div className="pull-left row align-items-center" style={{ margin: "0 30px 0 0px" }} >
                                    <div style={{ fontSize: 15 }}>  {currencies.find(x => { return x.kod == "EUR" })?.banknoteBuying} € &nbsp;
                                    </div> <div className={"currency-flag currency-flag-eur"}>
                                    </div>
                                </div>

                                <div className="pull-left row align-items-center" style={{ margin: "0 30px 0 0px" }} >
                                    <div style={{ fontSize: 15 }}>  {currencies.find(x => { return x.kod == "GBP" })?.banknoteBuying} £ &nbsp;
                                    </div> <div className={"currency-flag currency-flag-gbp"}>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
                <div className="row col-12 justify-content-center" style={{
                    border: "2px dotted #e73d29b0",
                    background: "#f9fdea",
                    borderRadius: "5px"
                }}>
                    {currencybs.base != "" && currencybs.converting != "" &&
                        <div className="col-6 justify-content-center">


                            <div className="col-12 text-center" style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#7e7e7e"
                            }}>
                                {PriceSplitter(moneyValue) + " " + currencybs.base}
                            </div>
                            <div className="col-12 text-center" style={{
                                fontSize: "22px",
                                fontWeight: "bold",
                                color: "rgb(16 95 175)",

                                lineHeight: "16px",
                            }}>
                                ↓
                            </div>
                            <div className="col-12 text-center" style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "rgb(7, 69, 122)"
                            }}>
                                {PriceSplitter(baseResult) + " " + currencybs.converting}
                            </div>





                        </div>
                    }
                    {
                        currencybs.base == "" && currencybs.converting == "" &&
                        <div className="col-12 justify-content-center">

                            <div>
                                <div className="col-12 text-center">
                                    <b style={{
                                        fontSize: "26px",
                                        color: "#a0a0a0"
                                    }}>Döviz Çeviri</b>
                                </div>
                                <div className="col-12 text-center">
                                    <span style={{ color: "#4e4e4e" }}>Çeviri panelinden kur seçip tutar giriniz. Girdiğiniz tutarın karşılığı olan döviz, burada hesaplanacaktır.</span>
                                </div>
                            </div>
                        </div>
                    }

                </div>


            </div>


        </div >
    );
}

export default Exchange;
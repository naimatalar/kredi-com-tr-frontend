import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrencyInput from 'react-currency-input';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import calculator from "../calculator";
import { apiurl, GetNoneToken } from "../../datacrud/datacrud";
export const FastLoan = () => {
    const [selectedLoan, setSelectedLoan] = useState({ bankId: null, amount: null, interestRateId: null, term: null })
    const [loanOptions, setLoanOptions] = useState(
        [
            { label: "3", value: 3 },
            { label: "6", value: 6 },
            { label: "9", value: 9 },
            { label: "12", value: 12 },
            { label: "18", value: 18 },
            { label: "24", value: 24 },
            { label: "36", value: 36 },
        ]
    )


    const [fastLoanData, setFastLoadnData] = useState([
        {
            id: null,
            logo: null,
            loanType: null,
            amount: null,
            term: null,
            interestRateId: null,
            rate: null,
            orderBy: null,
            alertShow: false,
            alert: null,
            totalPayment: null,
            mountlyPayment: null,
            loanTerms:[],
            maxLoan: null,
            minLoan: 200,
        }])
    useEffect(() => {


        start()



    }, [])
    const start = async () => {
        var data = await GetNoneToken("FastLoans/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        setFastLoadnData(data)
        
    

    }

    const chanheVals = (id, term, amount) => {

        if (typeof amount == "string") {
            amount = parseInt(amount.replace("₺", "").replace(".", ""))

        }
        let findLoan = fastLoanData.find(x => x.id == id)

        findLoan.alertShow = false;
        findLoan.alert = null;
debugger
        if (amount < findLoan.minLoan) {
            findLoan.alertShow = true;
            findLoan.alert = "En düşük kredi tutarı " + findLoan.minLoan + " olabilir";
        }

        if (amount > findLoan.maxLoan) {
            findLoan.alertShow = true;
            findLoan.alert = "En yüksek kredi tutarı " + findLoan.maxLoan + " olabilir";
        }
        if (!findLoan.alertShow) {
            var calculateResult = calculator(findLoan.rate, amount, term, 5, 15)
            findLoan.totalPayment = (calculateResult.totalpayment * term).toFixed(2).replace(".", ",");
            findLoan.mountlyPayment = calculateResult.totalpayment.toFixed(2).replace(".", ",");
        }
        findLoan.amount = amount;
        findLoan.term = term;

        let filtering = fastLoanData.filter(x => x.id != id)

        filtering.push(findLoan)
        setFastLoadnData(filtering);
    }

    return (

        <div>
            <div className="fast-loan-container">
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        Hızlı Başvur
                    </p>
                </div>
                <div className="container" style={{padding:0}}>
                    <div className="row row-container" style={{padding: "0px 12px 0px 10px"}}>
                        {

                            fastLoanData.sort((a, b) => { return a.orderBy - b.orderBy }).map((item, index) => {
                                if (item.id == null) {
                                    return (<span key={index}></span>)
                                }


                                return (

                                    <div key={index} className="col-12 fast-loan-item" >
                                        <div className="row" style={{padding: "8px 0 8px 0"}}>
                                            <div className="col-4 ">
                                                <div className="col-12" style={{ padding: 0 }}><b>Tutar</b></div>
                                                <div>
                                                    <CurrencyInput thousandSeparator="." maxLength={8} precision="0" prefix="₺" value={item.amount} onChangeEvent={(element) => chanheVals(item.id, item.term, element.target.value)} style={{ padding: 3, width: "100%" }} />
                                                    {/* <input value={item.amount} onChange={(element) => chanheVals(item.id, item.term, element.target.value)} type="text" style={{ padding: 3, width: "100%" }} ></input> */}
                                                    {item.alertShow &&
                                                        < span style={{ textAlign: "center", color: "red" }} className="fast-loan-warning">{item.alert}</span>

                                                    }
                                                </div>
                                            </div>
                                            <div className="col-4 ">
                                                <div className="col-12" style={{ padding: 0 }}><b>Vade</b></div>
                                                <Dropdown
                                                    options={item.loanTerms}
                                                    value={item.term.toString()}
                                                    onChange={(val) => { chanheVals(item.id, val.value, item.amount) }}
                                                    arrowClassName="dropdownArrow"
                                                    controlClassName="drowpdownControlFastLoan"
                                                />
                                            </div>
                                            <div className="col-4 " style={{ padding: 0 }}>
                                                <div className="col-12">&nbsp;</div>
                                                <button className="default-button fastloan-button" style={{
                                                    padding: 2,
                                                    width: "100%",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                    color: "white"
                                                }} type="submit">BAŞVUR</button>

                                            </div>
                                        </div>
                                        <div className="row" style={{paddingBottom:8}}>
                                            <div className="col-4">
                                                <img src={apiurl+item.logo} style={{ width: "100%"}}></img>

                                            </div>
                                            <div className="col-4">
                                                <span>Faiz Oranı:</span> {item.rate}
                                            </div>
                                            <div className="col-4" style={{ padding: 0 }}>
                                                <div className="col-5" style={{
                                                    padding: 0, float: "left",
                                                    fontWeight: "bold"
                                                }}>Taksit:</div>
                                                <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    float: "left",
                                                    minWidth: 60,
                                                    background: "none"
                                                }}
                                                    className="col-7"
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="2"
                                                    disabled
                                                    prefix="₺"
                                                    value={item.mountlyPayment} />

                                                <br />
                                                <div className="col-5" style={{
                                                    padding: 0, float: "left",
                                                    fontWeight: "bold"
                                                }}>Toplam:</div>
                                                <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    float: "left",
                                                    minWidth: 60,
                                                    background: "none"
                                                }}
                                                    className="col-7"
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="2"
                                                    disabled
                                                    prefix="₺"
                                                    value={item.totalPayment} />

                                            </div>
                                        </div>
                                    </div>

                                )



                            })}


                    </div>


                </div>

            </div>
        </div >
    )

}
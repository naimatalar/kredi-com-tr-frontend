import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrencyInput from 'react-currency-input';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import calculator from "../calculator";
import { apiurl, GetNoneToken } from "../../datacrud/datacrud";
import { loanRedirect } from "../RedirectComponent";
import Rimage from "../Rimage";
import { KrediInput } from "../KrediInput";
import KrediSelect from "../KrediSelect";
export const FastLoan = (props) => {
    const [loading, setLoading] = useState(true)

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
            loanTerms: [],
            maxLoan: null,
            minLoan: 200,
            loanUrlName: null,
            redirectUrl: null,
            bankId: null
        }])


    useEffect(() => {


        start()



    }, [props.data])
    const start = async () => {
        if (props.data) {
            setFastLoadnData(props.data)

        } else {
            
            var data = await GetNoneToken("FastLoans/GetAllSite").then(x => { return x.data }).catch(x => { return false })
            setFastLoadnData(data)

        }
    }


    return  <div>
            <div className="fast-loan-container">
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        Hızlı Başvur
                    </p>
                </div>
                {
                    props?.loading &&
                    <div>
                        <div className="rw-loading">

                        </div>
                        <div className="rw-loading">

                        </div>
                        <div className="rw-loading">

                        </div>
                    </div>


                }
                <div className="container" style={{ padding: 0 }}>
                    <div className="row row-container" style={{ padding: "0px 12px 0px 10px" }}>
                        {
                            !props?.loading &&
                            fastLoanData.sort((a, b) => { return a.orderBy - b.orderBy }).map((item, index) => {
                                if (item.id == null) {
                                    return (<span key={index}></span>)
                                }


                                return (
                                    <FastLoanList key={index} item={item}></FastLoanList>


                                )

                            })}


                    </div>


                </div>

            </div>
        </div >
    

}

const FastLoanList = (props) => {
    const [refresh, setRefresh] = useState()
    const [amount, setAmount] = useState()


    const [fastLoanData, setFastLoadnData] = useState(
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
            loanTerms: [],
            maxLoan: null,
            minLoan: 200,
            loanUrlName: null,
            redirectUrl: null,
            bankId: null
        })

    useEffect(() => {
        setFastLoadnData(props.item)


    }, [])
    const chanheVals = (id, term, amount) => {

        if (typeof amount == "string") {
            amount = parseInt(amount.replace("₺", "").replace(/\./g, ""))

        }
        let findLoan = fastLoanData

        findLoan.alertShow = false;
        findLoan.alert = null;

        if (amount < 1000) {
            findLoan.alertShow = true;
            findLoan.alert = "En düşük kredi tutarı 1.000₺ olabilir";
        }

        if (amount > 100000) {
            findLoan.alertShow = true;
            findLoan.alert = "En yüksek kredi tutarı 100.000 ₺ olabilir";
        }
        if (!findLoan.alertShow) {
            var calculateResult = calculator(findLoan.rate, amount, term, 5, 15)
            findLoan.totalPayment = (calculateResult.totalpayment * term).toFixed(2).replace(".", ",");
            findLoan.mountlyPayment = calculateResult.totalpayment.toFixed(2).replace(".", ",");
        }
        findLoan.amount = amount;
        findLoan.term = term;

        let filtering = findLoan

        setFastLoadnData(filtering);
        setRefresh(new Date().getTime())
    }

    return  <div className="col-12 fast-loan-item" >
            <div className="row" style={{ padding: "8px 0 8px 0" }}>
                <div className="col-4 ">
                    <div className="col-12" style={{ padding: 0 }}><b>Tutar</b></div>
                    <div> 
                        <KrediInput 
                        
                            thousandSeparator="."
                            precision="0"
                            prefix="₺"
                            value={amount ?? fastLoanData.amount}
                            onChange={(element) => { chanheVals(fastLoanData.id, fastLoanData.term, element); setAmount(element) }} style={{ padding: 3, width: "100%" }} />
                        {fastLoanData.alertShow &&
                            < span style={{ textAlign: "center", color: "red" }} className="fast-loan-warning">{fastLoanData.alert}</span>

                        }
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="col-12" style={{ padding: 0 }}><b>Vade</b></div>
                    <KrediSelect
                    
                        options={fastLoanData.loanTerms.sort((a, b) => a.value - b.value)}
                        value={fastLoanData.term?.toString()}
                        onChange={(val) => { chanheVals(fastLoanData.id, val.value, fastLoanData.amount) }}
                        controlClassName="drowpdownControlFastLoan"
                    />
                </div>
                <div className="col-4 " style={{ padding: 0 }}>
                    <div className="col-12">&nbsp;</div>
                    <button
                        onClick={() => loanRedirect(fastLoanData.loanUrlName,
                            fastLoanData.redirectUrl,
                            fastLoanData.bankId,
                            fastLoanData.interestRateId,
                            {
                                bankName: fastLoanData.bankName,
                                amount: fastLoanData.amount,
                                loanName: fastLoanData.loanType,
                                rate: fastLoanData.rate?.toString(),
                                term: fastLoanData.term?.toString()
                            })}
                        className="default-button fastloan-button" style={{
                            padding: 2,
                            width: "100%",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "white"
                        }} type="submit">BAŞVUR</button>


                </div>
            </div>
            <div className="row" style={{ paddingBottom: 8 }}>
                <div className="col-4 text-center" >

                    <Rimage title={fastLoanData.bankName + " banka " + fastLoanData.loanType + " hızlı başvuru"} alt={fastLoanData.bankName + " banka " + fastLoanData.loanType + " başvuru"} src={fastLoanData.logo} style={{ width: "100%", height: 23 }}></Rimage>
                    <b style={{ color: "red" }}>{fastLoanData.loanType}</b>
                </div>


                <div className="col-4" style={{ padding: 0 }}>
                    <FastLoanResult mountlyPayment={fastLoanData.mountlyPayment} totalPayment={fastLoanData.totalPayment} ></FastLoanResult>

                </div>
                <div className="col-4">
                    <div className="col-12 m-0 p-0">
                        <a style={{ fontWeight: "bold", color: "blue" }} href={"/bankalar/" + fastLoanData.bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + (amount ?? fastLoanData.amount) + "&term=" + fastLoanData.term?.toString() + "&loanId=" + fastLoanData.interestRateId}>Detay</a>
                    </div>
                    <div className="col-12 m-0 p-0">
                        <span>Faiz Oranı:</span> {fastLoanData.rate}

                    </div>

                </div>
            </div>
        </div>
    
}

function FastLoanResult(props) {
    const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));


    return (
        <>
            <div className="col-5" style={{
                padding: 0, float: "left",
                fontWeight: "bold"
            }}>Taksit:</div>
            {"₺" + priceSplitter(props.mountlyPayment)}



            <br />
            <div className="col-5" style={{
                padding: 0, float: "left",
                fontWeight: "bold"
            }}>Toplam:</div>
            {"₺" + priceSplitter(props.totalPayment)}

        </>
    );
}

export default FastLoanResult;
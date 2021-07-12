import React, { useEffect, useRef, useState } from "react"
import CurrencyInput from "react-currency-input"
import bankdemodata from "../bankdemodata"
import calculator from "../Components/calculator"
import Dropdown from 'react-dropdown';
import { Link } from "react-router-dom";
import { apiurl, GetNoneToken, PostNoneToken } from "../datacrud/datacrud";
import { loanRedirect } from "../Components/RedirectComponent";

export const LoanBank = (props) => {
    const [bank, setBank] = useState({})
    const [loanType, setLoanType] = useState({})
    const [loanTermsDropdown, setLoanTermsDropdown] = useState([])
    const [amt, setAmt] = useState(new URLSearchParams(props.location.search).get("amount"))
    const [trm, setTrm] = useState(new URLSearchParams(props.location.search).get("term"))


    const [calcuateResult, setCalculateResult] = useState({
        totalpayment: 0,
        totalVergi: 0,
        totalFaiz: 0,
        paymentPlan: [{
            tutar: 0,
            faiz: 0,
            vergi: 0,
            odenen: 0,
        }]
    })
    const tableHeader = useRef(null)
    const [tableHeaderWidth, setTableHeaderWidth] = useState(0)

    let amount = new URLSearchParams(props.location.search).get("amount")
    let term = new URLSearchParams(props.location.search).get("term")
    let loanId = new URLSearchParams(props.location.search).get("loanId")

    useEffect(() => {

        setTableHeaderWidth(tableHeader.current.offsetWidth);
        function handleResize() {
            if (tableHeader != null) {
                setTableHeaderWidth(tableHeader.current.offsetWidth);
            }
        }
        start()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const start = async () => {
        let bankData = await GetNoneToken("Banks/GetAllBankSiteById/" + props.BankId).then(x => { return x.data }).catch(x => { return false })
        if (bankData) {
            let lt = bankData.loans.find((x) => { return x.id == loanId })
            setLoanTermsDropdown(lt?.terms)
            setLoanType(lt)
            setBank(bankData)

            var plan = calculator(parseFloat(lt?.rate), parseInt(amount), parseInt(trm), 5, 15)
            setCalculateResult(plan)
        }

    }

    const calculate = () => {
        var plan = calculator(parseFloat(loanType?.rate), parseInt(amount), parseInt(trm), 5, 15)
        setCalculateResult(plan)
        let prm = new URLSearchParams(props.location.search)
        prm.set("amount", amount)
        prm.set("term", trm)
        prm.set("loanId", loanId)
        props.history.push(window.location.pathname + "?" + prm)
        //  window.location.replace("amount="+amount+"&term="+term+"&&loanId="+loanId)
    }

    const updateSelectedLoanOption = (r = null, a = null, t = null) => {

        var ss = bank?.loans?.find(x => {

            if (
                x.minAmount <= parseInt((a != null ? a : amount)) &&
                x.maxAmount >= parseInt((a != null ? a : amount)) &&
                x.loanUrlName == loanType.loanUrlName

            ) {
                return true
            }

        });

        
        if (ss) {
            setLoanTermsDropdown(ss.terms)
            setLoanType(ss)
            setTrm(ss.terms[0])
            setTrm(t != null ? t : trm)
        } else {
            setLoanTermsDropdown([])
            setTrm("")

        }

        setAmt(a != null ? a : amt)

    }


    return (

        <div>
            <div className="master-content">
                <div className="row  mb-5" style={{ background: "white" }} >
                    <div className="col-12 col-lg-4 col-md-4" style={{ borderRight: "1px solid #b1b1b1" }}>
                        <div className="row">
                            <div className="col-12">
                                <img title={bank?.bankName + " banka " + loanType?.loanName + "kredisi sorgulama soçuçları  kredi.com.tr"} alt={"logo"} style={{ width: "100%" }} src={apiurl + bank.logoUrl}></img>
                            </div>

                        </div>

                        <div className="row mt-2 pr-3 pl-3">

                            <div className="col-12">

                                <div> <b style={{ color: "black" }}>Tutar</b></div>

                                <CurrencyInput style={{
                                    float: "left",
                                    minWidth: 60,
                                }}
                                    placeholder="Tutar Giriniz"
                                    className="col-12"
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    precision="0"
                                    prefix="₺"
                                    value={amt}
                                    onChange={(val) => { updateSelectedLoanOption(null, val.replace("₺", "").replace(".", ""), null); setAmt(val.replace("₺", "").replace(".", "")) }}
                                />
                                <div> <b style={{ color: "black" }}>Vade</b></div>
                                <Dropdown
                                    options={loanTermsDropdown || []}
                                    onChange={(val) => { updateSelectedLoanOption(null, null, val.value) }}
                                    placeholder="Vade"
                                    value={trm}
                                    arrowClassName="dropdownArrow"
                                />

                            </div>
                            <div className="col-12 mt-3">
                                <button onClick={() => calculate()} className="default-button justify-content-center text-center" >Tekrar Hesapla</button>


                            </div>



                        </div>
                    </div>

                    <div className="col-12 col-lg-8 col-md-8 mt-3 mt-3 pl-4 pr-4">
                        <div className="row loan-info-grid" >
                            <div className="col-12">
                                <h4> <b>{loanType?.loanName}</b></h4>
                            </div>


                            <div className="col-12 col-lg-6 pt-2 pb-2">
                                <b className=" col-6" style={{ color: "#797979" }}>Faiz Oranı:</b>
                                <b className="col-6" style={{ color: "black" }}>   {loanType?.rate}</b>
                            </div>
                            <div className="col-12 col-lg-6 pt-2 pb-2">
                                <b className=" col-6" style={{ color: "#797979" }}>Toplam Faiz:</b>
                                <b className="col-6" style={{ color: "black" }}>
                                    <CurrencyInput style={{
                                        padding: 0,
                                        border: "none",
                                        display: "inline",
                                        fontWeight: "bold",
                                        width: "auto",
                                        background: "none"
                                    }}
                                        className="col-7"
                                        decimalSeparator="."
                                        thousandSeparator="."
                                        precision="0"
                                        disabled
                                        prefix="₺"
                                        value={calcuateResult.totalFaiz.toFixed(0)} />
                                </b>
                            </div>
                            <div className="col-12 col-lg-6 pt-2 pb-2">
                                <b className=" col-6" style={{ color: "#797979" }}>Toplam Vergi:</b>
                                <b className="col-6" style={{ color: "black" }}>
                                    <CurrencyInput style={{
                                        padding: 0,
                                        border: "none",
                                        display: "inline",
                                        fontWeight: "bold",
                                        width: "auto",
                                        background: "none"
                                    }}
                                        className="col-7"
                                        decimalSeparator="."
                                        thousandSeparator="."
                                        precision="0"
                                        disabled
                                        prefix="₺"
                                        value={calcuateResult.totalVergi.toFixed(0)} />
                                </b>
                            </div>
                            <div className="col-12 col-lg-6 pt-2 pb-2">
                                <b className=" col-4" style={{ color: "#797979" }}>Ödenecek Tutar:</b>
                                <b className="col-8" style={{ color: "black" }}>
                                    <CurrencyInput style={{
                                        padding: 0,
                                        border: "none",
                                        display: "inline",
                                        fontWeight: "bold",
                                        width: "auto",
                                        background: "none"
                                    }}

                                        decimalSeparator="."
                                        thousandSeparator="."
                                        precision="0"
                                        disabled
                                        prefix="₺"
                                        value={(calcuateResult.totalpayment * parseInt(term)).toFixed(0)} />
                                </b>
                            </div>
                            <div className="col-12 mt-3">
                                Tercihiniz üzerine  <b>
                                    <CurrencyInput style={{
                                        padding: 0,
                                        border: "none",
                                        display: "inline",
                                        fontWeight: "bold",
                                        width: 90,
                                        background: "none",
                                        textAlign: "center"
                                    }}
                                        className="col-7"
                                        decimalSeparator="."
                                        thousandSeparator="."
                                        precision="0"
                                        disabled
                                        prefix="₺"
                                        value={amount} />
                                </b> tutarındaki kredi, <b>{term} </b> vade ile hesaplanmıştır. <br />

                                <b style={{ fontSize: 12, color: "#077a68" }}><i style={{ color: "#077a68" }}>*Faiz oranı kredi notunuza göre değişiklik gösterebilir</i></b>

                            </div>
                            <div className="col-12">
                                <div className="row mt-4 pt-3 pb-3" style={{ borderTop: "1px solid #b1b1b1" }}>
                                    <div className="col-4">
                                        <div className=" col-12" style={{ color: "#797979", fontWeight: "bold", fontSize: 18 }}>Aylık Taksit:</div>
                                        <div className="col-12" style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>
                                            <CurrencyInput style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none",
                                                fontWeight: "bold"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={(calcuateResult.totalpayment).toFixed(0)} />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <button style={{
                                            background: "#0f8f9c",
                                            fontWeight: "bold",
                                            color: "white",
                                            height: "100%"
                                        }} onClick={() => loanRedirect(loanType?.loanUrlName, loanType?.redirectUrl, bank.id, loanId, { bankName: bank.bankName, amount: amount, loanName: loanType?.loanName, rate: loanType?.rate.toString(), term: term })} className="default-button justify-content-center text-center" >Başvur</button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>




                <div className="row">

                    <div className="col-12">
                        <h4 style={{
                            color: "black",
                            fontWeight: "bold",
                            marginBottom: "28px"
                        }}>Ödeme Planı</h4>
                        <div ref={tableHeader} style={{ position: "relative" }}>



                            <div className="div-table">

                                <div className="div-table-row div-table-header">
                                    <div className="div-table-col pl-2" style={{ width: 50 }}> №</div>
                                    <div className="div-table-col">Kalan Ana Para</div>
                                    <div className="div-table-col">Ödenen</div>
                                    <div className="div-table-col">Ödenen Faiz</div>
                                    <div className="div-table-col">Ödenen Vergi</div>
                                    <div className="div-table-col">Aylık Taksit</div>
                                </div>
                                {
                                    calcuateResult.paymentPlan.map((item, key) => {


                                        let color = key % 2 == 0 ? { background: "#e8e8e8" } : {};

                                        if (item.odenen != 0) {
                                            return (
                                                <div key={key} className="div-table-row" style={color}>
                                                    <div className="div-table-col pl-2" style={{ width: 50 }}>{key + 1}</div>
                                                    <div className="div-table-col">
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
                                                            precision="0"
                                                            disabled
                                                            prefix="₺"
                                                            value={item.tutar.toFixed(0)} />
                                                    </div>
                                                    <div className="div-table-col">
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
                                                            precision="0"
                                                            disabled
                                                            prefix="₺"
                                                            value={item.odenen.toFixed(0)} />
                                                    </div>
                                                    <div className="div-table-col">
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
                                                            precision="0"
                                                            disabled
                                                            prefix="₺"
                                                            value={item.faiz.toFixed(0)} />
                                                    </div>
                                                    <div className="div-table-col">
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
                                                            precision="0"
                                                            disabled
                                                            prefix="₺"
                                                            value={item.vergi.toFixed(0)} />
                                                    </div>
                                                    <div className="div-table-col">
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
                                                            precision="0"
                                                            disabled
                                                            prefix="₺"
                                                            value={(item.odenen + item.faiz + item.vergi).toFixed(0)} />

                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}



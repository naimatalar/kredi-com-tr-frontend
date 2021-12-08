import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import { GetNoneToken, PostNoneToken } from "../../datacrud/datacrud";
import classnames from 'classnames';
import Image from "react-image-webp";
export const LoanSearch = (props) => {
    const [loansOption, setLoanOption] = useState([])
    const [terms, setTerms] = useState([])
    const [termsValue, setTermsValue] = useState()

    const [amount, setAmount] = useState("")
    const [loanType, setLoanType] = useState()
    const [propsLoan, setPropsLoan] = useState([])
    const [isValid, setIsValid] = useState(true)
    const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        start();

    }, [props.Loans])
    const loanTypeOnChange = async (id) => {

        var terms = await GetNoneToken("InterestRates/GetLoanTerms/" + id).then(x => { return x.data }).catch(x => { return false })

        let termsList = [];
        terms?.map((item, key) => {
            termsList.push({ label: item, value: item })
        })
        setTerms(terms)
        setLoanType(id)
    }
    const termListOnChange = async (val) => {

        setTermsValue(val)

    }

    const calculate = async () => {
        var data = {};
        try {
            data = {
                loanTypeId: loanType,
                amount: (amount != null ? amount?.replace("₺", "").replace(/\./g, "") : ""),
                term: termsValue
            }
        } catch (error) {
            alert(error)
        }




        if (data.loanTypeId && data.term && data.amount > 0) {
            setIsValid(true)
            var urlName = propsLoan.find(x => x.id == data.loanTypeId)?.urlName


            // let prm = new URLSearchParams()
            // prm.set("amount", data.amount)
            // prm.set("term", data.term)

            window.history.pushState({}, "", "/kredi-hesaplama/" + data.amount + "-tl-" + data.term + "-ay-vade-" + urlName)
            window.history.go()

            // window.location.replace("/" + urlName + "-arama-hesaplama?" + prm)
        } else {
            setIsValid(false)
        }
    }


    const start = async () => {


        let ln = [];
        props.Loans?.map((item, key) => {

            ln.push({ label: item.loanName, value: item.id })
        })
        setPropsLoan(props.Loans)
        setLoanOption(ln)
        loanTypeOnChange(ln[0].value)

    }
    return (

        <div >
            
                <div className="" style={props.backgroundStyle || { borderRadius: 5 }}>
                    <div className="container">
                        <div className="row" >
                            <div className="loan-search-content">
                                <div style={{ width: "100%" }}>
                                    <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 17 }}>Kredinizi aratın,<br /> Size uygun olan krediyi buradan bulabilirsiniz </p>

                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12" style={{ marginBottom: 15 }}>
                                            <Dropdown
                                                options={loansOption}
                                                onChange={(element) => loanTypeOnChange(element.value)}
                                                placeholder="Kredi Türü Seçiniz"
                                                arrowClassName="dropdownArrow"
                                                value={loanType}
                                            />

                                        </div>
                                        <div className="col-6 ">

                                            <CurrencyInput inputmode="numeric" style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                onChange={(x) => { setAmount(x) }}
                                                value={amount}

                                                prefix="₺"
                                            />
                                            {/* <input type="text" ></input> */}
                                        </div>
                                        <div className="col-6 ">
                                            <Dropdown
                                                options={terms}
                                                onChange={(d) => { termListOnChange(d.value) }}
                                                placeholder="Vade"
                                                arrowClassName="dropdownArrow"

                                            />
                                        </div>

                                        <div className="col-6 ">
                                        </div>
                                        <div className="col-6 " style={{ justifyontent: "flex-end", marginTop: 12 }}>
                                            <button onClick={(x) => { calculate() }} className="default-button" >ARA</button>
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            {!isValid && <b style={{ color: "red" }}>***Bilgileri eksiksiz doldurunuz</b>}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            
    
        </div>
    )

}
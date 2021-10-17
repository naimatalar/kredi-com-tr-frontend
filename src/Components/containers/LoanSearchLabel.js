import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import { GetNoneToken, PostNoneToken } from "../../datacrud/datacrud";
import classnames from 'classnames';
import Image from "react-image-webp";
export const LoanSearchLabel = (props) => {
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


            <div className="col-12 mb-4 container-find-loan-line p-0">
                <Nav tabs className="justify-content-center">

                    {loansOption.map((item, key) => {
                        return (
                            <NavItem key={key}>
                                <NavLink
                                    className={classnames({ active: activeTab === key.toString() })}
                                    onClick={() => { toggle(key.toString()); loanTypeOnChange(item.value) }}
                                >
                                    <div className="icon-div">
                                        {item.label.includes("İhtiyaç") &&
                                            <Image title="İhtiyaç kredisi kredi.com.tr" alt="ihtiyaç kredisi sayfası" style={{ width: "50px" }}
                                                webp={require("../../assets/images/moneycolor.webp").default}
                                                src={require("../../assets/images/moneycolor.png").default}></Image>
                                        }
                                        {item.label.includes("Taşıt") &&
                                            <Image title="Taşıt kredisi kredi.com.tr" alt="Taşıt kredisi sayfası" style={{ width: "50px" }}
                                                webp={require("../../assets/images/carColor.webp").default}
                                                src={require("../../assets/images/carColor.png").default}></Image>
                                        }
                                        {item.label.includes("Konut") &&
                                            <Image title="Konut kredisi kredi.com.tr" alt="Konut kredisi sayfası" style={{ width: "50px" }}
                                                webp={require("../../assets/images/homecolor.webp").default}
                                                src={require("../../assets/images/homecolor.png").default}></Image>
                                        }
                                        {item.label.includes("Kobi") &&
                                            <Image title="Kobi kredisi kredi.com.tr" alt="Kobi kredisi sayfası" style={{ width: "50px", height: 30 }}
                                                webp={require("../../assets/images/corporatecolor.webp").default}
                                                src={require("../../assets/images/corporatecolor.png").default}></Image>
                                        }
                                    </div>

                                    {item.label}

                                </NavLink>
                            </NavItem>)
                    })}



                </Nav>
                <TabContent activeTab={activeTab} className="pt-4 pb-4 pl-3 repead-bg">
                    <TabPane tabId="0">
                        {activeTab == "0" &&
                            <div key="0" className="row p-0">

                                <div className="col-12  col-md-4 col-lg-4 ">

                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%", fontSize: 25 }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x) }}
                                        value={amount}

                                        prefix="₺"
                                    />
                                    {/* <input type="text" ></input> */}
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 drpd-find">
                                    <Dropdown
                                        options={terms}
                                        onChange={(d) => { termListOnChange(d.value) }}
                                        placeholder="Vade"
                                        arrowClassName="dropdownArrow"


                                    />
                                </div>
                                <div className=" col-md-4 col-lg-4 row justify-content-left">
                                    <div className="col-12 ">
                                        <button onClick={(x) => { calculate() }} className="default-button btn-frs">Kredi Hesapla</button>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    {!isValid && <b style={{ color: "red" }}>***Bilgileri eksiksiz doldurunuz</b>}

                                </div>
                            </div>}
                    </TabPane>
                    <TabPane tabId="1">
                        {activeTab == "1" &&

                            <div key="1" className="row p-0">

                                <div className="col-12  col-md-4 col-lg-4 ">

                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%", fontSize: 25 }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x) }}
                                        value={amount}

                                        prefix="₺"
                                    />
                                    {/* <input type="text" ></input> */}
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 drpd-find">
                                    <Dropdown
                                        options={terms}
                                        onChange={(d) => { termListOnChange(d.value) }}
                                        placeholder="Vade"
                                        arrowClassName="dropdownArrow"


                                    />
                                </div>
                                <div className=" col-md-4 col-lg-4 row justify-content-left">
                                    <div className="col-12 ">
                                        <button onClick={(x) => { calculate() }} className="default-button btn-frs">Kredi Hesapla</button>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    {!isValid && <b style={{ color: "red" }}>***Bilgileri eksiksiz doldurunuz</b>}

                                </div>
                            </div>
                        }
                    </TabPane>
                    <TabPane tabId="2">
                        {activeTab == "2" &&


                            <div key="2" className="row p-0">

                                <div className="col-12  col-md-4 col-lg-4 ">

                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%", fontSize: 25 }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x) }}
                                        value={amount}

                                        prefix="₺"
                                    />
                                    {/* <input type="text" ></input> */}
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 drpd-find">
                                    <Dropdown
                                        options={terms}
                                        onChange={(d) => { termListOnChange(d.value) }}
                                        placeholder="Vade"
                                        arrowClassName="dropdownArrow"


                                    />
                                </div>
                                <div className=" col-md-4 col-lg-4 row justify-content-left">
                                    <div className="col-12 ">
                                        <button onClick={(x) => { calculate() }} className="default-button btn-frs">Kredi Hesapla</button>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    {!isValid && <b style={{ color: "red" }}>***Bilgileri eksiksiz doldurunuz</b>}

                                </div>
                            </div>
                        }
                    </TabPane>
                    <TabPane tabId="3" >
                        {activeTab == "3" &&
                            <div key="3" className="row p-0">

                                <div className="col-12  col-md-4 col-lg-4 ">

                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%", fontSize: 25 }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x) }}
                                        value={amount}

                                        prefix="₺"
                                    />
                                    {/* <input type="text" ></input> */}
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 drpd-find">
                                    <Dropdown
                                        options={terms}
                                        onChange={(d) => { termListOnChange(d.value) }}
                                        placeholder="Vade"
                                        arrowClassName="dropdownArrow"


                                    />
                                </div>
                                <div className=" col-md-4 col-lg-4 row justify-content-left">
                                    <div className="col-12 ">
                                        <button onClick={(x) => { calculate() }} className="default-button btn-frs">Kredi Hesapla</button>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    {!isValid && <b style={{ color: "red" }}>***Bilgileri eksiksiz doldurunuz</b>}

                                </div>
                            </div>
                        }
                    </TabPane>
                </TabContent>
            </div>


        </div>
    )

}
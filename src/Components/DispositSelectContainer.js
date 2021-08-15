import React, { useEffect, useState } from 'react';
import { DispositMatrixContainer } from './containers/DispositMatrixContainer';
import dispositCalculator from "../Components/dispositCalculator"
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import CurrencyInput from 'react-currency-input';
import { dispositRedirect } from './RedirectComponent';


function DispositSelectContainer(props) {
    const [selectedDisposit, setSelectedDisposit] = useState()
    const [currencyIcon, setCurrencyIcon] = useState("")
    const [calculateDisposit, setCalculateDisposit] = useState({ rate: 0, amount: 0, term: 0 })
    const [calculateDispositResult, setCalculateDispositResult] = useState({ netAmount: "", totalAmount: "", term: "", id: "", rate: "", amount: "" })
    const [activeTab, setActiveTab] = useState(0);
    const [disposits, setDisposits] = useState([]);
    const [refresh, setRefresh] = useState([]);

    let isActive = ""
    useEffect(() => {
        setDisposits(props.Disposit);
        setRefresh(new Date().getTime())
        setSelectedDisposit(props.Disposit[0])

        if (props.Disposit[0].dispositCurrency == 0) {
            setCurrencyIcon("₺")
        } else if (props.Disposit[0].dispositCurrency == 1) {
            setCurrencyIcon("$")
        } else if (props.Disposit[0].dispositCurrency == 2) {
            setCurrencyIcon("€")
        }
    }, [])
    const CalculateDispositFunc = (amount = 0, term = 0) => {
        var dt = {

            amount: amount != calculateDisposit.amount ? amount : calculateDisposit.amount,
            term: term != calculateDisposit.term ? term : calculateDisposit.term,
            rate: calculateDisposit.rate
        }

        let findResult = selectedDisposit.dispositRates.find(x => {

            if (
                x.minAmount <= dt.amount &&
                x.maxAmount >= dt.amount &&
                x.minTerm <= dt.term &&
                x.maxTerm >= dt.term
            ) {
                return true
            }

        })

        setCalculateDisposit(dt)

        if (findResult != undefined) {

            dt.rate = findResult.rate
            var calResut = dispositCalculator(dt.amount, dt.rate, dt.term, selectedDisposit.dispositCurrency !== 0)
            setCalculateDispositResult({ netAmount: calResut.netResult.toFixed(2).replace(".", ","), totalAmount: (calResut.netResult + dt.amount).toFixed(2).replace(".", ","), term: dt.term, id: findResult.id, rate: dt.rate, amount: dt.amount })

        } else {
            setCalculateDispositResult({ netAmount: "", totalAmount: "", term: "", id: "", rate: "", amount: "" })
            isActive = ""
        }

    }

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const currencIconChange = (c) => {


        if (c.dispositCurrency == 0) {
            setCurrencyIcon("₺")
        } else if (c.dispositCurrency == 1) {
            setCurrencyIcon("$")
        } else if (c.dispositCurrency == 2) {
            setCurrencyIcon("€")
        }


    }


    return (
        <div className="col-12 col-lg-6 col-md-6 row mt-5 ml-0 mr-0">
            <div className="col-12 row m-0">
                <div className="disposit-bank-container row align-content-start">
                    {/* <h4 style={{ color: "#464646" }} className="text-center"> Bankaya Ait <b title={bank.bankName + " Mevduat Hesapları "}>Mevduat Hesapları</b> </h4> */}
                    <div className="col-12">
                        <Nav tabs>
                            {
                                disposits.map((item, key) => {


                                    return (
                                        <NavItem key={key}>
                                            <NavLink
                                                className={classnames({ active: activeTab === key })}
                                                onClick={() => { toggle(key); setSelectedDisposit(item); currencIconChange(item) }}
                                            >
                                                <b style={{ color: "#626262" }}>{item.name}</b>
                                            </NavLink>
                                        </NavItem>
                                    )
                                })
                            }

                        </Nav>
                    </div>
                    <div className="col-12">
                        <div className="row p-0 m-0">
                            <div className="col-12 pt-3">
                                <h4 style={{ textAlign: "center" }}><b style={{ color: "#626262" }}>{selectedDisposit?.name}  </b> Vadeli Mevduat Hesabı</h4>
                                {/* <span>{selectedDisposit.rate} </span> */}
                            </div>
                            <div className="row ">

                                <div className="col-12 p-3 row ml-0 mr-0">
                                    <div className="col-6">
                                        <i>Tutar Giriniz</i>
                                        <CurrencyInput style={{
                                            float: "left",
                                            width: "100%",
                                            maxWidt: "100%"
                                        }}
                                            placeholder="Anapara Giriniz"
                                            className="col-12"
                                            decimalSeparator="."
                                            thousandSeparator="."
                                            precision="0"
                                            prefix={currencyIcon}
                                            value={calculateDisposit.amount}
                                            onChange={(val) => CalculateDispositFunc(parseInt(val.replace(currencyIcon, "").replace(/\./g, "")), calculateDisposit.term)}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <i>Vade Giriniz (Gün)</i>
                                        <input type="text" style={{ width: "100%" }} value={calculateDisposit.term} onChange={(element) => CalculateDispositFunc(calculateDisposit.amount, parseInt(element.target.value) || "")}></input>

                                    </div>


                                </div>

                                <div className="col-12 row m-0 justify-content-center">

                                    <div className="col-12 row ">
                                        <DispositMatrixContainer selectedData={calculateDispositResult} data={selectedDisposit}></DispositMatrixContainer>

                                    </div>
                                    {calculateDispositResult.netAmount != "" &&
                                        <div className="col-12 res-disposit row mb-3">

                                            <div className="col-6 mb-2 row ">
                                                <div style={{ float: "left" }}>
                                                    Net Kazanç :
                                                    <CurrencyInput style={{
                                                        padding: 0,
                                                        border: "none",
                                                        display: "inline",

                                                        background: "none",

                                                        fontWeight: "bold",
                                                        textAlign: "left",
                                                        position: "absolute",
                                                        margin: "2px 0px 2px 8px"

                                                    }}
                                                        className="col-5"
                                                        decimalSeparator=","
                                                        thousandSeparator="."
                                                        precision="0"
                                                        disabled
                                                        prefix={currencyIcon}
                                                        value={calculateDispositResult.netAmount} />
                                                </div>
                                                <div style={{ float: "left", marginLeft: 57 }}>Vade : <b>{calculateDisposit.term}</b></div>

                                            </div>
                                            <div className="col-6 mb-2 text-right">

                                                Faiz Oranı: <b>{calculateDispositResult.rate}</b>

                                            </div>
                                            <div className="col-6 disposit-total-amount">
                                                <span style={{ fontWeight: "bold", fontSize: 17 }}>Toplam Kazanç : </span>

                                                <CurrencyInput style={{
                                                    padding: 0,
                                                    border: "none",
                                                    display: "inline",
                                                    background: "none",
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                    textAlign: "left",
                                                    position: "absolute",
                                                    margin: "2px 0px 2px 8px"

                                                }}
                                                    className="col-5"
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    precision="0"
                                                    disabled
                                                    prefix={currencyIcon}
                                                    value={calculateDispositResult.totalAmount} />


                                            </div>
                                            <div className="col-6 p-2 text-right">
                                                <button onClick={() => dispositRedirect(
                                                    selectedDisposit?.redirectUrl,
                                                    props.Bank.id,
                                                    selectedDisposit.id,
                                                    {
                                                        bankName: props.Bank.bankName,
                                                        amount: calculateDispositResult.amount.toString(),
                                                        rate: calculateDispositResult.rate.toString(),
                                                        term: calculateDispositResult.term.toString()
                                                    })} style={{ color: "white", width: 120 }} className="default-button blue-button">Hemen Başvur
                                                </button>

                                            </div>

                                        </div>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DispositSelectContainer;
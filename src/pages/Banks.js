import React, { useEffect, useState } from "react"
import bankdemodata from "../bankdemodata"
import { Helmet } from "react-helmet";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { kredicartdata } from "../kredicartdata";
import { LoanRate } from "../Components/containers/LoanRate";
import { FastLoan } from "../Components/containers/FastLoan";

export const Banks = (props) => {
    const [bank, setBank] = useState(bankdemodata[0])
    const [activeLoanType, setActiveLoanType] = useState({ id: null })
    const [selectedLoanOptions, setSelectedLoanOptions] = useState({ rate: null, amount: null, term: null })
    const [creditCarts, setCreditCarts] = useState([])
    const [sliderPlay, setSliderPlay] = useState(true)


    useEffect(() => {
        let bankData = bankdemodata.find(x => { return x.id == props.BankId })
        setBank(bankData)
        setActiveLoanType(bankData.loans[0])
        updateSelectedLoanOption(bankData.loans[0].rate, null, null)
        setCreditCarts(kredicartdata.slice(0, 6))
    }, [props])
    const selectLoanType = (loanId) => {
        let selectedLoant = bank.loans.find(x => { return x.id == loanId })
        updateSelectedLoanOption(selectedLoant.rate, null, null)
        setActiveLoanType(selectedLoant)
    }
    const updateSelectedLoanOption = (rate = null, amount = null, term = null) => {

        selectedLoanOptions.rate = (rate != null ? rate : selectedLoanOptions.rate)
        selectedLoanOptions.amount = (amount != null ? amount : selectedLoanOptions.amount)
        selectedLoanOptions.term = (term != null ? term : selectedLoanOptions.term)
        setSelectedLoanOptions(selectedLoanOptions)
    }
    return (
        <div className="container-fluid">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>Bankalar</title>
            </Helmet>
            <div className="row bank-label">
                <div className="col-12">
                    <div className="row justify-content-center">

                        <div className="col-md-3 col-lg-3 col-sm-6 col-8"><img src={bank.logoUrl} style={{ width: "100%" }}></img></div>
                    </div>
                </div>
            </div>
            <div className="master-content ">

                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 bank-loan-content">
                        <div className="bank-loan-text">  <h4>Bankaya Ait <span style={{ textDecoration: "underline", color: "white" }}>{selectedLoanOptions.rate} </span>Kredi Faiz Oranı İle Hemen Kredinizi Hesaplayıp Başvurun </h4> </div>

                        <div className="bank-loan-lightview">
                            <div className="col-12 bank-loan-tab-link">
                                <ul className="loan-list-content">

                                    {bank.loans.map((item, key) => {
                                        let activeClass = ""
                                        if (item.id == activeLoanType.id) {
                                            activeClass = "active-loan-tab"
                                        }
                                        return (

                                            <li onClick={() => { selectLoanType(item.id) }} className={"loan-tabs " + activeClass} key={key}>

                                                {item.loanName}

                                            </li>
                                        )

                                    })

                                    }
                                </ul>
                            </div>
                            <div className="container">

                                <div className="row justify-content-center">


                                    <div className="col-5 ">
                                        <Dropdown
                                            options={activeLoanType.terms}
                                            onChange={(val) => updateSelectedLoanOption(null, null, val.value)}
                                            placeholder="Vade"
                                            arrowClassName="dropdownArrow"
                                        />
                                    </div>

                                    <div className="col-5 ">
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
                                            value={selectedLoanOptions.amount}
                                            onChange={(val) => updateSelectedLoanOption(null, val.replace("₺", "").replace(".", ""), null)}
                                        />
                                    </div>



                                    <div className="justify-content col-5 mt-3">

                                    </div>
                                    <div className="justify-content col-5 mt-3">
                                        <button className="default-button justify-content-center" type="submit">Hesapla</button>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 row">
                        <div className="col-12">
                            <h4 style={{ color: "#464646", borderBottom: "1px solid #464646" }} className="text-center"> Bankaya Ait <b title={bank.bankName + "kredi kartı"}>{creditCarts.length} Adet Kredi Kartı</b> Bulunuyor</h4>

                        </div>
                        <div className="col-12 cnts">
                            <div className="slide-container container">
                                <Slide indicators={true} pauseOnHover={true} duration={2500} transitionDuration={800}>
                                    {

                                        creditCarts.map((each, index) => {

                                            return (<div key={index}  >
                                                <div className="each-fade" >
                                                    <div className="row">


                                                        <div className="col-6">
                                                            <img src={each.logo} style={{ width: "100%" }}></img>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="col-12">
                                                                <h3>{each.name}</h3>

                                                                <b style={{ color: "#535656" }}> Yıllık Ücret</b>


                                                     ₺{each.yearlyUsingAmount}
                                                            </div>
                                                            <div className="container mt-3">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <button className="default-button" style={{
                                                                            padding: 3,
                                                                            fontSize: 13,
                                                                        }} type="submit">BAŞVUR</button>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <button className="default-button" style={{
                                                                            padding: 3,
                                                                            fontSize: 13,
                                                                            background: "#585858",
                                                                        }} type="submit">DETAY</button>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="container">

                                                        <div className="row">
                                                            <div className="col-12">
                                                                <hr></hr>
                                                                <h5 className="text-center">Kampanyalar</h5>
                                                                {
                                                                    each.campaing.map((jitem, jkey) => {
                                                                        return (
                                                                            <div key={jkey}>
                                                                                <img style={{
                                                                                    width: 30,
                                                                                    marginRight: 3,
                                                                                    float: "left"

                                                                                }} src={require("../assets/images/campaigns.png").default}></img>
                                                                                <span key={jkey} style={{
                                                                                    fontSize: 13,
                                                                                    display: "block",
                                                                                    lineHeight: "15px",
                                                                                    marginBottom: 7,
                                                                                    color: "black"
                                                                                }}> {jitem.title}</span>

                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            <div className="col-12">
                                                                <b style={{
                                                                    fontSize: 14,
                                                                    color: " #616161",
                                                                    marginTop: -1,
                                                                    display: "block",
                                                                    paddingLeft: 23,
                                                                    cursor: "pointer"
                                                                }}> <i>Tüm Kampayaları Gör (+{each.campaing.length})</i>  </b>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        })

                                    }

                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h4 className="home-title" > Diğer bütün bankaların <span style={{ fontWeight: "bold" }}>en çok kullanılan kredileri ve faiz oranları </span>`na göz atın.  </h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <LoanRate />
                    </div>
                    <div className="col-6">
                        <FastLoan />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Banks
import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input';
import Dropdown from 'react-dropdown';
import Image from 'react-image-webp';
import { KrediInput } from '../KrediInput';
import KrediSelect from '../KrediSelect';

export function BankLoanSearchLabel(props) {
    const [selectedLoanOptions, setSelectedLoanOptions] = useState({ rate: null, amount: null, term: null })
    const [activeLoanType, setActiveLoanType] = useState({ id: null })
    const [loanTermsDropdonw, setLoanTermsDropdown] = useState([])
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if (props.Loans.length > 0) {
            setActiveLoanType(props?.Loans[0])
        }


        if (props?.Loans > 0) {

            updateSelectedLoanOption(props.Loans[0]?.rate, null, null)

        } else {
            updateSelectedLoanOption(0, null, null)
        }
    }, [])
    const selectLoanType = (loanId) => {

        let existControl = []
        let selectedLoant = props.Loans.filter(x => { return x.loanUrlName == loanId })



        updateSelectedLoanOption(selectedLoant[0].rate, null, null)
        setActiveLoanType(selectedLoant[0])


    }

    const updateSelectedLoanOption = (rate = null, amount = null, term = null) => {

        var ss = props.Loans.find(x => {

            if (
                x.minAmount <= parseInt((amount != null ? amount : selectedLoanOptions.amount)) &&
                x.maxAmount >= parseInt((amount != null ? amount : selectedLoanOptions.amount)) &&
                x.loanUrlName == activeLoanType.loanUrlName

            ) {
                return true
            }

        });


        if (ss) {
            setLoanTermsDropdown(ss.terms)
            setActiveLoanType(ss)

        } else {
            setLoanTermsDropdown([])

        }


        selectedLoanOptions.rate = (rate != null ? rate : selectedLoanOptions.rate)
        selectedLoanOptions.amount = (amount != null ? amount : selectedLoanOptions.amount)
        selectedLoanOptions.term = (term != null ? term : selectedLoanOptions.term)
        setSelectedLoanOptions(selectedLoanOptions)
    }
    const redirectLoanBank = (rate = null, amount = null, term = null) => {

        if (selectedLoanOptions.amount > 0 && selectedLoanOptions.term && activeLoanType.id) {
            setIsValid(true)
            let prm = new URLSearchParams()
            prm.set("amount", selectedLoanOptions.amount)
            prm.set("term", selectedLoanOptions.term)
            prm.set("loanId", activeLoanType.id)
            // props.history.push("/bankalar/" + props.Bank.bankUrlName + "-kredi-hesaplama-ve-basvuru?" + prm);
            window.history.pushState({}, "", "/bankalar/" + props.Bank.bankUrlName + "-kredi-hesaplama-ve-basvuru?" + prm)
            window.history.go()
        } else {
            setIsValid(false)
        }

    }

    var loanUrlNameControl = []
    return (
        <div className="col-12 bank-loan-content mt-5 bankbackground p-0">

            <div className="bank-loan-lightview">
                <div className="col-12 bank-loan-tab-link ">
                    <ul className="loan-list-content pt-3 row">

                        {props.Loans?.map((item, key) => {
                            let activeClass = ""

                            if (item.loanUrlName == activeLoanType.loanUrlName) {
                                activeClass = "active-loan-tab"
                            }
                            if (loanUrlNameControl.includes(item.loanUrlName)) {


                            } else {
                                loanUrlNameControl.push(item.loanUrlName)

                                return (
                                    <li key={key}  onClick={() => { selectLoanType(item.loanUrlName) }} className={"row justify-content-center loan-tabs text-center col-4 col-lg-2 col-md-2 mb-1 mb-lg-0 mb-md-0 " + activeClass} key={key}>

                                        {/* <a href="#"></a> */}
                                            {item.loanName.includes("İhtiyaç") &&
                                                <Image  title="İhtiyaç kredisi kredi.com.tr" alt="ihtiyaç kredisi sayfası" style={{ width: "50px" }}
                                                    webp={require("../../assets/images/moneycolor.webp").default}
                                                    src={require("../../assets/images/moneycolor.png").default}></Image>
                                            }
                                            {item.loanName.includes("Taşıt") &&
                                                <Image title="Taşıt kredisi kredi.com.tr" alt="Taşıt kredisi sayfası" style={{ width: "50px" }}
                                                    webp={require("../../assets/images/carColor.webp").default}
                                                    src={require("../../assets/images/carColor.png").default}></Image>
                                            }
                                            {item.loanName.includes("Konut") &&
                                                <Image title="Konut kredisi kredi.com.tr" alt="Konut kredisi sayfası" style={{ width: "50px" }}
                                                    webp={require("../../assets/images/homecolor.webp").default}
                                                    src={require("../../assets/images/homecolor.png").default}></Image>
                                            }
                                            {item.loanName.includes("Kobi") &&
                                                <Image title="Kobi kredisi kredi.com.tr" alt="Kobi kredisi sayfası" style={{ width: "50px" }}
                                                    webp={require("../../assets/images/corporatecolor.webp").default}
                                                    src={require("../../assets/images/corporatecolor.png").default}></Image>
                                            }
                                            <div className="item-loan-name-bank col-12">
                                                {item.loanName}
                                            </div>

                                        
                                    </li>
                                )

                            }

                        })}
                    </ul>
                </div>
                <div className="container">

                    <div className="row justify-content-center">


                        <div className="col-12 col-lg-5 col-md-5 mb-1">

                            <KrediInput style={{
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

                                onChange={(val) => updateSelectedLoanOption(null, val.replace("₺", "").replace(/\./g, ""), null)}
                            />
                        </div>
                        <div className="col-12 col-lg-5 col-md-5 mb-1">
                            <KrediSelect
                                options={loanTermsDropdonw?.sort((a, b) => a.value - b.value) || []}
                                onChange={(val) => updateSelectedLoanOption(null, null, val.value)}
                                prefix="Vade: "
                            />
                        </div>




                        <div className="justify-content col-0 col-md-5 col-lg-5 mt-0 mt-lg-3 mt-md-3">

                        </div>
                        <div className="justify-content col-12 col-md-5 col-lg-5 mt-3">
                            <button onClick={() => { redirectLoanBank() }} className="default-button justify-content-center" type="submit">Kredi Hesapla</button>


                        </div>
                        <div className="col-12 text-center">
                            {!isValid && <b style={{
                                color: "red",
                                background: "#ffffff94",
                                width: "100%",
                                display: "block",
                                borderRadius: 10,
                                border: "1px solid white"
                            }}>***Bilgileri eksiksiz doldurunuz</b>}

                        </div>
                        <div className="bank-loan-text mb-0 mt-3">  <h4>Bankaya Ait <span style={{ textDecoration: "underline", color: "black" }}>{activeLoanType.rate} </span>Kredi Faiz Oranı İle Hemen Kredinizi Hesaplayıp Başvurun. </h4> </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


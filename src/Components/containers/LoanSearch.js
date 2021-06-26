import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { GetNoneToken, PostNoneToken } from "../../datacrud/datacrud";
export const LoanSearch = (props) => {
    const [loansOption, setLoanOption] = useState([])
    const [terms, setTerms] = useState([])
    const [termsValue, setTermsValue] = useState()

    const [amount, setAmount] = useState(null)
    const [loanType, setLoanType] = useState()
    const [propsLoan, setPropsLoan] = useState([])


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
        var data = {
            loanTypeId: loanType,
            amount: (amount != null ? amount.replace("₺", "").replace(".", "") : ""),
            term: termsValue
        }
        if (data.loanTypeId) {
            var urlName = propsLoan.find(x => x.id == data.loanTypeId)?.urlName
            debugger
            let prm = new URLSearchParams()
            prm.set("amount", data.amount)
            prm.set("term", data.term)
            window.location.replace("/" + urlName + "-arama-hesaplama?" + prm)
        }
    }


    const start = async () => {


        let ln = [];
        props.Loans?.map((item, key) => {

            ln.push({ label: item.loanName, value: item.id })
        })
        setPropsLoan(props.Loans)
        setLoanOption(ln)

    }
    return (

        <div >
            <div className="" style={props.backgroundStyle||{borderRadius:5}}>
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

                                        <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
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
                                        &nbsp;
                                    </div>
                                    <div className="col-6 " style={{ justifyontent: "flex-end", marginTop: 12 }}>
                                        <button onClick={(x) => { calculate() }} className="default-button" type="submit">ARA</button>
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
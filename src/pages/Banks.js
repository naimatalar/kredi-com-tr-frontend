import React, { useEffect, useState } from "react"
import bankdemodata from "../bankdemodata"
import { Helmet } from "react-helmet";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
export const Banks = (props) => {
    const [bank, setBank] = useState(bankdemodata[0])
    const [activeLoanType, setActiveLoanType] = useState({ id: null })
    const [selectedLoanOptions, setSelectedLoanOptions] = useState({ rate: null, amount: null, term: null })
  
 

    useEffect(() => {
        let bankData = bankdemodata.find(x => { return x.id == props.BankId })
        setBank(bankData)
        setActiveLoanType(bankData.loans[0])
        updateSelectedLoanOption(bankData.loans[0].rate, null, null)
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
            <div className="master-content">

                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 bank-loan-content">
                        <div className="bank-loan-text">  <h4>Bankaya Ait <span style={{textDecoration:"underline",color:"white"}}>{selectedLoanOptions.rate} </span>Kredi Faiz Oranı İle Hemen Kredinizi Hesaplayıp Başvurun </h4> </div>

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

                </div>
            </div>
        </div>


    )
}

export default Banks
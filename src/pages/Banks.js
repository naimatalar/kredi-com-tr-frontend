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
import HowMuchLoan from "../Components/containers/HowMuchLoan";
import EmailPost from "../Components/containers/EmailPost";
import { BankContainer } from "../Components/containers/BankContainer";
import { LoanBank } from "./LoanBank";
import { apiurl, GetNoneToken } from "../datacrud/datacrud";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';
import dispositCalculator from "../Components/dispositCalculator"
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import { DispositContainer } from "../Components/containers/DispositContainer";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { creditCartRedirect } from "../Components/RedirectComponent";
export const Banks = (props) => {
    const [bank, setBank] = useState({})
    const [activeLoanType, setActiveLoanType] = useState({ id: null })
    const [selectedLoanOptions, setSelectedLoanOptions] = useState({ rate: null, amount: null, term: null })
    const [creditCarts, setCreditCarts] = useState([])
    const [disposits, setDiposits] = useState([])
    const [activeTab, setActiveTab] = useState(0);
    const [selectedDisposit, setSelectedDisposit] = useState()
    const [calculateDisposit, setCalculateDisposit] = useState({ rate: 0, amount: 0, term: 0 })
    const [calculateDispositResult, setCalculateDispositResult] = useState({ netAmount: "", totalAmount: "", term: "", id: "", rate: "" })
    const [currencyIcon, setCurrencyIcon] = useState("")
    const [bankContainerCount, setBankContainerCount] = useState()
    const [loanTermsDropdonw, setLoanTermsDropdown] = useState([])

    let isActive = ""

    useEffect(() => {
        start()
    }, [props])
    const start = async () => {

        let bankData = await GetNoneToken("Banks/GetAllBankSiteById/" + props.BankId).then(x => { return x.data }).catch(x => { return false })

        setBank(bankData)

        setCreditCarts(bankData.creditCart)
        setDiposits(bankData.disposits)

        setActiveLoanType(bankData.loans[0] || [])
        let containercnt = 0;
        if (bankData.loans.length > 0) {
            containercnt++
            updateSelectedLoanOption(bankData.loans[0]?.rate, null, null)




        } else {
            updateSelectedLoanOption(0, null, null)
        }

        if (bankData.disposits.length > 0) {
            containercnt++
            setSelectedDisposit(bankData.disposits[0])
            if (bankData.disposits[0].dispositCurrency == 0) {
                setCurrencyIcon("₺")
            } else if (bankData.disposits[0].dispositCurrency == 1) {
                setCurrencyIcon("$")
            } else if (bankData.disposits[0].dispositCurrency == 2) {
                setCurrencyIcon("€")
            }
        }
        if (bankData.creditCart.length > 0) {
            containercnt++
        }
        setBankContainerCount(containercnt)


        // changeLoanTypeTab()
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
            setCalculateDispositResult({ netAmount: calResut.netResult.toFixed(2).replace(".", ","), totalAmount: (calResut.netResult + dt.amount).toFixed(2).replace(".", ","), term: dt.term, id: findResult.id, rate: dt.rate })

        } else {
            setCalculateDispositResult({ netAmount: "", totalAmount: "", term: "", id: "", rate: "" })
            isActive = ""
        }

    }
    const selectLoanType = (loanId) => {

        let existControl = []
        let selectedLoant = bank.loans.filter(x => { return x.loanUrlName == loanId })



        updateSelectedLoanOption(selectedLoant[0].rate, null, null)
        setActiveLoanType(selectedLoant[0])


    }
    const updateSelectedLoanOption = (rate = null, amount = null, term = null) => {

        var ss = bank?.loans?.find(x => {

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

        let prm = new URLSearchParams(props.location.search)
        prm.set("amount", selectedLoanOptions.amount)
        prm.set("term", selectedLoanOptions.term)
        prm.set("loanId", activeLoanType.id)
        props.history.push("/bankalar/" + bank.bankUrlName + "-kredi-hesaplama-ve-basvuru?" + prm);
        // window.location.replace("/bankalar/" + bank.bankUrlName + "-kredi-hesaplama-ve-basvuru?" + prm)
    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    var loanUrlNameControl = []
    return (
        <div className="container-fluid">
            <Helmet>

                <meta property="og:type" content="article" />
                <meta property="og:title" content={(bank.bankName ?? "") + ": Kredi Ve Kredi Kartı Fırsatları | kerdi.com.tr"} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content={(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilir, vadeli mevduat hesabı oluşturabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />
                <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu, vadeli mevduat, vadeli mevduat hesabı" />
                <meta name="twitter:title" content={(bank.bankName ?? "") + ": Kredi, Kredi Kartı ve Mevduat Fırsatları | kerdi.com.tr"} />
                <meta name="twitter:description" content={(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilir, vadeli mevduat hesabı oluşturabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />
                <meta name="description" content={(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />
                <meta name="robots" content="index,follow" />
                <title>{(bank.bankName ?? "") + ": Kredi, Kredi Kartı ve Mevduat Fırsatları   | kerdi.com.tr"} </title>

            </Helmet>
            <div className="row bank-label">
                <div className="col-12">
                    <div className="row justify-content-center">

                        <div className="col-md-3 col-lg-3 col-sm-6 col-8 m-2">{bank.logoUrl == undefined ? "" : <img src={apiurl + bank.logoUrl} style={{ width: "100%" }} alt={bank.bankName + " Bütün ürünleri krediler kredi kartı mevduat"} title={bank.bankName + " kredi, kredi kartı ve mevduat ürünleri"}></img>}</div>
                    </div>
                </div>
            </div>
            <div className="master-content ">

                <div className="row">
                    {bank?.loans?.length > 0 &&

                        <div className="col-12 col-lg-6 col-md-6 bank-loan-content mt-5 bankbackground">
                            <div className="bank-loan-text">  <h4>Bankaya Ait <span style={{ textDecoration: "underline", color: "black" }}>{selectedLoanOptions.rate} </span>Kredi Faiz Oranı İle Hemen Kredinizi Hesaplayıp Başvurun </h4> </div>

                            <div className="bank-loan-lightview">
                                <div className="col-12 bank-loan-tab-link">
                                    <ul className="loan-list-content">

                                        {bank?.loans?.map((item, key) => {
                                            let activeClass = ""

                                            if (item.loanUrlName == activeLoanType.loanUrlName) {
                                                activeClass = "active-loan-tab"
                                            }
                                            if (loanUrlNameControl.includes(item.loanUrlName)) {


                                            } else {
                                                loanUrlNameControl.push(item.loanUrlName)

                                                return (
                                                    <li key={key} onClick={() => { selectLoanType(item.loanUrlName) }} className={"loan-tabs " + activeClass} key={key}>
                                                        {item.loanName}

                                                    </li>
                                                )

                                            }

                                        })}
                                    </ul>
                                </div>
                                <div className="container">

                                    <div className="row justify-content-center">


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
                                        <div className="col-5 ">
                                            <Dropdown
                                                options={loanTermsDropdonw?.sort((a, b) => a.value - b.value) || []}
                                                onChange={(val) => updateSelectedLoanOption(null, null, val.value)}
                                                placeholder="Vade"
                                                arrowClassName="dropdownArrow"
                                            />
                                        </div>




                                        <div className="justify-content col-5 mt-3">

                                        </div>
                                        <div className="justify-content col-5 mt-3">
                                            <button onClick={() => { redirectLoanBank() }} className="default-button justify-content-center" type="submit">Hesapla</button>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {bankContainerCount == 1 &&
                        <div className="col-12 col-lg-6 col-md-6 row mt-5 m-0">
                            <PopulerLoans />

                        </div>
                    }
                    {creditCarts.length > 0 &&

                        <div className="col-12 col-lg-6 col-md-6 row mt-5 ">
                            <div className="col-12">
                                <h4 style={{ color: "#464646", borderBottom: "1px solid #464646" }} className="text-center"> Bankaya Ait <b title={bank.bankName + "kredi kartı"}>{creditCarts.length} Adet Kredi Kartı</b> Bulunuyor</h4>

                            </div>
                            <div className="col-12 cnts">
                                <div className="slide-container container">

                                    <Slide indicators={true} pauseOnHover={true} duration={2500} transitionDuration={800}>
                                        {

                                            creditCarts.map((each, index) => {
                                                return (<div key={index}  >
                                                    <div className="each-fade" style={{ padding: 22 }} >
                                                        <div className="row">


                                                            <div className="col-6">
                                                                <img alt={bank.bankName + " bankaya ait " + each.name + " kredi kartı"} title={bank.bankName + "  " + each.name + " kredi kartı özellikleri"} src={apiurl + each.logoUrl} style={{ width: "100%" }}></img>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="col-12">
                                                                    <h3 style={{ color: "black", fontWeight: "bold" }}>{each.name}</h3>

                                                                    <b style={{ color: "#535656" }}> Yıllık Ücret</b>


                                                                    ₺{each.yearlyUsingAmount}
                                                                </div>
                                                                <div className="container mt-3">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <button className="default-button" style={{
                                                                                padding: 3,
                                                                                fontSize: 13,
                                                                            }}
                                                                                onClick={() => creditCartRedirect(null,
                                                                                    each.redirectUrl,
                                                                                    bank.id,
                                                                                    each.id,
                                                                                    {
                                                                                        bankName: bank.bankName,
                                                                                        CreditCartName: each.name
                                                                                    })}

                                                                                type="submit">BAŞVUR</button>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <a className="default-button" style={{
                                                                                padding: 3,
                                                                                fontSize: 13,
                                                                                background: "#585858",
                                                                                width: "100%",
                                                                                display: "block",
                                                                                textAlign: "center",
                                                                                color: "white",
                                                                            }} href={"/" + bank.bankUrlName + "/" + each.urlName}>DETAY</a>
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
                                                                        each.creditCartCampaigns?.map((jitem, jkey) => {
                                                                            return (
                                                                                <div key={jkey}>
                                                                                    <img style={{
                                                                                        width: 30,
                                                                                        marginRight: 3,
                                                                                        float: "left"

                                                                                    }} src={require("../assets/images/campaigns.png").default}
                                                                                        alt={bank.bankName + " bankaya ait " + each.name + " kampanya :" + jitem.title}
                                                                                        title={jitem.title + " : " + bank.bankName + "  " + each.name + " kredi kartının kampanyaları "}
                                                                                    ></img>
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
                                                                    }}> <i>Tüm Kampayaları Gör (+{each.creditCartCampaigns?.length})</i>  </b>

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
                    }
                    {bankContainerCount == 3 &&
                        <h4 className="home-title mt-5" > Bütün verilerimizi analiz edip  <span style={{ fontWeight: "bold" }}>bankata ait vadeli mevduat hesaplarını </span> ve  daha nice vadeli mevduat hesaplarını sizlerle buluşturduk.   </h4>

                    }
                    {disposits.length > 0 &&
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
                                                            decimalSeparator=","
                                                            thousandSeparator="."
                                                            precision="0"
                                                            prefix={currencyIcon}
                                                            value={calculateDisposit.amount}
                                                            onChange={(val) => CalculateDispositFunc(parseInt(val.replace(currencyIcon, "").replace(".", "")), calculateDisposit.term)}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <i>Vade Giriniz (Gün)</i>
                                                        <input type="text" style={{ width: "100%" }} value={calculateDisposit.term} onChange={(element) => CalculateDispositFunc(calculateDisposit.amount, parseInt(element.target.value) || "")}></input>

                                                    </div>


                                                </div>

                                                <div className="col-12 row m-0 justify-content-center">

                                                    <div className="col-12 row ">
                                                        <div className="div-table disposit-table " >
                                                            <div className="div-table-row div-table-header mb-1">

                                                                <div className="div-table-col" style={{ width: "45%" }}>Tutar Aralığı</div>
                                                                <div className="div-table-col" style={{ width: "20%" }}>Vade Aralığı</div>
                                                                <div className="div-table-col" style={{ width: "18%" }}>Faiz</div>
                                                            </div>



                                                            {
                                                                selectedDisposit?.dispositRates?.map((item, key) => {
                                                                    isActive = ""
                                                                    if (item.id == calculateDispositResult.id) {
                                                                        isActive = "active-col"
                                                                    } else {
                                                                        isActive = ""
                                                                    }
                                                                    return (
                                                                        <div className={"div-table-row " + isActive} key={key}>
                                                                            <div className="div-table-col" style={{ width: "45%" }}>
                                                                                <div className="row m-0">
                                                                                    <CurrencyInput style={{
                                                                                        padding: 0,
                                                                                        border: "none",
                                                                                        display: "inline",
                                                                                        float: "left",
                                                                                        background: "none",

                                                                                        fontWeight: "bold"
                                                                                    }}
                                                                                        className="col-5"
                                                                                        decimalSeparator=","
                                                                                        thousandSeparator="."
                                                                                        precision="0"
                                                                                        disabled
                                                                                        prefix={currencyIcon}
                                                                                        value={item.minAmount} />
                                                                                    <input className="col-1 p-0 m-0 " disabled value="-" style={{ border: "none", background: "none" }}></input>
                                                                                    <CurrencyInput style={{
                                                                                        padding: 0,
                                                                                        border: "none",
                                                                                        display: "inline",
                                                                                        float: "left",
                                                                                        background: "none",

                                                                                        fontWeight: "bold",
                                                                                        textAlign: "right"

                                                                                    }}
                                                                                        className="col-5"
                                                                                        decimalSeparator=","
                                                                                        thousandSeparator="."
                                                                                        precision="0"
                                                                                        disabled
                                                                                        prefix={currencyIcon}
                                                                                        value={item.maxAmount} />
                                                                                </div>


                                                                            </div>
                                                                            <div className="div-table-col" style={{ width: "20%" }}> {item.minTerm} - {item.maxTerm}</div>
                                                                            <div className="div-table-col" style={{ width: "18%" }}> {item.rate}</div>

                                                                        </div>

                                                                    )

                                                                })
                                                            }

                                                        </div>
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
                                                                <a href="#" style={{ color: "white" }} className="default-button blue-button">Hemen Başvur</a>

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
                    }
                    {bankContainerCount == 3 &&

                        <div className="col-12 col-lg-6 col-md-6 row mt-5 ml-0 mr-0 bank-disposit-component justify-content-center">
                            <h4 className="pt-2 pb-4">En çok Tercih Edilen Mevduat Hesapları</h4>
                            <PerfectScrollbar className="bank-disposit-component-scroll">
                                <DispositContainer Big={true}></DispositContainer>

                            </PerfectScrollbar>
                        </div>

                    }
                    <div className="row mt-5">
                        <div className="col-12">
                            <h4 className="home-title" > Diğer bütün bankaların <span style={{ fontWeight: "bold" }}>en çok kullanılan kredileri ve faiz oranları </span>`nı derleyip topladık. Size ise sadece sonuçlara göz atmak kalıyor.  </h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-lg-6 col-md-6" >
                            <LoanRate />
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 ">
                            <FastLoan />
                        </div>
                    </div>
                    <div className="row mt-5">


                        <div className="row">

                            <div className="col-12 col-lg-6 col-md-6 mt-5" >
                                <HowMuchLoan></HowMuchLoan>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mt-5" >
                                <EmailPost></EmailPost>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-7" style={{ justifyContent: "center", marginTop: 100 }}>
                        <BankContainer Banks={props.Banks}></BankContainer>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Banks
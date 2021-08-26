import React, { useEffect, useState } from "react"
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { GetNoneToken, PostNoneToken } from "../datacrud/datacrud";
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import { Helmet } from "react-helmet";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';

 
export const DispositSearchPage = (props) => {
    const [activeTab, setActiveTab] = useState(1);
    const [currencyIcon, setCurrencyIcon] = useState("₺")
    const [currency, setCurrency] = useState(0)

    const [termValue, setTermValue] = useState("")
    const [amount, setAmount] = useState()

    useEffect(() => {


    }, [])
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const start = async () => {

    }
    const redirectPage = async () => {

        // let bankData = await GetNoneToken("Disposits/Search?amount=" + amount + "&term=" + termValue + "&&c="+currency).then(x => { return x.data }).catch(x => { return false })
        let prm = new URLSearchParams(props.location.search)
        prm.set("amount", amount)
        prm.set("term", termValue)

        prm.set("c", currency)
        window.location.replace("/vadeli-mevduati-hesaplama-ve-basvuru?" + prm)
        // window.location.replace()
    }

    return (
        <div className="master-content">

            <div className="container-fluid">

                <div className="loan-search-container-label pt-5" style={{ background: "rgb(136 102 150)" }}>
                    <Nav tabs className="disposit-page-tab">

                        <NavItem >
                            <NavLink
                                className={classnames({ active: activeTab === 1 })}
                                onClick={() => { toggle(1); setCurrencyIcon("₺"); setCurrency(0) }}
                            >
                                <b style={{ color: "#626262" }}>₺ Türk Lirası</b>
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink
                                className={classnames({ active: activeTab === 2 })}
                                onClick={() => { toggle(2); setCurrencyIcon("$"); setCurrency(1) }}
                            >
                                <b style={{ color: "#626262" }}>$ Dolar Lirası</b>
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink
                                className={classnames({ active: activeTab === 3 })}
                                onClick={() => { toggle(3); setCurrencyIcon("€"); setCurrency(2) }}
                            >
                                <b style={{ color: "#626262" }}>€ Euro</b>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* <h3 className="loan-page-title">{loan.loanName.toLocaleUpperCase()} ARA</h3> */}
                    <div className="row loan-search-content-label">
                        <div className="col-12 col-md-7 col-lg-7 row d-flex d-lg-none d-md-none">


                        </div>
                        <div className="col-12 col-md-5 col-lg-5">


                            <div className="col-12">
                                <div className="col-12 mb-4">
                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x.replace(/\./g, "").replace(",", "").replace(currencyIcon, "")) }}
                                        value={amount}

                                        prefix={currencyIcon}
                                    />

                                </div>
                                <div className="col-12 mb-4">
                                    <input
                                        style={{ width: "100%", padding: 5 }}
                                        value={termValue}
                                        onChange={(d) => { setTermValue(d.target.value) }}
                                        placeholder="Vade"

                                    />
                                </div>
                                <div className="col-12 " style={{ justifyontent: "flex-end", marginTop: 12 }}>
                                    <button className="default-button" onClick={() => { redirectPage() }} type="submit">ARA</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-7 row d-none d-lg-flex d-md-flex">

                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Vadeli Mevduat Hesaplama Ve Başvurma" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Vadeli Mevduat ile kazancınızı yükselteceğiniz banka seçenekleri sorgulama " />
                                <meta name="keyword" content="Vadeli Mevduat ile kazancınızı yükselteceğiniz banka seçenekleri sorgulama " />
                                <meta name="twitter:title" content="Vadeli Mevduat Hesaplama Ve Başvurma" />
                                <meta name="twitter:description" content="Vadeli Mevduat ile kazancınızı yükselteceğiniz banka seçenekleri sorgulama." />
                                <meta name="description" content=" Vadeli Mevduat ile kazancınızı yükselteceğiniz banka seçenekleri sorgulama" />
                                <meta name="robots" content="index,follow" />
                                <title>{"Vadeli Mevduat Hesaplama Ve Başvurma | kredi.com.tr"} </title>
                            </Helmet>
                            <div className="col-12 col-md-5 col-lg-5 row  align-content-center justify-content-center">
                                <div className="justify-content-center col-12 row">
                                    <img alt="Vadeli mevduat hesapları" title="Vadeli Mevduat Hesaplama Ve Başvurma" style={{ width: "30%" }} src={require("../assets/images/moneycolor.png").default}></img>
                                </div>
                                <div className="justify-content-center col-12 row">
                                    <h3><b>Mavduat</b></h3>

                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-7 row justify-content-center d-none d-lg-block d-md-block">
                                <h2>
                                    <b style={{ color: "rgb(61 61 61)" }}>Yatırın Bekleyin!</b>
                                </h2>
                                <p style={{ color: "rgb(61 61 61)" }}>  Vadeli mevduat ile yatırım yaptığınız bankalar paranıza değer katmaya devam ediyor</p>
                                <p style={{ color: "rgb(61 61 61)" }}> Bizde bankaların en kazançlı mevduat hesaplarını sizin için sorguluyoruz. </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-12 mt-5">
                    <p className="home-title" > Bankaya gitmeye gerek kalmadan
                        <span style={{ fontWeight: "bold" }}> vadeli mevduatlar </span>
                        ile ilgili bütün bilgilere sahip olabilir, hesaplamaları yapabilir ve başvurabilisiniz.
                    </p>

                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mt-5">
                        <PopulerLoans></PopulerLoans>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-5 row justify-content-center  align-content-center">
                        <div className="col-12 justify-content-center row">
                            <h3> <b>Ne Kadar Kredi Çekmeliyim ?</b></h3>
                            <p style={{ color: "black" }}>Artık hesap kitap işlerini sizin yerinize biz yapıyoruz. <br></br> Bize gereken birkaç gelir ve gider bilginiz. Deneyimli finans ve yazılım uzmanlarımızla geliştirdiğimiz hesap araçlarıyla, sizi hesap makinesinden kurtarıyoruz </p>
                            <b className="mb-3" style={{ color: "black" }}>Aylık Gelirinizi Girerek Hesaplamaya Başlayın </b>
                            <div style={{ clear: "both" }}></div>
                            <div className="col-8">
                                <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz." className="col-7"
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    precision="0"
                                    // onChange={(x) => { setAmount(x) }}
                                    // value={amount}

                                    prefix={currencyIcon}
                                />
                                <button className="default-button mt-3" type="submit">HESAPLAMAYA BAŞLA</button>

                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}




export default DispositSearchPage;
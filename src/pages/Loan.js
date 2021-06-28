import React, { useEffect, useState } from "react"
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { GetNoneToken, PostNoneToken } from "../datacrud/datacrud";
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import { Helmet } from "react-helmet";

export const Loan = (props) => {
    const [loan, setLoan] = useState(props.Loan)
    const [amount, setAmount] = useState()
    const [terms, setTerms] = useState([])
    const [termsValue, setTermsValue] = useState()


    useEffect(() => {

        start()
    }, [props.Loan])

    const start = async () => {
        var terms = await GetNoneToken("InterestRates/GetLoanTerms/" + loan.id).then(x => { return x.data }).catch(x => { return false })

        let termsList = [];
        terms?.map((item, key) => {
            termsList.push({ label: item, value: item })
        })
        setTerms(terms)
    }

    const calculate = async () => {
        var data = {
            loanTypeId: loan.id,
            amount: (amount != null ? amount.replace("₺", "").replace(".", "") : ""),
            term: termsValue
        }


        let prm = new URLSearchParams()
        prm.set("amount", data.amount)
        prm.set("term", data.term)
        window.location.replace("/" + loan.urlName + "-arama-hesaplama?" + prm)

    }
    return (
        <div className="master-content">

            <div className="container-fluid">
                <div className="loan-search-container-label pt-5">
                    {/* <h3 className="loan-page-title">{loan.loanName.toLocaleUpperCase()} ARA</h3> */}
                    <div className="row loan-search-content-label">
                        <div className="col-12 col-md-7 col-lg-7 row d-flex d-lg-none d-md-none">
                            {getContent(loan.urlName)}

                        </div>
                        <div className="col-12 col-md-5 col-lg-5">


                            <div className="col-12">
                                <div className="col-12 mb-4">
                                    <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        onChange={(x) => { setAmount(x) }}
                                        value={amount}

                                        prefix="₺"
                                    />

                                </div>
                                <div className="col-12 mb-4">
                                    <Dropdown
                                        options={terms}
                                        onChange={(d) => { setTermsValue(d.value) }}
                                        placeholder="Vade"
                                        arrowClassName="dropdownArrow"

                                    />
                                </div>
                                <div className="col-12 " style={{ justifyontent: "flex-end", marginTop: 12 }}>
                                    <button onClick={(x) => { calculate() }} className="default-button" type="submit">ARA</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-7 row d-none d-lg-flex d-md-flex">
                            {getContent(loan.urlName)}

                        </div>
                    </div>

                </div>

                <div className="col-12 mt-5">
                    <p className="home-title" >
                        <span style={{ fontWeight: "bold" }}>Kredi Fırsatlarını </span>
                        parmaklarınız ucuna getiriyoruz. Birbirinden farklı ve çeşitli
                        <span style={{ fontWeight: "bold" }}>kredi türleri ve kredi kartlarını
                        </span> sizler için seçip sorguluyoruz </p>

                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mt-5">
                        <PopulerLoans></PopulerLoans>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-5 row justify-content-center  align-content-center">
                        <div className="col-12 justify-content-center row">
                            <h3> <b>Ne Kadar Kredi Çekmeliyim ?</b></h3>
                            <p style={{ color: "black" }}>Artık hesap kitap işlerini sizin yerinize biz yapıyoruz. <br></br> Bize gereken birkaç kelir ve gider bilginiz. Deneyimli finans ve yazılım uzmanlarımızla geliştirdiğimiz hesap araçlarıyla, sizi hesap makinesinden kurtarıyoruz </p>
                            <b className="mb-3" style={{ color: "black" }}>Aylık gelirinizi girerek hesaplamaya başlayın </b>
                            <div style={{ clear: "both" }}></div>
                            <div className="col-8">
                                <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    precision="0"
                                    // onChange={(x) => { setAmount(x) }}
                                    value={amount}

                                    prefix="₺"
                                />
                                <button onClick={(x) => { calculate() }} className="default-button mt-3" type="submit">HESAPLAMAYA BAŞLA</button>

                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

const getContent = (data) => {
    if (data.includes("kobi")) {

        return (
            <>
                <Helmet>
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Kobi Kredisi Hesaplama Ve Başvurma" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:description" content="Anlaşmalı olduğumuz bankaların içinden onlarca kobi kredisi seçeneğini sizin için hesaplayıp getiriyoruz" />
                    <meta name="keyword" content="kobi kredisi, kobi kredi başvurusu, kobi kredisi hesablama " />
                    <meta name="twitter:title" content="Kobi Kredisi Hesaplama Ve Başvurma" />
                    <meta name="twitter:description" content="Anlaşmalı olduğumuz bankaların içinden onlarca kobi kredisi seçeneğini sizin için hesaplayıp getiriyoruz" />
                    <meta name="description" content="Anlaşmalı olduğumuz bankaların içinden onlarca kobi kredisi seçeneğini sizin için hesaplayıp getiriyoruz" />
                    <meta name="robots" content="index,follow" />
                    <title>{"Kobi Kredisi Hesaplama Ve Başvurma | kerdi.com.tr"} </title>
                </Helmet>

                <div className="col-12 col-md-5 col-lg-5 row  align-content-center justify-content-center">
                    <div className="justify-content-center col-12 row">
                        <img title="kobi kredisi arama ve başvuru kredi.com.tr" alt={"kobi kredisi başvuru"}  style={{ width: "30%" }} src={require("../assets/images/corporatecolor.png").default}></img>
                    </div>
                    <div className="justify-content-center col-12 row">
                        <h2><b>Kobi Kredisi</b></h2>

                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7 row justify-content-center d-none d-lg-block d-md-block">
                    <h2>
                        <b style={{ color: "rgb(61 61 61)" }}>Ara, Hespla, Başvur</b>
                    </h2>
                    <p style={{ color: "rgb(61 61 61)" }}>  Anlaşmalı olduğumuz bankaların içinden onlarca kobi kredisi seçeneğini sizin için hesaplayıp getirelim. </p>
                    <p style={{ color: "rgb(61 61 61)" }}>  Önceliğimiz düşük faiz oranı yüksek kredi alma şansı sağlamak </p>
                </div>
            </>
        )
    } else if (data.includes("tasit")) {
        return (<>

            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Araç Kredisi Hesaplama Ve Başvurma" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="Hayalinizdeki aracı almak için krediye ihtiyaç duyuyorsanız doğru yerdenizniz. Sizin için birsürü fırsat bulabiliriz." />
                <meta name="keyword" content="araç kredisi, araç kredi başvurusu, araç kredisi hesablama " />
                <meta name="twitter:title" content="Kobi Kredisi Hesaplama Ve Başvurma" />
                <meta name="twitter:description" content="Hayalinizdeki aracı almak için krediye ihtiyaç duyuyorsanız doğru yerdenizniz. Sizin için birsürü fırsat bulabiliriz." />
                <meta name="description" content="Hayalinizdeki aracı almak için krediye ihtiyaç duyuyorsanız doğru yerdenizniz. Sizin için birsürü fırsat bulabiliriz." />
                <meta name="robots" content="index,follow" />
                <title>{"Kobi Kredisi Hesaplama Ve Başvurma | kerdi.com.tr"} </title>
            </Helmet>
            <div className="col-12 col-md-5 col-lg-5 row  align-content-center justify-content-center">
                <div className="justify-content-center col-12 row">
                    <img title="araç kredisi başcuruları kredi.com.tr" alt={"araç kredisi başvuru ve arama"}  style={{ width: "30%" }} src={require("../assets/images/carColor.png").default}></img>
                </div>
                <div className="justify-content-center col-12 row">
                    <h3><b>Araç Kredisi.</b></h3>

                </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7 row justify-content-center d-none d-lg-block d-md-block">
                <h2>
                    <b style={{ color: "rgb(61 61 61)" }}>Araç Kredini Hesapla</b>
                </h2>
                <p style={{ color: "rgb(61 61 61)" }}>  Hayalinizdeki aracı almak için krediye ihtiyaç duyuyorsanız doğru yerdenizniz. Sizin için birsürü fırsat bulabiliriz </p>
                <p style={{ color: "rgb(61 61 61)" }}>  Aracınızı şimdiden aracınızı seçin. Krediyi bulma işini ise bizde </p>
            </div>
        </>)
    } else if (data.includes("konut")) {
        return (<>

            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Konut Kredisi Hesaplama Ve Başvurma" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="Hayalini kurduğunuz yuvaya kavuşurken çorbada bizimde tuzumuz olsun. Kredinizi bulmanıza yardım edelim." />
                <meta name="keyword" content="konut kredisi, konut kredi başvurusu, konut kredisi hesablama " />
                <meta name="twitter:title" content="Konut Kredisi Hesaplama Ve Başvurma" />
                <meta name="twitter:description" content="Hayalini kurduğunuz yuvaya kavuşurken çorbada bizimde tuzumuz olsun. Kredinizi bulmanıza yardım edelim." />
                <meta name="description" content="Hayalini kurduğunuz yuvaya kavuşurken çorbada bizimde tuzumuz olsun. Kredinizi bulmanıza yardım edelim." />
                <meta name="robots" content="index,follow" />
                <title>{"Konut Kredisi Hesaplama Ve Başvurma | kerdi.com.tr"} </title>
            </Helmet>
            <div className="col-12 col-md-5 col-lg-5 row  align-content-center justify-content-center">
                <div className="justify-content-center col-12 row">
                    <img  title="konut kredisi aramaları, başvurularu kredi.com.tr" alt={"konut kredi arama"} style={{ width: "30%" }} src={require("../assets/images/homecolor.png").default}></img>
                </div>
                <div className="justify-content-center col-12 row">
                    <h3><b>Konut Kredisi</b></h3>

                </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7 row justify-content-center d-none d-lg-block d-md-block">
                <h2>
                    <b style={{ color: "rgb(61 61 61)" }}>Konut Krediniz Aratın</b>
                </h2>
                <p style={{ color: "rgb(61 61 61)" }}>  Hayalini kurduğunuz yuvaya kavuşurken çorbada bizimde tuzumuz olsun. Kredinizi bulmanıza yardım edelim. </p>
                <p style={{ color: "rgb(61 61 61)" }}>  Aracınızı şimdiden aracınızı seçin. Krediyi bulma işini ise bizde </p>
            </div>
        </>)
    } else if (data.includes("ihtiyac")) {
        return (<>
            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="İhtiyaç Kredisi Hesaplama Ve Başvurma" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="İhtiyaç kredisi hayatın her anında lazım olan bir bir kredi türüdür. Bu krediyi bulmak ise kredi.com.tr nin uzmanlık alanıdır." />
                <meta name="keyword" content="ihtiyaç kredisi, ihtiyaç kredi başvurusu, ihtiyaç kredisi hesablama " />
                <meta name="twitter:title" content="İhtiyaç Kredisi Hesaplama Ve Başvurma" />
                <meta name="twitter:description" content="İhtiyaç kredisi hayatın her anında lazım olan bir bir kredi türüdür. Bu krediyi bulmak ise kredi.com.tr nin uzmanlık alanıdır." />
                <meta name="description" content="İhtiyaç kredisi hayatın her anında lazım olan bir bir kredi türüdür. Bu krediyi bulmak ise kredi.com.tr nin uzmanlık alanıdır." />
                <meta name="robots" content="index,follow" />
                <title>{"İhtiyaç Kredisi Hesaplama Ve Başvurma | kerdi.com.tr"} </title>
            </Helmet>
            <div className="col-12 col-md-5 col-lg-5 row  align-content-center justify-content-center">
                <div className="justify-content-center col-12 row">
                    <img title="ihtiyaç kredisi arama,sorgulama ve bulma kredi.com.tr" alt={"ihtiyaç kredisi sorgulama"}  style={{ width: "30%" }} src={require("../assets/images/moneycolor.png").default}></img>
                </div>
                <div className="justify-content-center col-12 row">
                    <h3><b>İhtiyaç Kredisi</b></h3>

                </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7 row justify-content-center d-none d-lg-block d-md-block">
                <h2>
                    <b style={{ color: "rgb(61 61 61)" }}>İhtiyacınızı Karşılayın</b>
                </h2>
                <p style={{ color: "rgb(61 61 61)" }}>  İhtiyaç kredisi hayatın her anında lazım olan bir bir kredi türüdür. Bu krediyi bulmak ise kredi.com.tr nin uzmanlık alanıdır. </p>
                <p style={{ color: "rgb(61 61 61)" }}> Ne zaman ihtiyaç duyarsanız, htiyaç kredinizi bulmaya hazırız </p>
            </div>
        </>)
    }
}

export default Loan;
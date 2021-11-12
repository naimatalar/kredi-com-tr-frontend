import React, { useEffect, useState } from "react"
import { apiurl, GetNoneToken, PostNoneToken } from "../datacrud/datacrud"
import { LoanRate } from "../Components/containers/LoanRate";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import Seo from "../Components/Seo";
import Rimage from "../Components/Rimage";

export const OnlyCalculate = (props) => {
    const [data, setData] = useState([])
    const [noData, setNoData] = useState(false)

    const [loansOption, setLoanOption] = useState([])
    const [terms, setTerms] = useState([])
    const [termsValue, setTermsValue] = useState()
    const [staticTerm, setStaticTerm] = useState()
    const [allLoans, setAllLoans] = useState([])
    const [amount, setAmount] = useState(null)
    const [loanType, setLoanType] = useState()
    const [loanName, setLoanName] = useState("")
    const [pathName, setPathName] = useState("")
    const [creditCart, setCreditCart] = useState([]);

    const [pDAta, setPdata] = useState({})
    const [titleList, setTitleList] = useState([])
    var HtmlToReactParser = require('html-to-react').Parser;

    useEffect(() => {
        start()
    }, [])

    const start = async () => {
        let lns = [];
        var Loans = await GetNoneToken("LoanTypes/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        var tl = await GetNoneToken("OnlyCalculates/getTen/10").then(x => { return x.data }).catch(x => { return false })
        setTitleList(tl)
        for (const item of Loans) {
            lns.push({ label: item.loanName, value: item.id })
        }
        let creditCart = await GetNoneToken("CreditCarts/GetOnlyFive").then(x => { return x.data }).catch(x => { return false })

        setCreditCart(creditCart)
        setLoanOption(lns)
       
        let path = window.location.pathname.split("/")
        let pathData = path[2]
        setPathName(pathData)
        
        let ccData = await GetNoneToken("OnlyCalculates/GetAllWebSiteByUrlName/" + pathData).then(x => { return x.data }).catch(x => { return false })
        setPdata(ccData)
        setAllLoans(Loans)


    }

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
            amount: (amount != null ? amount.replace("₺", "").replace(/\./g, "") : ""),
            term: termsValue
        }

        if (data.loanTypeId) {
            var urlName = allLoans.find(x => x.id == data.loanTypeId)?.urlName

            // let prm = new URLSearchParams()
            // prm.set("amount", data.amount)
            // prm.set("term", data.term)
            // window.location.replace("/" + urlName + "-arama-hesaplama?" + prm)
            window.history.pushState({}, "", "/kredi-hesaplama/" + data.amount + "-tl-" + data.term + "-ay-vade-" + urlName)
            window.history.go()
        }
    }



    return (<div className="container">
        <Seo keyword={`kredi hesaplama,${loanName},kredi başvuru,${loanName} başvuru,${loanName} hesaplama`} title={pDAta?.title+""} description={pDAta.metaDescription} />
        <div className="row mt-3">

            <div className="col-12  ">

                <div className="col-12 mb-3">
                    <div className="row calculate-pcnt" >
                        <div className="col-12 mb-4 text-center">
                            <b style={{
                                fontSize: 21,
                                color: "#5d5d5d",
                                textShadow: "white 1px 1px 1px"
                            }}>Tutar, Vade Ve Kredi Türünü Seçerek Size En Uygun Krediyi Bulun </b></div>

                        <div className="col-12 col-md-3 mb-2">
                            <Dropdown
                                options={loansOption}
                                onChange={(element) => loanTypeOnChange(element.value)}
                                placeholder="Kredi Türü Seçiniz"
                                arrowClassName="dropdownArrow"
                                value={loanType}
                            />

                        </div>
                        <div className="col-12  col-md-3 mb-2">

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
                        <div className="col-12 col-md-3 mb-3">
                            <Dropdown
                                options={terms}
                                onChange={(d) => { termListOnChange(d.value) }}
                                placeholder="Vade"
                                arrowClassName="dropdownArrow"
                                value={termsValue}

                            />
                        </div>


                        <div className="col-6 col-md-3" style={{ justifyontent: "flex-end", }}>
                            <button onClick={(x) => { calculate() }} className="default-button" type="submit">KREDİ HESAPLA</button>
                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className="  text-center justify-content-center pt-3 pb-3 mb-3" style={{
                    border: "1px solid #8e8e8e",
                    borderRadius: 10
                }}>
                    <h1 style={{ color: "#087a68" }} className="text-center "> {pDAta?.title}</h1>
                </div>

            </div>

            <div className="col-12 col-md-4">
                <ol class="rounded-list">
                    {
                        titleList.map((item, key) => {

                            return (
                                <li key={key} className={(pathName == item.urlName ? "selected-list-item" : "") } style={{ background: "white" }}>
                                    <a href={"/kredi-hesaplama-detaylari/" + item.urlName} style={{
                                        color: " black",
                                        fontSize: 15
                                    }}>{(pathName == item.urlName ? " >> " : "") + item.title}</a>
                                </li>
                            )


                        })
                    }
                </ol>



            </div>
            <div className="col-12 col-md-8" >
                {new HtmlToReactParser().parse(pDAta?.content)}
            </div>

        </div>
        <div className="mt-5">
            <div className="mb-3 mt-2">
                <h4>Popüler Kredi Kartları</h4> </div>
            <hr className="title-hr"></hr>
            <div className="row  ">
                {

                    creditCart.map((item, key) => {
                        var jsondata = item.cartInfoJson;
                        return (
                            <div key={key} className="col-12 col-lg-4 col-md-4  mb-5 blog-page-credit-cart-item">
                                <div className="credit-cart-blog-page row">

                                    <div className="col-6 mb-2">
                                        <Rimage src={item.logoUrl} style={{ width: "100%" }}></Rimage>
                                    </div>
                                    <div className="col-6 p-0 ">
                                        <p style={{ color: "black", fontSize: 12 }}>Yıllık Kullanım Ücreti :<b>{item.yearlyUsingAmount} TL</b></p>
                                        <a className="default-button" style={{ width: "100%", display: "block", textAlign: "center" }} href={"/" + item.bankUrlName + "/" + item.urlName}> Detay </a>
                                    </div>
                                    {
                                        jsondata?.map((jitem, jkey) => {
                                            return (

                                                <div className="col-12 row credit-cart-detail " key={jkey}>
                                                    <div className="col-6 ">
                                                        <b> {jitem.key}</b>  :
                                                    </div>
                                                    <div className="col-6 ">
                                                        {jitem.value}
                                                    </div>

                                                </div>
                                            )
                                        })

                                    }

                                </div>
                                {/* <div className="col-12 mt-2">
                                            <a className="blog-credit-cart-detail-button" href={"/" + item.bankUrlName + "/" + item.urlName}><b style={{ color: "blue" }}>Devamı...</b></a>
                                        </div> */}
                            </div>
                        )
                    })

                }

            </div>

        </div>
    </div >)
}
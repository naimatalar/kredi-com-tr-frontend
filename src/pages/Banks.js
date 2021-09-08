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

import { PopulerLoans } from "../Components/containers/PopulerLoans";
import { DispositContainer } from "../Components/containers/DispositContainer";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { creditCartRedirect, dispositRedirect } from "../Components/RedirectComponent";
import { DispositMatrixContainer } from "../Components/containers/DispositMatrixContainer";
import BankLoanContainer from "../Components/BankLoanContainer";
import DispositSelectContainer from "../Components/DispositSelectContainer";
import Image from "react-image-webp";
export const Banks = (props) => {
    const [bank, setBank] = useState({})
    const [activeLoanType, setActiveLoanType] = useState({ id: null })
    const [selectedLoanOptions, setSelectedLoanOptions] = useState({ rate: null, amount: null, term: null })
    const [creditCarts, setCreditCarts] = useState([])
    const [disposits, setDiposits] = useState([])

    const [selectedDisposit, setSelectedDisposit] = useState()
    const [calculateDisposit, setCalculateDisposit] = useState({ rate: 0, amount: 0, term: 0 })
    const [calculateDispositResult, setCalculateDispositResult] = useState({ netAmount: "", totalAmount: "", term: "", id: "", rate: "", amount: "" })
    const [currencyIcon, setCurrencyIcon] = useState("")
    const [bankContainerCount, setBankContainerCount] = useState()
    const [amountss, setAmountss] = useState()

    

    useEffect(() => {
        start()
    }, [])
    const start = async () => {

        let bankData = await GetNoneToken("Banks/GetAllBankSiteById/" + props.BankId).then(x => { return x.data }).catch(x => { return false })

        setBank(bankData)

        setCreditCarts(bankData.creditCart)
        setDiposits(bankData.disposits)

        setActiveLoanType(bankData.loans[0] || [])
        let containercnt = 0;
        if (bankData.loans.length > 0) {
            containercnt++

        } else {
        }


        if (bankData.disposits.length > 0) {
            containercnt++
 
        }
        if (bankData.creditCart.length > 0) {
            containercnt++
        }
        setBankContainerCount(containercnt)


        // changeLoanTypeTab()
    }


  



    return (

        <div className="container-fluid">
            <Helmet>

                <meta property="og:type" content="article" />
                <meta property="og:title" content={"KREDİ.COM.TR | "+ (bank.bankName ?? "") + ": Kredi Ve Kredi Kartı Fırsatları"} />
                <meta property="og:url" content={window.location.href} />

                <meta property="og:description" content={(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilir, vadeli mevduat hesabı oluşturabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />
                <meta name="og:keyword" content={"Bankalar,"+bank.bankName+" , kredi kartı, faiz oranı, kredi hesaplama"} />
                <meta name="twitter:title" content={"KREDİ.COM.TR | "+(bank.bankName ?? "") + ": Kredi, Kredi Kartı ve Mevduat Fırsatları"} />

                <meta name="twitter:description" content={"KREDİ.COM.TR | "+(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilir, vadeli mevduat hesabı oluşturabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />

                <meta name="description" content={"KREDİ.COM.TR | "+(bank.bankName ?? "") + " bankaya ait kredileri sorgulayabilirsiniz. Ayrıca " + (bank.bankName ?? "") + " bankasına ait kredi kartlarını listeledik  ."} />
                <meta name="robots" content="index,follow" />
                <meta property="og:image" itemProp="image" content={apiurl + bank?.logoUrl} />
                <link rel="apple-touch-icon" href={apiurl + bank?.logoUrl} />

                <title>{"KREDİ.COM.TR | "+(bank.bankName ?? "") + ": Kredi, Kredi Kartı ve Mevduat Başvuru"} </title>

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

                        <BankLoanContainer Bank={bank} Loans={bank?.loans}></BankLoanContainer>
                    }


                    {bankContainerCount == 1 &&
                        <div className="col-12 col-lg-6 col-md-6 row mt-5 m-0">
                            <PopulerLoans />

                        </div>
                    }
                    {creditCarts.length > 0 &&

                        <div className="col-12 col-lg-6 col-md-6 row mt-5 ">
                            <div className="col-12">
                                <h4 style={{ color: "#464646", borderBottom: "1px solid #464646" }} className="text-center"> Bankaya Ait <b title={bank.bankName + "kredi kartı"}>{creditCarts.length} Adet Kredi Kartı</b> Bulunuyor!</h4>

                            </div>
                            <div className="col-12 cnts">
                                <div className="slide-container container credit-cart-slider-container">

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
                                                                                    <Image style={{
                                                                                        width: 30,
                                                                                        marginRight: 3,
                                                                                        float: "left"

                                                                                    }} src={require("../assets/images/campaigns.png").default}
                                                                                    webp={require("../assets/images/campaigns.png").default}
                                                                                        alt={bank.bankName + " bankaya ait " + each.name + " kampanya :" + jitem.title}
                                                                                        title={jitem.title + " : " + bank.bankName + "  " + each.name + " kredi kartının kampanyaları "}
                                                                                    ></Image>
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
                        <DispositSelectContainer Disposit={disposits} Bank={bank}></DispositSelectContainer>
                    }
                    {bankContainerCount == 3 &&

                        <div className="col-12 col-lg-6 col-md-6 row mt-5 ml-0 mr-0 bank-disposit-component justify-content-center">
                            <h4 className="pt-2 pb-4">En Çok Tercih Edilen Mevduat Hesapları</h4>
                            <PerfectScrollbar className="bank-disposit-component-scroll">
                                <DispositContainer Big={true}></DispositContainer>

                            </PerfectScrollbar>
                        </div>

                    }
                    <div className="row mt-5">
                        <div className="col-12">
                            <h4 className="home-title" > Diğer bütün bankaların <span style={{ fontWeight: "bold" }}>en çok kullanılan kredileri ve faiz oranları</span>nı derleyip topladık. Size ise sadece sonuçlara göz atmak kalıyor.  </h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-lg-6 col-md-6" >
                            <LoanRate ></LoanRate>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 ">
                            <FastLoan></FastLoan>
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
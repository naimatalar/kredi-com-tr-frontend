import React, { useEffect, useState } from "react";
import { propTypes } from "react-currency-input";
import { BankContainer } from "../../Components/containers/BankContainer";
import EmailPost from "../../Components/containers/EmailPost";
import { FastLoan } from "../../Components/containers/FastLoan";
import HowMuchLoan from "../../Components/containers/HowMuchLoan";
import { LoanRate } from "../../Components/containers/LoanRate";
import { Helmet } from "react-helmet";
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import { LoanSearchLabel } from "../../Components/containers/LoanSearchLabel";
import { LoanSearch } from "../../Components/containers/LoanSearch";

import MiddleMenu from "../../Components/containers/MiddleMenu";
import { PopulerLoans } from "../../Components/containers/PopulerLoans";
import Slider from "../../Components/containers/Slider";
import { DispositContainer } from "../../Components/containers/DispositContainer";
import { GetNoneToken } from "../../datacrud/datacrud";
import { PopulerBankCampaing } from "../../Components/containers/PopulerBankCampaing";
import { HowToPay } from "../../Components/calculate-page/HowToPay";
import Loading from "../../pages/Loading";
import Image from "react-image-webp";
import FindLoan from "../FindLoan";
import SharedButtons from "../../Components/SharedButtons";
import Rimage from "../../Components/Rimage";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Seo from "../../Components/Seo";
import Exchange from "../../Components/containers/Exchange";


const HomeLoan = (props) => {
    const [addsPopup, setAddsPopup] = useState(false)
    const [sss, setSss] = useState([])
    const [blog, setBlog] = useState([])
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(0));
    const [loading, setLoading] = useState(true)
    const [populerLoansData, setPopulerLoansData] = useState([])
    const [bankCamping, setBankCamping] = useState()
    const [selectedDisposit, setSelectedDisposit] = useState([])
    const [bankLoanRates, setBankLoanRates] = useState([])
    const [fatLoan, setFatLoan] = useState([])
    const [slider, setSlider] = useState([])
    const [titleList, setTitleList] = useState([])
    const [findl, setFindL] = useState(false)
    const [creditCart, setCreditCart] = useState([]);
    const [randomTys, setRandomTys] = useState(Math.floor((Math.random() * 3) + 1))


    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    useEffect(() => {

        start()
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        if (window.location.pathname.includes("kredi-bulucu")) {
            setFindL(true)
        }


        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const start = async () => {
        var indexData = await GetNoneToken("HomePageData/indexData").then(x => { return x.data }).catch(x => { return false })

        let sss_ = indexData.faq
        var tl = await GetNoneToken("OnlyCalculates/getTen/10").then(x => { return x.data }).catch(x => { return false })
        setTitleList(tl)
        setPopulerLoansData(indexData.populerLoans)
        setBankCamping(indexData.bankCamping)
        setSelectedDisposit(indexData.selectedDisposit)
        setBankLoanRates(indexData.bankLoanRates)
        setFatLoan(indexData.fatLoan)
        setSlider(indexData.slider)

        let creditCart = await GetNoneToken("CreditCarts/GetOnlyFive").then(x => { return x.data }).catch(x => { return false })

        setCreditCart(creditCart)

        // await GetNoneToken("Faqs/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        if (sss_) {
            setSss(sss_)
        }
        let blg = indexData.blogData

        // await GetNoneToken("Blogs/GetAllWebSite").then(x => { return x.data }).catch(x => { return false })
        if (blg) {
            setBlog(blg)
        }

        setLoading(false)

    }
    
    return (<>
        <Seo title={"Ev Kredisi Hesaplama"} description={"Ev almak için kredi arayıp başvuru yapabilirsiniz. Bütün bankaların faiz oranları karşılatırılıp hesaplanır. Tutar ve vadenizle beraber size en uygun araç kredilerini sizin için bulur. Hemen başvurun"} />

        {
            addsPopup && <> <div onClick={() => { setAddsPopup(false) }} className="lv-shadow"></div>
                <div className="lv-master">
                    <button onClick={() => { setAddsPopup(false) }} className="lv-close-button">X</button>
                    <div className="col-12">
                        <div className="row justify-content-center" >
                            <Image title="kredi.com.tr" alt={"logo"} style={{ width: "50%", objectFit: "contain" }} webp={require("../../assets/images/lg.webp").default} src={require("../../assets/images/lg.png").default}></Image>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row justify-content-center" >
                            <h4>
                                Reklam Ve İş Birliği İletişim Bilgileri
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 mt-4 add-contetns">
                        <div className="row justify-content-center" >
                            <div className="col-12 row justify-content-center">
                                <b >Mail Adres 1 : &nbsp;</b><span> reklam@kredi.com.tr</span>
                            </div>
                            <div className="col-12 row justify-content-center">
                                <b>Mail Adres 2 : &nbsp;</b><span> info@kredi.com.tr</span>
                            </div>
                            <div className="col-12 row justify-content-center">
                                <b>Telefon : &nbsp;</b><span> +90 (534) 551 65 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }

        {
            findl &&
            <div className="find-loan-container">
                <FindLoan></FindLoan>
            </div>

        }

        <div className="row mt-4" >

        <div className="col-12 mb-4">
                <Exchange />
            </div>

            <div className="col-12 mt-3 mb-3 text-center">
                <h1 className="home-title" style={{ marginTop: 0 }}>Evini <span style={{ fontWeight: "bold" }}>Seç</span>, Konut Kredini <span style={{ fontWeight: "bold" }}>Hesapla</span> , Başvur <span style={{ fontWeight: "bold" }}>Evini Al!</span>  </h1>
            </div>
            {windowDimensions.width < 800 &&
                <div className="row justify-content-center col-12 mb-4" style={{ marginTop: -10 }}>
                    <a style={{ fontSize: 17 }} className="nav-link fls" href="/kredi-bulucu">Kredi Bulucu!</a>


                </div>}

            <div className=" col-12 p-0">

                <LoanSearchLabel SelectedTab={"2"} Loans={props.Loans}></LoanSearchLabel>

            </div>


            <div className="col-12 ab-fonts  mb-3">
                <div className="row justify-content-center">
                    {randomTys == 1 &&
                        <>

                            <a href="/kredi-hesaplama/110000-tl-42-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>110.000 TL Ve 42 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>42 ay vade ile hesaplanmış 110.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/130000-tl-36-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>130.000 TL Ve 36 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>36 ay vade ile hesaplanmış 130.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/150000-tl-72-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>150.000 TL Ve 72 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>72 ay vade ile hesaplanmış 150.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/170000-tl-80-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>170.000 TL Ve 80 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>80 ay vade ile hesaplanmış 170.000 TL tutarında kredi veren bankalar</p>
                            </a>

                            <a href="/kredi-hesaplama/200000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>200.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 200.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/220000-tl-110-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3">
                                <h3>220.000 TL Ve 110 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>110 ay vade ile hesaplanmış 220.000 TL tutarında kredi veren bankalar</p>
                            </a>
                        </>
                    }
                    {randomTys == 2 &&
                        <>

                            <a href="/kredi-hesaplama/135000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>135.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 135.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/140000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>140.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 140.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/170000-tl-124-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>170.000 TL Ve 124 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 170.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/175000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>175.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 175.000 TL tutarında kredi veren bankalar</p>
                            </a>

                            <a href="/kredi-hesaplama/185000-tl-130-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>185.000 TL Ve 130 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>130 ay vade ile hesaplanmış 185.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/190000-tl-140-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>190.000 TL Ve 150 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>150 ay vade ile hesaplanmış 190.000 TL tutarında kredi veren bankalar</p>
                            </a>
                        </>
                    }
                    {randomTys == 3 &&
                        <>

                            <a href="/kredi-hesaplama/200000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>200.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 200.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/210000-tl-124-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>210.000 TL Ve 124 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>124 ay vade ile hesaplanmış 210.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/215000-tl-130-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>215.000 TL Ve 130 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>130 ay vade ile hesaplanmış 215.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/220000-tl-140-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>220.000 TL Ve 140 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>140 ay vade ile hesaplanmış 220.000 TL tutarında kredi veren bankalar</p>
                            </a>

                            <a href="/kredi-hesaplama/230000-tl-120-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>230.000 TL Ve 120 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>120 ay vade ile hesaplanmış 230.000 TL tutarında kredi veren bankalar</p>
                            </a>
                            <a href="/kredi-hesaplama/240000-tl-140-ay-vade-tasit-kredisi" className="col-12 col-md-3 col-lg-3 m-3 text-center">
                                <h3>240.000 TL Ve 140 Ay Vade</h3>
                                <b>Konut Kredisi</b>
                                <p>140 ay vade ile hesaplanmış 240.000 TL tutarında kredi veren bankalar</p>
                            </a>
                        </>
                    }






                </div>
            </div>

            <div className="row justify-content-between col-12 m-0 p-0">

                {windowDimensions.width < 800 && <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6 loan-search-container">
                    <LoanSearch Loans={props.Loans}></LoanSearch>
                </div>}


                <div className="col-12 col-lg-5 col-md-5 p-0 m-0" style={{ marginBottom: 20 }}  >
                    <FastLoan data={fatLoan} loading={loading}></FastLoan>
                </div>
                {loading &&
                    <div className="row col-12  col-lg-7 col-md-7 cs-card justify-content-between">
                        <div className="col-5 m-1"> &nbsp;</div>
                        <div className="col-5 m-1">&nbsp;</div>
                        <div className="col-12 m-1"> &nbsp;</div>
                    </div>
                }


                <div className="col-12 col-lg-7 col-md-7 p-0 m-0  row mt-4">
                    <div className="col-12 cnts m-0 p-0">

                        <div className="slide-container container credit-cart-slider-container">

                            {!loading && <Slide indicators={true} pauseOnHover={true} duration={2500} transitionDuration={800}>
                                {

                                    creditCart.map((each, index) => {
                                        return (<div key={index}  >
                                            <div className="each-fade" style={{ padding: 22 }} >
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Rimage alt={" bankaya ait " + each.name + " kredi kartı"} title={each.name + " kredi kartı özellikleri"} src={each.logoUrl} style={{ width: "100%" }}></Rimage>
                                                    </div>


                                                    <div className="col-6">
                                                        <div className="col-12">
                                                            <h3 style={{ color: "black", fontWeight: "bold" }}>{each.name}</h3>

                                                            <b style={{ color: "#535656" }}> Yıllık Ücret : </b>


                                                            ₺{each.yearlyUsingAmount}
                                                        </div>
                                                        <div className="container mt-3">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <a className="default-button" style={{
                                                                        padding: 3,
                                                                        fontSize: 15,
                                                                        fontWeight: "bold",
                                                                        width: "100%",
                                                                        display: "block",
                                                                        textAlign: "center",
                                                                        color: "white",
                                                                    }} href={"/" + each.bankUrlName + "/" + each.urlName}>DETAY</a>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="container">

                                                    <div className="row">
                                                        <div className="col-12">
                                                            <hr></hr>
                                                            <h5 className="text-center text-dark"> <b>Özellikler</b></h5>
                                                            {
                                                                each.cartInfoJson?.map((jitem, jkey) => {
                                                                    if (jkey < 7) {
                                                                        return (
                                                                            <div className="row" key={jkey}>
                                                                                <div className="col-6 text-dark">{jitem.key} : </div>
                                                                                <div className="col-6 text-dark"> {jitem.value} </div>

                                                                            </div>
                                                                        )
                                                                    }

                                                                })
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    })

                                }

                            </Slide>}
                        </div>
                    </div>
                </div>


            </div>

        </div>
        {/* <div className="row">
            <div className="col-lg-2 col-md-12 p-0" style={{ marginBottom: 20 }}  >

                <div className=" row adds-first-big pt-4 pb-4" >
                    <div className="row  m-0 p-0 justify-content-center">
                        <div className="row justify-content-center">
                            <Image title="kredi kartları krediler ve mevduatlar kredi.com.tr de" alt={"kredi.com.tr logo"} style={{ width: "50%", objectFit: "contain" }}
                                webp={require("../../assets/images/lg.webp").default} src={require("../../assets/images/lg.png").default}></Image>
                        </div>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <b style={{ textAlign: "center" }}>Kredi Bulucu</b>
                        </div>
                        <div className="row  m-0 p-0 justify-content-center mt-5">
                            <img title="kredi bulucu" alt={"logo kredi.com"} style={{ width: 150, objectFit: "contain", borderRadius: 5, boxShadow: "1px 1px 7px 1px black" }} src={require("../../assets/images/kblc.jpg").default}></img>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="row  m-0 p-0 justify-content-center">

                            <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 20 }}>Kredi bulucu ile  gelir ve giderlerinizi girerek size en uygun krediyi bulun.. </span>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row  m-0 p-0 justify-content-center">

                            <a href="/kredi-bulucu" style={{ color: "white", width: 150 }} className="default-button text-center">&nbsp; BAŞLA &nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="col-12  mb-4">
            <PopulerBankCampaing loading={loading} data={bankCamping}></PopulerBankCampaing>

        </div> */}

        <div className="row col-12">
            <div className="col-12 col-md-7 col-lg-7 mt-3">
                <HowToPay></HowToPay>


            </div>
            <div className="col-12 col-md-5 col-lg-5 mt-3">
                <p className="home-title" >En çok kazandıran <span style={{ fontWeight: "bold" }}>vadeli mevduat seçeneklerini </span> sizin için seçtik.</p>

                <div className="mb-3" style={{
                    padding: 7,
                    background: "linear-gradient(45deg, #077a683b, transparent)"
                }}>
                    <i style={{ color: " #505050", fontWeight: "bold" }}> En Çok Tercih Edilen Mevduat Hesapları</i>

                </div>
                <div className="row">
                    <DispositContainer data={selectedDisposit} Big></DispositContainer>
                </div>

            </div>
        </div>


        <div className=" mb-4 bt-4">

        </div>

        <div className="row middle-menu-content">
            <div className="col-12">
                <p className="home-title" >Düzinelerce <span style={{ fontWeight: "bold" }}>kredi ödeme seçenekleri </span> ve bol kazandırıp çok uçuran <span style={{ fontWeight: "bold" }}>kredi kartları </span> parmaklarınızın ucunda! </p>
            </div>
            <div className="container">
                <MiddleMenu Loans={props.Loans}></MiddleMenu>
            </div>
        </div>
        {/* <div className="container slider-content">

            <Slider data={slider}></Slider>

        </div> */}

        <div className="row " style={{

        }}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 imghide" style={{ paddingRight: 36 }}>
                        <h3>Sık Sorulan Sorular</h3>
                        {sss?.map((item, key) => {

                            return (<div key={key} style={{ padding: 5 }}>

                                <div>

                                    <h6 style={{ fontWeight: "bold" }}>* {item.question}</h6>

                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.ansver }} className="faq-3time">
                                    {/* <h6 style={{ color: "black", fontSize: 13 }}>*{item.ansver}</h6> */}
                                </div>
                            </div>)
                        })}


                        <div style={{ padding: 5 }}>
                            <a href="/soru-cevap" style={{ fontWeight: "bold", textDecoration: "underline", color: "#007bff" }}>SIK SORULAN SORULAR SAYFASINA GİT</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 imghide">
                        <h3>Blog</h3>
                        <div >
                            {blog?.map((item, key) => {

                                return (
                                    <div key={key} style={{ padding: 5 }}>
                                        <h6><b>* {item.title}</b> </h6>
                                        <div className="maxhg" style={{ color: "black", paddingBottom: 23 }} dangerouslySetInnerHTML={{ __html: item.content }}></div>

                                        <p><b><a style={{ color: "#007bff" }} href={"/haberler-bilgiler/" + item.urlName}>Devamını Oku...</a></b></p>
                                    </div>
                                )
                            })}

                        </div>

                        <div style={{ padding: 5 }}>
                            <a href="/haberler-bilgiler" style={{ fontWeight: "bold", textDecoration: "underline", color: "#007bff" }}>BLOG SAYFASINA GİT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12  mb-4 mt-3 justify-content-center row">
                {
                    titleList.map((item, key) => {
                        return (<a className="calculate-a" href={"/kredi-hesaplama-detaylari/" + item.urlName}>{item.title}</a>)

                    })
                }

            </div>
        </div>


        <div className="row">
            <div >

                <div className="row">

                    <div className="col-lg-6 col-md-6" >
                        <HowMuchLoan></HowMuchLoan>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <EmailPost></EmailPost>
                    </div>
                </div>

            </div>
        </div>
        <div className="row" style={{ justifyContent: "center", marginTop: 100 }}>
            {windowDimensions.width > 800 &&
                <BankContainer Banks={props.Banks}></BankContainer>
            }

        </div>

    </>)
}
export default HomeLoan

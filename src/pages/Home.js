import React, { useEffect, useState } from "react";
import { propTypes } from "react-currency-input";
import { BankContainer } from "../Components/containers/BankContainer";
import EmailPost from "../Components/containers/EmailPost";
import { FastLoan } from "../Components/containers/FastLoan";
import HowMuchLoan from "../Components/containers/HowMuchLoan";
import { LoanRate } from "../Components/containers/LoanRate";
import { Helmet } from "react-helmet";
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import { LoanSearchLabel } from "../Components/containers/LoanSearchLabel";
import { LoanSearch } from "../Components/containers/LoanSearch";

import MiddleMenu from "../Components/containers/MiddleMenu";
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import Slider from "../Components/containers/Slider";
import { DispositContainer } from "../Components/containers/DispositContainer";
import { GetNoneToken } from "../datacrud/datacrud";
import { PopulerBankCampaing } from "../Components/containers/PopulerBankCampaing";
import { HowToPay } from "../Components/calculate-page/HowToPay";
import Loading from "../pages/Loading";
import Image from "react-image-webp";
import FindLoan from "./FindLoan";
import SharedButtons from "../Components/SharedButtons";
import Rimage from "../Components/Rimage";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Flags from 'country-flag-icons/react/3x2'
import Exchange from "../Components/containers/Exchange";
import HomePageMiniCard from "../Components/HomePageMiniCard";
const Home = (props) => {
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
    const [howToPay, setHowToPay] = useState();
    const [loanSearchLabel, setLoanSearchLabel] = useState();



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
        setHowToPay(<HowToPay></HowToPay>)

        setLoanSearchLabel(<LoanSearchLabel loading={loading} Loans={props.Loans}></LoanSearchLabel>)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const start = async () => {
        var indexData = await GetNoneToken("HomePageData/indexData").then(x => { return x.data }).catch(x => { return false })

        let sss_ = indexData.faq
        var tl = await GetNoneToken("OnlyCalculates/getTen/10").then(x => { return x.data }).catch(x => { return false })


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
        setTitleList(tl)
        setPopulerLoansData(indexData.populerLoans)
        setBankCamping(indexData.bankCamping)
        setSelectedDisposit(indexData.selectedDisposit)
        setBankLoanRates(indexData.bankLoanRates)
        setFatLoan(indexData.fatLoan)
        setSlider(indexData.slider)
        setLoading(false)

    }

    return (<>
        <Head>

        </Head>
        {
            addsPopup && <> <div onClick={() => { setAddsPopup(false) }} className="lv-shadow"></div>
                <div className="lv-master">
                    <button onClick={() => { setAddsPopup(false) }} className="lv-close-button">X</button>
                    <div className="col-12">
                        <div className="row justify-content-center" >
                            <Image title="kredi.com.tr" alt={"logo"} style={{ width: "50%", objectFit: "contain" }} webp={require("../assets/images/lg.webp").default} src={require("../assets/images/lg.png").default}></Image>
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


            <div className="col-12 mt-3  text-center">
                <h1 className="home-title" style={{ marginTop: 0 }}>Kolayca <span style={{ fontWeight: "bold" }}>Kredi Ara</span>, Pratik Şekilde <a href="/kredi-hesaplama" style={{ fontWeight: "bold" }}>Kredi Hesapla</a> , Hızlıca <span style={{ fontWeight: "bold" }}>Kredi Başvur!</span>  </h1>



            </div>



            <div className="row justify-content-center col-12 mb-4" style={{ marginTop: -10 }}>
                <a style={{ fontSize: 17 }} className="nav-link fls" href="/kredi-bulucu">Kredi Bulucu!</a>


            </div>
            {/* {windowDimensions.width > 800 &&
              
            } */}
            <div className=" col-12 p-0">

                {loanSearchLabel}
            </div>
            {/* <div className="row col-12">
                <HomePageMiniCard></HomePageMiniCard>
            </div> */}
            <div className="col-12 mb-4">
                <Exchange />
            </div>

            <div className="row justify-content-between col-12 m-0 p-0">

                {windowDimensions.width < 800 && <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6 loan-search-container">
                    {/* <LoanSearch Loans={props.Loans}></LoanSearch> */}
                </div>}

                {/*<div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-5 " >
                   <PopulerLoans loading={loading} data={populerLoansData}></PopulerLoans> 



                </div>*/}
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
                <div className="col-12 col-lg-7 col-md-7 p-0 m-0  row">
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
            <div className="col-lg-2 col-md-12 p-0" style={{ marginBottom: 20 }}>
                <div className=" row adds-first-big pt-4 pb-4" >
                    <div className="row  m-0 p-0 justify-content-center">
                        <div className="row justify-content-center">
                            <Image title="kredi kartları krediler ve mevduatlar kredi.com.tr de" alt={"kredi.com.tr logo"} style={{ width: "50%", objectFit: "contain" }}
                                webp={require("../assets/images/lg.webp").default} src={require("../assets/images/lg.png").default}></Image>
                        </div>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <b style={{ textAlign: "center" }}>Kredi Bulucu</b>
                        </div>
                        <div className="row  m-0 p-0 justify-content-center mt-5">
                            <img title="kredi bulucu" alt={"logo kredi.com"} style={{ width: 150, objectFit: "contain", borderRadius: 5, boxShadow: "1px 1px 7px 1px black" }} src={require("../assets/images/kblc.jpg").default}></img>
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
        <div className="col-12  mb-4">
            <PopulerBankCampaing loading={loading} data={bankCamping}></PopulerBankCampaing>
        </div>

        <div className="row justify-content-center">
            <div className=" row col-12 col-md-7 col-lg-7 mt-3">

                {howToPay}


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
        <div className="row">
            <div className="col-12" style={{ marginBottom: 15 }}>
                <p className="home-title" > <span style={{ fontWeight: "bold" }}>Kredi ve kredi kartları ile ilgili en güncel verileri analiz edip, <br /></span> Çeşitli <span style={{ fontWeight: "bold" }}>Hesap Araçlarımızla </span> bütce hesabınızı kolayca yapın.  </p>
            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-4 col-md-4">
                <LoanRate data={bankLoanRates} />

            </div>

            <div className="col-lg-3 d-none d-lg-block" style={{ marginBottom: 20 }}  >

                <div className="d-none d-lg-flex row adds-first-big" >
                    <div className="row  m-0 p-0 justify-content-center">

                        <img title="kredi.com.tr online kredi, kredi kartı ve mevduat başvuruları" alt={"kredi.com.tr "} style={{ width: "80%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtım Alanı</b>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün ya da hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">

                        <button onClick={() => { setAddsPopup(true) }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                    </div>

                </div>
            </div>
            {/* <div className="col-lg-4 col-md-6" style={{ marginBottom: 20 }}  >
                <FastLoan data={fatLoan}></FastLoan>
            </div> */}
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-5 " >
                <PopulerLoans loading={loading} data={populerLoansData}></PopulerLoans>



            </div>
        </div>
        <div className="row">


            <div className="d-lg-none d-md-flex row adds-first-big pt-4 pb-4" >
                <div className="row  m-0 p-0 justify-content-center">
                    <div className="row justify-content-center">
                        <Image title="kredi.com.tr ile artık bankaların ürünleri parmaklarınızın ucunda" alt={"logo kredi.com.tr"} style={{ width: "50%", objectFit: "contain" }}
                            webp={require("../assets/images/lg.webp").default}
                            src={require("../assets/images/lg.png").default}></Image>
                    </div>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtım Alanı</b>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün ya da hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="row  m-0 p-0 justify-content-center">

                        <button onClick={() => { setAddsPopup(true) }} style={{ width: 156 }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                    </div>
                </div>
            </div>

        </div>
        <div className="row middle-menu-content">
            <div className="col-12">
                <p className="home-title" >Düzinelerce <span style={{ fontWeight: "bold" }}>kredi ödeme seçenekleri </span> ve bol kazandırıp çok uçuran <span style={{ fontWeight: "bold" }}>kredi kartları </span> parmaklarınızın ucunda! </p>
            </div>
            <div className="container">
                <MiddleMenu Loans={props.Loans}></MiddleMenu>
            </div>
            <div className="row justify-content-center col-12 mt-3"><a style={{ fontSize: 20, fontWeight: "bold" }} href="/kredi-hesaplama">Kredi Hesaplama</a></div>
        </div>
        {/* <div className="container slider-content  d-md-none">

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
        <div className="row about-content" >
            <div className="container">

                <div className="row">
                    <div className="col-12" style={{ paddingRight: 36 }}>
                        <h3>kredi.com.tr</h3>
                        <p style={{ color: "black" }}>
                            Kredi ve kredi kartı ile geniş bilgi ve deneyimlerimizin sonucunda geliştirdiğimiz hesaplama,
                            başvuru ve karşılaştırmalarla kredi.com.tr; kullanıcılara güncel bilgilerle hizmet verir.
                            Akıllı ödeme ve bütçe hesaplamasıyla ne kadar kredi çekebileceğinizi ve aylık ne kadar ödeyebileceğinizi hesaplayıp,
                            bütçenize en uygun kredi ve kredi kartlarını seçiminize sunar.
                        </p>
                        <p><b><a href="" style={{ color: "#333333" }}>Devamını Oku...</a></b></p>

                    </div>
                </div>
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
export default Home

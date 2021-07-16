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
import { LoanSearch } from "../Components/containers/LoanSearch";
import MiddleMenu from "../Components/containers/MiddleMenu";
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import Slider from "../Components/containers/Slider";
import { DispositContainer } from "../Components/containers/DispositContainer";
import { GetNoneToken } from "../datacrud/datacrud";
export const Home = (props) => {

    const [addsPopup, setAddsPopup] = useState(false)
    const [sss, setSss] = useState([])
    const [blog, setBlog] = useState([])

    useEffect(() => {

        start()
    }, [])
    const start = async () => {
        var sss_ = await GetNoneToken("Faqs/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        if (sss_) {
            setSss(sss_)
        }
        var blg = await GetNoneToken("Blogs/GetAllWebSite").then(x => { return x.data }).catch(x => { return false })
       
        if (blg) {
            setBlog(blg)
        }

    }

    return (<>
        <Helmet>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Kredi Fırsatları, En İyi Kredi Kartları | kredi.com.tr" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:description" content="En uygun kredi fırsatlarını kredi.com.tr ayrıcalığı ile sizlerle buluşturuyoruz. Bol puan veren ve uçuş mili kazandıran kredi kartlarını sizin için listeleyip tercihinize sunuyoruz." />
            <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
            <meta name="twitter:title" content="Kredi Fırsatları, En İyi Kredi Kartları | kredi.com.tr" />
            <meta name="twitter:description" content="Kredi.com.tr | Türkiyenin En Profesyonel Kredi Ve Kredi Kartı Başvuru Platformu" />
            <meta name="description" content="kredi.com.tr Kolayca Arayın, Pratik Şekilde Hesaplayın, Hızlıca Başvurun" />
            <meta name="robots" content="index,follow" />
            <title>KREDİ.COM.TR | Türkiyenin En Profesyonel Kredi Ve Kredi Kartı Başvuru Platformu</title>
        </Helmet>

        {/* <NextSeo
            title="Simple Usage Example"
            description="A short description goes here."
        /> */}
        {
            addsPopup && <> <div onClick={() => { setAddsPopup(false) }} className="lv-shadow"></div>
                <div className="lv-master">
                    <button onClick={() => { setAddsPopup(false) }} className="lv-close-button">X</button>
                    <div className="col-12">
                        <div className="row justify-content-center" >
                            <img title="kredi.com.tr" alt={"logo"} style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row justify-content-center" >
                            <h4>
                                Reklam Ve İşbirliğili İletişim Bilgiliri
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

        <div className="row">




            <div className="col-12">
                <p className="home-title" style={{ marginTop: 0 }}>Kolayca <span style={{ fontWeight: "bold" }}>Arayın,</span> Pratik Şekilde <span style={{ fontWeight: "bold" }}>Hesaplayın,</span> Hızlıca <span style={{ fontWeight: "bold" }}>Başvurun</span>  </p>
            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6 loan-search-container">
                <LoanSearch Loans={props.Loans}></LoanSearch>
            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6 " >
                <PopulerLoans></PopulerLoans>
            </div>
            <div className="col-lg-2 col-md-12 p-0" style={{ marginBottom: 20 }}  >
                <div className="d-none d-lg-flex row adds-first-big" >
                    <div className="row  m-0 p-0 justify-content-center">
                        <img title="kredi.com.tr kredi, kredi kartı vadeli mevduat" alt={"logo kredi.com"} style={{ width: "80%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">
                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">
                        <button onClick={() => { setAddsPopup(true) }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                    </div>
                </div>
                <div className="d-lg-none d-md-flex row adds-first-big pt-4 pb-4" >
                    <div className="row  m-0 p-0 justify-content-center">
                        <div className="row justify-content-center">
                            <img title="kredi kartları krediler ve mevduatlar kredi.com.tr de" alt={"kredi.com.tr logo"} style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        </div>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="row  m-0 p-0 justify-content-center">

                            <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row  m-0 p-0 justify-content-center">

                            <button onClick={() => { setAddsPopup(true) }} style={{ width: 156 }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div className="col-12">
            <p className="home-title" >En çok kazandıran <span style={{ fontWeight: "bold" }}>vadeli mevduat seçeneklerini </span> sizin için seçtik.</p>
        </div>
        <div className=" mb-4 bt-4">
            <div className="mb-3" style={{
                padding: 7,
                background: "linear-gradient(45deg, #077a683b, transparent)"
            }}>
                <i style={{ color: " #505050", fontWeight: "bold" }}> En çok tercih edilen mevduat hesapları</i>

            </div>
            <div className="row">
                <DispositContainer></DispositContainer>

            </div>
        </div>
        <div className="row">
            <div className="col-12" style={{ marginBottom: 15 }}>
                <p className="home-title" > <span style={{ fontWeight: "bold" }}>Kredi ve kredi kartları ile ilgili en güncel verileri analiz edip, <br /></span> Çeşitli <span style={{ fontWeight: "bold" }}>Hesap Araçlarımızla </span> bütce hesabınızı kolayca yapın.  </p>
            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6">
                <LoanRate />

            </div>

            <div className="col-lg-3 d-none d-lg-block" style={{ marginBottom: 20 }}  >

                <div className="d-none d-lg-flex row adds-first-big" >
                    <div className="row  m-0 p-0 justify-content-center">

                        <img title="kredi.com.tr online kredi, kredi kartı ve mevduat başvuruları" alt={"kredi.com.tr "} style={{ width: "80%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">

                        <button onClick={() => { setAddsPopup(true) }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ marginBottom: 20 }}  >
                <FastLoan></FastLoan>
            </div>
        </div>
        <div className="row">


            <div className="d-lg-none d-md-flex row adds-first-big pt-4 pb-4" >
                <div className="row  m-0 p-0 justify-content-center">
                    <div className="row justify-content-center">
                        <img title="kredi.com.tr ile artık bankaların ürünleri parmaklarınızın ucunda" alt={"logo kredi.com.tr"} style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                    </div>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmaklarınızın ucuna taşıyalım. </span>
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
                <p className="home-title" >Düzinelerce <span style={{ fontWeight: "bold" }}>kredi ödeme seçenekleri </span> ve bol kazandırıp çok uçuran <span style={{ fontWeight: "bold" }}>kredi kartları </span> parmaklarınızın ucunda </p>
            </div>
            <div className="container">
                <MiddleMenu Loans={props.Loans}></MiddleMenu>
            </div>
        </div>
        <div className="container slider-content">

            <Slider></Slider>

        </div>

        <div className="row " style={{

        }}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 imghide" style={{ paddingRight: 36 }}>
                        <h3>Sık Sorulan Sorular</h3>
                        {sss?.map((item, key) => {

                            return (<div key={key} style={{ padding: 5 }}>

                                <div>

                                    <p style={{ fontWeight: "bold" }}>* {item.question}</p>

                                </div>
                                <div>
                                    <h6 style={{color:"black",fontSize:13}}>*{item.ansver}</h6>
                                </div>
                            </div>)
                        })}


                        <div style={{ padding: 5 }}>
                            <a href="" style={{ fontWeight: "bold", textDecoration: "underline",color:"#007bff" }}>SIK SORULAN SORULAR SAYFASINA GİT</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 imghide">
                        <h3>Blog</h3>
                        <div >
                            {blog?.map((item, key) => {

                                return (
                                    <div style={{ padding: 5 }}>
                                        <h6><b>* {item.title}</b> </h6>
                                        <div className="maxhg" style={{ color: "black",paddingBottom:23 }} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                        
                                        <p><b><a style={{color:"#007bff"}} href={"/haberler-bilgiler/"+item.urlName }>Devamını Oku...</a></b></p>
                                    </div>
                                )
                            })}

                        </div>

                        <div style={{ padding: 5 }}>
                            <a href="/haberler-bilgiler" style={{ fontWeight: "bold", textDecoration: "underline",color:"#007bff" }}>BLOG SAYFASINA GİT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row about-content" >
            <div className="container">

                <div className="row">
                    <div className="col-12" style={{ paddingRight: 36 }}>
                        <h3>kred.com.tr</h3>
                        <p style={{ color: "black" }}>
                            Kredi ve kredi kartı ile geniş bilgi ve deneyimlerimizin sonucunda geliştiridiğimiz hesaplama
                            başvuru ve karşılaştırmalarla kredi.com.tr kredi kullanıcılara güncel bildilerle hizmet verir.
                            Akıllı ödeme ve bütçe hesaplamasıyla ne kadar kredi çekmenizi ve  aylık ne kadar ödeyebileceğinizi hesaplayıp
                            hayallerinize bütçenize en uygun kredi ve kredi kartlarını seçiminize sunar.
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
            <BankContainer Banks={props.Banks}></BankContainer>
        </div>
    </>)
}
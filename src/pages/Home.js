import React, { useState } from "react";
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
export const Home = (props) => {

    const [addsPopup, setAddsPopup] = useState(false)

    return (<>
        <Helmet>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Kredi Fırsatları, En İyi Kredi Kartları | kerdi.com.tr" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:description" content="En uygun kredi fırsatlarını kredi.com.tr ayrıcalığı ile sizlerle buluşturuyoruz. Bol puan veren ve uçuş mili kazandıran kredi kartlarını sizin için listeleyip tercihinize sunuyoruz." />
            <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
            <meta name="twitter:title" content="Kredi Fırsatları, En İyi Kredi Kartları | kerdi.com.tr" />
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
                            <img style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
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
                        <img style={{ width: "80%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">
                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmakların ucuna taşıyalım. </span>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">
                        <button onClick={() => { setAddsPopup(true) }} className="default-button">&nbsp; İLETİŞİM &nbsp;</button>
                    </div>
                </div>
                <div className="d-lg-none d-md-flex row adds-first-big pt-4 pb-4" >
                    <div className="row  m-0 p-0 justify-content-center">
                        <div className="row justify-content-center">
                            <img style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        </div>
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="row  m-0 p-0 justify-content-center">

                            <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmakların ucuna taşıyalım. </span>
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
                <i style={{ color: " #505050",fontWeight:"bold" }}> En çok tercih edilen mevduat hesapları</i>

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

                        <img style={{ width: "80%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmakların ucuna taşıyalım. </span>
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
                        <img style={{ width: "50%", objectFit: "contain" }} src={require("../assets/images/lg.png").default}></img>
                    </div>
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <b style={{ textAlign: "center" }}>Reklam Ve Tanıtın Alanı</b>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="row  m-0 p-0 justify-content-center">

                        <span style={{ textAlign: "center", textAlign: "center", color: " #181818", fontSize: 12 }}>Aylık 3MN web trafiğine sahip sitemizde tanıtım ve reklamlarınızı yayınlayalım. Ürün yada hizmetinizi parmakların ucuna taşıyalım. </span>
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
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ paddingRight: 36 }}>
                        <h3>Sık Sorulan Sorular</h3>

                        <div style={{ padding: 5 }}>
                            <h6>*Kredi Puanı Nedir ?</h6>
                            <p style={{ color: "black" }}>Finansal geçmişinizin ortak bir kuruluşta analiz edilmesi sonrası size verilen nota kredi notu yani kredi puanı denir. Ülkemizde KKB isimli kuruluşta toplanan kredi notu; bankalara müşterileri hakkında detaylı bilgi edinebilme imkanı tanır.</p>
                        </div>
                        <div style={{ padding: 5 }}>
                            <h6>*Kredi Faiz Oranı Nedir ?</h6>
                            <p style={{ color: "black" }}>Faiz, kısaca kar anlamına gelir. Banka ya da benzeri yerden borç karşılığı alınan paranın, kullanımına karşılık verilen ücrettir. Bu ücretin oranı, belli başlı hususlara bağlı olarak değişir.</p>
                        </div>
                        <div style={{ padding: 5 }}>
                            <a href="" style={{ fontWeight: "bold", textDecoration: "underline" }}>SIK SORULAN SORULAR SAYFASINA GİT</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Blog</h3>
                        <div style={{ padding: 5 }}>
                            <h6>*Faizler Yükseliyor </h6>
                            <p style={{ color: "black" }}>Hastalık sonrasında verilen bol likidite harcamaya dönecek, ABD ekonomisi düştüğü yerden kalkacak. Bu da ister istemez enflasyon yaratacak..</p>
                            <p><b><a href="" style={{ color: "#333333" }}>Devamını Oku...</a></b></p>
                        </div>
                        <div style={{ padding: 5 }}>
                            <h6>*Kredi Ötelemeleri </h6>
                            <p style={{ color: "black" }}>Koronavirüs salgını sonrası alınan tedbirler kapsamında bankalar çok önemli bir karar aldı. Dört büyük banka 31 Mart tarihinde dönem sonu taksit, faiz ve anapara ödemesini gerçekleştiremeyen vatandaşlarımız için ödemelerin ötelenmesi yönünde karar aldı.</p>
                            <p><b><a href="" style={{ color: "#333333" }}>Devamını Oku...</a></b></p>

                        </div>
                        <div style={{ padding: 5 }}>
                            <a href="" style={{ fontWeight: "bold", textDecoration: "underline" }}>BLOG SAYFASINA GİT</a>
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
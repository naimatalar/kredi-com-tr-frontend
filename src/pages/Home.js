import React from "react";
import { propTypes } from "react-currency-input";
import { BankContainer } from "../Components/containers/BankContainer";
import EmailPost from "../Components/containers/EmailPost";
import { FastLoan } from "../Components/containers/FastLoan";
import HowMuchLoan from "../Components/containers/HowMuchLoan";
import { LoanRate } from "../Components/containers/LoanRate";

import { LoanSearch } from "../Components/containers/LoanSearch";
import MiddleMenu from "../Components/containers/MiddleMenu";
import { PopulerLoans } from "../Components/containers/PopulerLoans";
import Slider from "../Components/containers/Slider";

export const Home = (props) => {

    return (<>
        <div className="row">
            <div className="col-12">
                <p className="home-title" style={{ marginTop: 0 }}>Kolayca <span style={{ fontWeight: "bold" }}>Arayın,</span> Pratik Şekilde <span style={{ fontWeight: "bold" }}>Hesaplayın,</span> Hızlıca <span style={{ fontWeight: "bold" }}>Başvurun</span>  </p>

            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6">
                <LoanSearch Loans={props.Loans}></LoanSearch>

            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6" >
                <PopulerLoans></PopulerLoans>

            </div>
            <div className="col-lg-2 col-md-12" style={{ marginBottom: 20 }}  >
                <img className="d-none d-lg-block" style={{ height: "100%", width: "100%" }} src={require("../assets/images/adds.png").default}></img>
                <img className="d-lg-none d-md-block" style={{ width: "100%" }} src={require("../assets/images/addsvert.png").default}></img>

            </div>


        </div>
        <div className="row">
            <div className="col-12" style={{ marginTop: 25, marginBottom: 15 }}>
                <p className="home-title" > <span style={{ fontWeight: "bold" }}>Kredi ve kredi kartları ile ilgili en güncel verileri analiz edip, <br /></span> Çeşitli <span style={{ fontWeight: "bold" }}>Hesap Araçlarımızla </span> bütce hesabınızı kolayca yapın.  </p>
            </div>
            <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-5 col-md-6">
                <LoanRate />

            </div>

            <div className="col-lg-3 d-none d-lg-block" style={{ marginBottom: 20 }}  >
                <img style={{ height: "100%", width: "100%" }} src={require("../assets/images/adds2t.jpg").default}></img>
            </div>
            <div className="col-lg-4 col-md-6" style={{ marginBottom: 20 }}  >
                <FastLoan></FastLoan>
            </div>
        </div>
        <div className="row">
            <div className="d-lg-none d-md-block">
                <img style={{ width: "100%" }} src={require("../assets/images/adds2.jpg").default}></img>
            </div>
        </div>
        <div className="row middle-menu-content">
            <div className="col-12">
                <p className="home-title" >Düzinelerce <span style={{ fontWeight: "bold" }}>kredi ödeme seçenekleri </span> ve bol kazandırıp çok uçuran <span style={{ fontWeight: "bold" }}>kredi kartları </span> parmaklarınızın ucunda </p>
            </div>
            <div className="container">

                <MiddleMenu></MiddleMenu>
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
        <div className="row" style={{justifyContent:"center",marginTop:100}}>
            <BankContainer Banks={props.Banks}></BankContainer>
        </div>
    </>)
}
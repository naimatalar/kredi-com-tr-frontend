import React, { createRef, useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { CarCreditCalculate } from "../Components/calculate-page/CarCreditCalculate"
import { CreditCalculate } from "../Components/calculate-page/CreditCalculate"
import { HomeCreditCalculate } from "../Components/calculate-page/HomeCreditCalculate"
import { HowToPay } from "../Components/calculate-page/HowToPay"
import HowMuchLoan from "../Components/containers/HowMuchLoan"


const CalculatePage = (props) => {
    const [selectedLink, setSelectedLinks] = useState({
        name: "",
        urlName: "",
        description: ""
    })
    const [links, setLinks] = useState([
        {
            name: "İhtiyaç Kredisi Hesaplama.",
            urlName: "ihtiyac-kredisi-hesaplama",
            description: "Gereken ihtiyaç kredisi için hesaplama ve analizi yapmanızı sağlıyoruz"
        }, {
            name: "Konut Kredisi Hesaplama.",
            urlName: "konut-kredisi-hesaplama",
            description: "Konut kredisi hesaplama ve kredi kullanımı hakkında detaylar."
        }, {
            name: "Araç Kredisi Hesaplama.",
            urlName: "arac-kredisi-hesaplama",
            description: "Araç kredisi hesaplama. Düşündüğünüz kredi miktarını, faiz oranı girerek hesaplayın"
        }
        ,
        {
            name: "Aylık Ne Kadar Ödeyebilirim?",
            urlName: "aylik-ne-kadar-odeyebilirim",
            description: "Ne kadar kredi çekebileceğinizi hesaplar. Ve size uygun kredileri bulur"

        },

    ])

    useEffect(() => {
        setSelectedLinks(links.find(x => { return x.urlName == props.UrlName }))
    }, [])
    return (
        <div className="master-content">

            <div className="row col-12 justify-content-center">
                {
                    !selectedLink?.name &&
                    <h1 className="home-title text-center" > <span style={{ fontWeight: "bold" }}>Hesaplama Araçlarımız</span> <br></br> Bu araçlar sizleri kalem,kağıt ve hesap makinesinden kurtarıyor </h1>
                }
                {
                    selectedLink?.name &&
                    <h1 className="home-title text-center" > <span style={{ fontWeight: "bold" }}>{selectedLink?.name}</span> <br></br> {selectedLink?.description} </h1>
                }
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-9 col-lg-9 calculate-pages-s">
                    {
                        props.UrlName == "aylik-ne-kadar-odeyebilirim" && <>
                            <HowToPay></HowToPay>
                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Aylık Ne Kadar Kredi Ödeyebileceğinizi Öğrenin" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Bu sayfa aylık ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr" />
                                <meta name="keyword" content="aylık ödeme öğrenme, aylık kredi hesaplama, aylık ne kadar kredi ödenir" />
                                <meta name="og:keyword" content="aylık ödeme öğrenme, aylık kredi hesaplama, aylık ne kadar kredi ödenir" />

                                <meta name="description" content="Aylık ne kadar çekebileceğinizi hesaplayıp size en uygun krediyi veren bakaları listeliyoruz. Hesaplama, geiliriniz ve giderleriniz baz alarak size onaylanma oranı yüksek kredileri getirir" />
                                <meta name="robots" content="index,follow" />
                                <meta property="og:image" itemProp="image" content={require("../assets/images/thn.jpg").default} />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:title" content="Aylık Ne Kadar Kredi Çekebileceğinizi Öğren" />
                                <meta name="twitter:description" content="Bu sayfa girdiğiniz bilgileri bankaya sorarak ödeyebileceğiniz kredileri başvurabilmeniz için bulur | kredi.com.tr" />
                                <meta name="twitter:url" content={window.location.href} />
                                <meta name="twitter:image" content={require("../assets/images/thn.jpg").default} />


                                <title>Aylık ne kadar kredi çekebileceğinizi öğrenin | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "ihtiyac-kredisi-hesaplama" && <>
                            <CreditCalculate />

                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="İhtiyaç Kredisi Hesaplamanızı Yapın" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Çekmek istediğiniz ihtiyaç kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="og:keyword" content="kredi,hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama" />

                                <meta name="keyword" content="kredi,hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama" />
                                <meta name="description" content="Çekmek istediğiniz ihtiyaç kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="robots" content="index,follow" />
                                <title>Çekmek istediğiniz ihtiyaç kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "konut-kredisi-hesaplama" && <>
                            <HomeCreditCalculate />

                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Konut Kredisi Hesaplama Yapın" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Çekmek istediğiniz konut kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="keyword" content="kredi hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama" />
                                <meta name="og:keyword" content="kredi hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama" />

                                <meta name="description" content="Çekmek istediğiniz konut kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="robots" content="index,follow" />
                                <title>Çekmek istediğiniz konut kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "arac-kredisi-hesaplama" && <>

                            <CarCreditCalculate />
                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Araç Kredisi Hesaplama Nasıl Yapılır" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Çekmek istediğiniz arac kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="keyword" content="kredi hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama,araç kredisi" />
                                <meta name="og:keyword" content="kredi hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama,araç kredisi" />

                                <meta name="description" content="Çekmek istediğiniz konut kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="robots" content="index,follow" />
                                <title>Çekmek istediğiniz araç kredisi hesaplama, kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "-" && <div className="row">
                            <div className="col-12 mb-3">
                                <h2>Hesaplama Araçlarımızla Neler Yapabilirsiniz? </h2><hr className="title-hr mt-1"></hr></div>

                            <p>Hesaplama sayfamız, sadece kredi ya da finansal konular değil; sizlere, sayılarla ve formüllerle uğraşıp efor sarfetmenize gerek olmadan sonuçları sunmayı hedefler.</p>
                            <p>Kullanıcının formüller yazmasınza, hesap makinasını eline almasına gerek yok. <br></br>
                                Hesaplama sayfamız, kullanıcıdan belirli bilgileri alır ve hesaplar. </p>
                            <div className="col-12 p-0">

                                <CreditCalculate></CreditCalculate>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-12 col-md-3 col-lg-3">
                    <div className="col-12 mb-3">
                        <h4>Hesaplama Araçları</h4><hr className="title-hr mt-1"></hr></div>
                    <ul className="list-group">


                        {links.map((item, key) => {
                            let active = ""
                            if (item.urlName == props.UrlName) {
                                active = "active"
                            }
                            return (<a key={key} href={props.UrlName == "-" ? ("/hesaplama/" + item.urlName) : ("/hesaplama/" + item.urlName)} className={"list-group-item col-12 text-center mb-3 " + active}>{item.name}</a>)
                        })}
                        <a  href={"/kredi-hesaplama"} className={"list-group-item col-12 text-center mb-3 "}>Kredi Hesaplama</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CalculatePage
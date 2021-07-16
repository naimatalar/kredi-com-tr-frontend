import React, { createRef, useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { CreditCalculate } from "../Components/calculate-page/CreditCalculate"
import { HowToPay } from "../Components/calculate-page/HowToPay"
import HowMuchLoan from "../Components/containers/HowMuchLoan"


export const CalculatePage = (props) => {
    const [selectedLink, setSelectedLinks] = useState({
        name: "",
        urlName: "",
        description: ""
    })
    const [links, setLinks] = useState([
        {
            name: "Kredi Hesaplama",
            urlName: "kredi-hesaplama",
            description: "Bu araç kredi faiz oranı girerek hesaplama yapmanızı sağlar."
        },
        {
            name: "Aylık Ne Kadar Ödeyebilirim?",
            urlName: "aylik-ne-kadar-odeyebilirim",
            description: "Ne karar kredi çekebileceğinizi hesaplar. Ve size uygun kredileri bulur"

        },

    ])

    useEffect(() => {
        setSelectedLinks(links.find(x => { return x.urlName == props.UrlName }))
    }, [])
    return (
        <div className="master-content">

            <div className="row col-12 justify-content-center">
                <p className="home-title text-center" > <span style={{ fontWeight: "bold" }}>{selectedLink?.name}</span> <br></br> {selectedLink?.description} </p>

            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-9 col-lg-9 calculate-pages-s">
                    {
                        props.UrlName == "aylik-ne-kadar-odeyebilirim" && <>
                            <HowToPay></HowToPay>
                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Aylık ne kadar kredi ödeyebileceğinizi öğrenin | kredi.com.tr" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Bu sayfa aylık ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr" />
                                <meta name="keyword" content="aylık ödeme öğrenme, aylık kredi hesaplama, aylık ne kadar kredi ödenir" />
                                <meta name="description" content="Ne kadar kredi ödeyebileceğinizi öğrenin | Bu sayfa ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr" />
                                <meta name="robots" content="index,follow" />
                                <meta property="og:image" itemProp="image" content={require("../assets/images/thn.jpg").default} />
                                {/* <link rel="apple-touch-icon" href={require("../assets/images/thn.jpg").default} /> */}

                                <title>Ne kadar kredi ödeyebileceğinizi öğrenin | Bu sayfa ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "kredi-hesaplama" && <>
                            <CreditCalculate></CreditCalculate>

                            <Helmet>
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content="Bu sayfa kredinizi faiz oranıyla beraber hesaplamasını yapar | kredi.com.tr" />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:description" content="Çekmek istediğiniz kredinin faiz oranını girerek kredinin bütün detaylarını öğrenin | kredi.com.tr" />
                                <meta name="keyword" content="kredi,hesaplama,faiz oranıyla hesaplama,kredi faiz hesaplama, aylık ödeme hesaplama" />
                                <meta name="description" content="Ne kadar kredi ödeyebileceğinizi öğrenin | Bu sayfa ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr" />
                                <meta name="robots" content="index,follow" />
                                <title>Ne kadar kredi ödeyebileceğinizi öğrenin | Bu sayfa ödeyebileceğiniz kredileri hesaplar ve listeler | kredi.com.tr</title>
                            </Helmet>
                        </>
                    }
                    {
                        props.UrlName == "-" && <div className="row">
                            <div className="col-12 mb-3">
                                <h2>Hesaplama Araçlarımızla Neler Yapabilirsiniz </h2><hr className="title-hr mt-1"></hr></div>

                            <p>Hesaplama sayfamız sadece kredi yada finansal konular değil, sizleri sayılar ve formüllerle uğraşıp efor sarfetmenize gerek olmadan sonuçları sizlere sunmayı hedefler</p>
                            <p>Kullanıcının formüller yazmasınza hesap makinasını eline almasına gerek yok. <br></br>
                                Hesaplama sayfamız kullanıcıdan belirli bilgileri alır ve hesaplar. </p>
                            <div className="row col-12">

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
                            return (<a href={props.UrlName == "-" ? ("/hesaplama/" + item.urlName) : ("/hesaplama/" + item.urlName)} className={"list-group-item col-12 text-center mb-2 " + active}>{item.name}</a>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
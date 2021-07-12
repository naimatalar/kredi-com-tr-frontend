import React, { createRef, useEffect, useRef, useState } from "react"
import { CreditCalculate } from "../Components/calculate-page/CreditCalculate"
import { HowToPay } from "../Components/calculate-page/HowToPay"
import HowMuchLoan from "../Components/containers/HowMuchLoan"


export const CalculatePage = (props) => {
    const [links, setLinks] = useState([
        { name: "Kredi Hesaplama", urlName: "kredi-hesaplama" },
        { name: "Aylık Ne Kadar Ödeyebilirim?", urlName: "aylik-ne-kadar-odeyebilirim" },

    ])
    return (
        <div className="master-content">
            <div className="row col-12 justify-content-center">
                <p className="home-title text-center" > <span style={{ fontWeight: "bold" }}>Sizi sayılardan kurtarıyoruz, <br /></span> Çeşitli <span style={{ fontWeight: "bold" }}>Hesap Araçlarımızla </span> bütce hesabınızı kolayca yapın.  </p>

            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-9 col-lg-9 calculate-pages-s">
                    {
                        props.UrlName == "aylik-ne-kadar-odeyebilirim" && <HowToPay></HowToPay>
                    }
                             {
                        props.UrlName == "kredi-hesaplama" && <CreditCalculate></CreditCalculate>
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
                            return (<a href={props.UrlName == "-" ? ("hesaplama/" + item.urlName) : (item.urlName)} className={"list-group-item col-12 text-center mb-2 " + active}>{item.name}</a>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
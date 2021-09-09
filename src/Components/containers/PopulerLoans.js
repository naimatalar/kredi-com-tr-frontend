import React, { useEffect, useState } from "react";
import Image from "react-image-webp";
import { apiConstant, GetNoneToken } from "../../datacrud/datacrud";
export const PopulerLoans = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        start()
    }, [])
    const start = async () => {
        var data = await GetNoneToken("PopulerLoans/GetAllSite").then(x => { return x.data }).catch(x => { return false })
        setData(data)
    }

    return (

        <div>
            <div className="populer-loan-container">
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        <Image title="öne çıkan krediler kredi.com.tr" alt="popüler krediler " style={{ width: 22, marginRight: 5 }}
                            webp={require("../../assets/images/mck.webp").default}
                            src={require("../../assets/images/mck.png").default}></Image>
                        Öne Çıkan
                        Krediler

                    </p>
                </div>
                <div className="container">
                    <div className="row row-container" >
                        {data?.map((item, index) => {
                            var isLast = data.length == index + 1;

                            return (
                                <div key={index} className="row loan-item" style={!isLast ? { borderBottom: "1px solid black" } : {}}>
                                    <div className="col-3 ">
                                        <img title={item.bankName + " popüler " + item.loanType + " kredi.com.tr"} alt={item.bankName + " popüler " + item.loanType + " öne çıkan"} src={apiConstant + "/StaticF" + item.logo} style={{ width: "100%", }}></img>
                                    </div>
                                    <div className="col-5 ">
                                        <span>{item.loanType} {item.amount}TL</span>
                                    </div>
                                    <div className="col-4 ">
                                        <a href={"/bankalar/" + item.bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + item.amount + "&term=" + item.term + "&loanId=" + item.interestRateId + ""} style={{ textDecoration: "none", fontWeight: "bold" }}><span>{item.term} Ay Vade {">"} </span></a>
                                    </div>
                                </div>

                            )



                        })}


                    </div>
                    <div style={{ marginTop: 15 }}>
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>
                            <Image title="kredi kartları" alt="kredi kartları kredi.com.tr" style={{ width: 22, marginRight: 5 }}
                                webp={require("../../assets/images/debit.webp").default}
                                src={require("../../assets/images/debit.png").default}></Image>
                            Kredi kartları
                        </p>
                    </div>
                    <div className="container">
                        <div className="row debit-buttons">
                            <div className="col-6">
                                <a href="/kredi-karti/mil-veren-kredi-kartlari" style={{ background: "#78579a" }}>
                                    <Image title="kredi kartları, mil veren kartlar" alt="mil veren kredi kartları kredi.com.tr" style={{ width: 18, marginRight: 5 }}
                                        webp={require("../../assets/images/fly-white.webp").default}
                                        src={require("../../assets/images/fly-white.png").default}></Image>
                                    <span style={{ color: "white" }}>Mil veren kartlar</span>
                                </a>
                            </div>

                            <div className="col-6">
                                <a href="/kredi-karti/puan-veren-kredi-kartlari" style={{ background: "#579a88" }}>
                                    <Image title="kredi kartları, puan veren kredi kartları" alt="puan veren kredi kartları kredi.com.tr" style={{ width: 22, marginRight: 5 }}
                                        webp={require("../../assets/images/score.webp").default}
                                        src={require("../../assets/images/score.png").default}></Image>
                                    <span style={{ color: "white" }}>Puan veren kartlar</span>
                                </a>
                            </div>

                            <div className="col-6">
                                <a href="/kredi-karti/ticari-kredi-kartlari" style={{ background: "#9a5779" }}>
                                    <Image title="kredi kartları, ticari kredi kartları" alt="ticari kredi kartları kredi kartları kredi.com.tr" style={{ width: 22, marginRight: 5 }} 
                                    webp={require("../../assets/images/corporate.webp").default}
                                    src={require("../../assets/images/corporate.png").default}></Image>
                                    <span style={{ color: "white" }}>Ticari kartlar</span>
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="/kredi-karti">
                                    <Image title="kredi kartları, tüm kredi kartları" alt="tüm kredi kartları kredi.com.tr" style={{ width: 22, marginRight: 5 }} 
                                    webp={require("../../assets/images/debit.webp").default}
                                    src={require("../../assets/images/debit.png").default}></Image>
                                    <span>Tüm kredi kartları</span>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
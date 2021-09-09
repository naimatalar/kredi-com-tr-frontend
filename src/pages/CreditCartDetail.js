import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { creditCartRedirect } from "../Components/RedirectComponent"
import { apiurl, GetNoneToken } from "../datacrud/datacrud"
 const CreditCartDetail = (props) => {
    const [data, setData] = useState({})
    const [attributas, setAttributes] = useState([])

    useEffect(() => {
        start();

    }, [])

    const start = async () => {

        const d = await GetNoneToken("CreditCarts/GetById/" + props.data.id).then(x => { return x.data }).catch(x => { return false })
        setData(d)
        try {

            setAttributes(JSON.parse(d.cartInfo))

        } catch (error) {

        }

    }
    return (
        <div className="master-content">
            <Helmet>
                <meta name="og:image" content={apiurl + data?.logo}></meta>
                <meta name="twitter:image" content={apiurl + data?.logo}></meta>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={data?.bank +" "+data?.name + " Kredi Kartı"} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description"  content={"Kredi Kartı Detayları :"+data?.bank +" "+data?.name + " Kredi Kartı , "+(data?.yearlyUsingAmount == 0 ? "Ücretsiz" : data?.yearlyUsingAmount + " TL")}  />
                <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
                <meta name="twitter:title"  content={data?.bank +" "+data?.name + " Kredi Kartı"}  />
                <meta name="twitter:description"  content={"Kredi Kartı Detayları :"+data?.bank +" "+data?.name + " Kredi Kartı , "+(data?.yearlyUsingAmount == 0 ? "Ücretsiz" : data?.yearlyUsingAmount + " TL")} />
                <meta name="description"  content={"Kredi Kartı Detayları :"+data?.bank +" "+data?.name + " Kredi Kartı , "+(data?.yearlyUsingAmount == 0 ? "Ücretsiz" : data?.yearlyUsingAmount + " TL")}/>
                <meta name="robots" content="index,follow" />
                <title>{data.bank +" - "+data.name + " Kredi Kartı"} </title>
            </Helmet>
            <div className="row credit-cart-content" >
                <div className="col-12 col-md-4">
                    <img src={apiurl + data.logo} alt={ data.name + " Kredi Kartı"} style={{ width: "90%" }}></img>
                </div>
                <div className="col-12 col-md-8 row cart-master-info pt-4">
                    <div className="row col-12" style={{
                        textAlign: "left", textAlign: "left",
                        borderBottom: "1px solid #bfbfbf"
                    }}>

                        <div className="col-12" style={{ color: "grey", fontSize: 25, fontWeight: "bold" }}>
                            {data.name} Kredi Kartı
                        </div>
                        <div className="col-12" style={{ color: "grey", fontSize: 20 }}>
                            {data.bank}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{ color: "grey", fontWeight: "bold" }}>Atm Sayısı</div>
                        <div className="col-12" style={{ color: "black" }}>{data.atmcount}</div>
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{ color: "grey", fontWeight: "bold" }}>Alışveriş Faizi</div>
                        <div className="col-12" style={{ color: "black" }}>{data.shopRate}</div>
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{ color: "grey", fontWeight: "bold" }}>Üye İşyeri Sayısı</div>
                        <div className="col-12" style={{ color: "black" }}>{data.memberBussiness}</div>
                    </div>
                    <div className="row col-12 justify-content-between mt-5 card-detail-button-text">
                        <div className="row col-6">
                            <div className="col-12" style={{ color: "grey", fontWeight: "bold", fontSize: 25 }}>Yıllık Kullanım Ücreti</div>
                            <div className="col-12" style={{ color: "black", fontWeight: "bold", fontSize: 25 }} >{data.yearlyUsingAmount == 0 ? "Ücretsiz" : data.yearlyUsingAmount + " TL"}</div>
                        </div>
                        <div className="row col-6">
                            <a className="default-button row"
                                onClick={() => creditCartRedirect(null,
                                    data.redirectUrl,
                                    data.bankId,
                                    data.id,
                                    {
                                        bankName: data.bank,
                                        CreditCartName: data.name
                                    })}

                                style={{
                                    fontSize: 23, maxHeight: 60, color: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer"
                                }}>Başvur</a>
                        </div>
                    </div>
                </div>




            </div>

            <div className="row" style={{ textAlign: "center", color: "black" }}>
                {data.description}

            </div>
            <div className="row mt-5">
                <div style={{
                    color: "black",
                    fontSize: 25
                }}>Kart Bilgileri</div>
                <div className=" row justify-content-center col-12">
                    <div className="col-12 col-md-12 row cart-master-info pt-4 ">
                        {
                            attributas?.map((item, key) => {

                                return (
                                    <>
                                        <div key={key} className="col-12 col-md-3 col-lg-3 mb-3" >
                                            <div className="col-12" style={{ borderBottom: "2px solid #d8d8d8", color: "grey" }}>
                                                {item.Key}
                                            </div>
                                            <div key={key} className="col-12 " style={{ color: "black", fontWeight: "bold" }}>
                                                {item.Value}
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CreditCartDetail
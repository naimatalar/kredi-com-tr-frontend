import React, { createRef, useCallback, useEffect, useRef, useState } from "react"
import { apiurl, GetNoneToken } from "../datacrud/datacrud";
import { BottomScrollListener, useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Helmet } from "react-helmet";

export const Blog = (props) => {
    const [blog, setBlog] = useState([]);
    const [page, setPage] = useState(1);
    const [isBottom, setIsBottum] = useState(true);
    const [isOk, setIsOk] = useState(false);
    const [loanding, setLoanding] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        start();
        // document.addEventListener('scroll', Scroll);
    }, [])
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const Scroll = async (dd) => {


        setIsBottum(false)
        if (isBottom) {
            setLoanding(true)
            await sleep(1000)

            if (isOk == false) {
                setPage(page + 1)

                var data = await GetNoneToken("Blogs/GetAllSite/" + (page + 1) + "/" + query).then(x => { return x.data }).catch(x => { return false })
                let blogAds = blog;
                for (const i of data.data) {
                    blogAds.push(i)
                }


                setIsOk(data.isOk)
                setIsBottum(true)
                setBlog(blogAds)

            }
            setLoanding(false)
        }

    }
    const scrollRef = createRef()

    const start = async () => {

        var data = await GetNoneToken("Blogs/GetAllSite/" + page + "/" + query).then(x => { return x.data }).catch(x => { return false })
        setBlog(data.data)
    }

    return (<div className="master-content">

        <Helmet>
            <meta property="og:type" content="article" />
            <meta property="og:title" content="KREDİ.COM.TR | Finans Dünyasını Takip Edip Sizlerle Paylaşıyoruz." />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:description" content="KREDİ.COM.TR | En uygun kredi fırsatlarını kredi.com.tr ayrıcalığı ile sizlerle buluşturuyoruz. Finans dünyasını yakından takip edip sizleri haberdar ediyoruz." />
            <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
            <meta name="description" content="KREDİ.COM.TR | En uygun kredi fırsatlarını kredi.com.tr ayrıcalığı ile sizlerle buluşturuyoruz. Finans dünyasını yakından takip edip sizleri haberdar ediyoruz." />
            <meta name="robots" content="index,follow" />
            <title>KREDİ.COM.TR | Finans dünyasını takip edip sizlerle paylaşıyoruz.</title>
        </Helmet>


        <div className="row mt-1">

            <BottomScrollListener offset={300} onBottom={Scroll}>
                {(scrollRef) =>
                    <div className="col-12 col-md-8 col-lg-8  " id="fillmts" style={{
                        background: "white",
                        padding: 33
                    }}>
                        <div className="mb-4"><h4 style={{ color: "black", textAlign: "center" }}> Sizin için <b>araştırıyor, analiz ediyor ve paylaşıyoruz</b>.</h4></div>

                        {blog?.map((item, key) => {
                            return (<div key={key} className="pb-2 pt-2 col-12 row align-items-center blog-list-item justify-content-between">
                                <div className="col-12 col-md-2">
                                    <img alt={item.title} title={item.title} className="blog-image" src={apiurl + item.imageUrl}></img>
                                </div>
                                <div className="col-12 col-md-7" style={{ color: "black" }}>
                                    <div style={{ color: "black", fontSize: 20 }}> {item.title}</div>
                                    <div> <i style={{ color: "grey", fontSize: 12 }}>{item.date} </i></div>

                                </div>
                                <div className="col-12 col-md-2 text-center" style={{ color: "black" }}>
                                    <a className="default-button" style={{ width: "100%", display: "block" }} href={"/haberler-bilgiler/" + item.urlName}>OKU</a>
                                </div>

                            </div>)
                        })}
                        {
                            loanding &&
                            <div className="col-12 row justify-content-center">
                                <img style={{ width: 350 }} src={require("../assets/images/loading.gif").default}></img>
                            </div>

                        }
                    </div>}
            </BottomScrollListener>
            <div className="col-12 col-md-3 col-lg-4" style={{ paddingLeft: 40 }}>
                <div className="row mt-4">

                    <div className="col-12 row justify-content-between">
                        <div className="col-8 p-0">
                            <input type="text" onChange={(e) => { setQuery(e.target.value) }} style={{
                                padding: "5px 0px 7px 12px",
                                width: "100%"
                            }} placeholder="Arama"></input>
                        </div>
                        <div className="col-4 row">
                            <button onClick={() => { start() }} type="text" className="default-button" style={{ width: "100%" }} >Ara</button>
                        </div>
                    </div>


                </div>

                <div className="col-12 row mt-3" style={{
                    background: "white",
                    padding: "31px 0 47px 0px",
                    border: "1px solid #d8d8d8",
                }}>
                    <div className="col-12 " style={{ borderBottom: " 1px solid #bfbfbf" }}>
                        <h5>Haberdar Olun.</h5>
                        <hr className="title-hr mt-1"></hr>
                    </div>
                    <div className="col-12 text-center mt-2" style={{ color: "black", fontSize: 14 }} >
                        Kredi, kredi kartı, mevduat ve finansla ilgili bütün
                        araştırmalarımızdan haberdan olmak işin mail adresinizi yazabilirsiniz.


                    </div>
                    <div className="col-12 justify-content-center   mt-3"  >

                        <input placeholder="Mail adresinizi giriniz" style={{ fontSize: 12 }} className="col-8" type="text"></input>
                        <button className="default-button col-4" style={{
                            fontSize: 13,
                            height: 35
                        }}>
                            Gönder
                        </button>
                    </div>
                </div>
                <div className="col-12 row mt-5 pt-3 bank-list-blog" style={{
                    background: "white",
                    padding: "31px 20px 47px 20px",
                    border: "1px solid #d8d8d8",
                }}>
                    <div className="col-12 p-0">
                        <h5>Banka Ürünleri.</h5>
                        <hr className="title-hr mt-1"></hr>

                    </div>
                    {props.Banks.slice(0, 5).map((item, key) => {
                        return (
                            <div key={key} className="row mb-4" style={{ borderTop: " 1px solid #dadada", paddingTop: 9 }}>
                                <div className="col-3 p-1"><img src={apiurl + item.logoUrl} alt={item.bankName + " bilgiler"} title={item.bankName + " bilgiler"} style={{ width: "100%" }}></img> </div>
                                <div className="col-3 p-0" style={{
                                    color: "black",
                                    fontSize: 9,
                                    textAlign: "center"
                                }}>
                                    <div>ihtiyaç Kredisi <br /> <span style={{ fontWeight: "bold", color: "#077a68" }}>Faiz Oranı</span></div>
                                    <div style={{ fontWeight: "bold", color: "#077a68" }}>{item?.loanRate?.value ?? <span>-</span>}</div>
                                </div>
                                <div className="col-2 p-0" style={{
                                    color: "black",
                                    fontSize: 9,
                                    textAlign: "center"
                                }}>
                                    <div>Kredi KArtı</div>
                                    {(item?.creditCartCount == 0 ? <span>-</span> : <span style={{ fontWeight: "bold", color: "#077a68" }}>{item?.creditCartCount} adet</span>)}
                                </div>
                                <div className="col-2 p-0" style={{
                                    color: "black",
                                    fontSize: 9,
                                    textAlign: "center"
                                }}>
                                    <div style={{ fontWeight: "normal" }}>Mevduat</div>
                                    {(item?.creditCartCount == 0 ? <span>-</span> : <span style={{ fontWeight: "bold", color: "#077a68" }}> {item?.creditCartCount} adet </span>)}
                                </div>
                                <div className="col-2 p-0" style={{
                                    color: "black",
                                    fontSize: 9,
                                    textAlign: "center"
                                }}>
                                    <a style={{ fontSize: 14, color: "#0089ff", fontWeight: "bold", borderBottom: "1px solid" }} href={"bankalar/" + item.bankUrlName}>İncele</a>
                                </div>

                            </div>


                        )
                    })}
                </div>
            </div>
        </div>

    </div>)
}
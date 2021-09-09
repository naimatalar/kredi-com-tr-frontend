import React, { createRef, useEffect, useRef, useState } from "react"
import HowMuchLoan from "../Components/containers/HowMuchLoan";
import { apiurl, GetNoneToken } from "../datacrud/datacrud";
import { LoanRate } from "../Components/containers/LoanRate";
import { Helmet } from "react-helmet";

const BlogDetail = (props) => {

    const [data, setData] = useState({});
    const [blog, setBlog] = useState([]);
    const [creditCart, setCreditCart] = useState([]);

    var HtmlToReactParser = require('html-to-react').Parser;

    useEffect(() => {
        start()

    }, [])

    const start = async () => {

        let ccData = await GetNoneToken("Blogs/GetAllWebSiteByUrlName/" + props.location.pathname.split("/")[2]).then(x => { return x.data }).catch(x => { return false })
        let blogList = await GetNoneToken("Blogs/get4Blog").then(x => { return x.data }).catch(x => { return false })
        let creditCart = await GetNoneToken("CreditCarts/GetOnlyFive").then(x => { return x.data }).catch(x => { return false })

        setCreditCart(creditCart)
        console.log(creditCart)
        setBlog(blogList)
        setData(ccData)

    }

    return (

        <div className="master-content">

            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={"KREDİ.COM.TR | " + data?.title} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content={data?.title} />
                <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, faiz oranı, başvuru, kampanya" />
                <meta name="description" content="Kredi.com.tr ile Kredi ürünleri, kredi kartları ve mevduatlatı arayıp karşılaştırarak başvurabilirsiniz. Türkiye'nin Kredi Başvuru Merkezi | KREDİ.COM.TR" />
                <meta name="robots" content="index,follow" />
                <link rel="apple-touch-icon" href={apiurl + data?.imageUrl} />
                <meta property="og:image" itemProp="image" content={apiurl + data?.imageUrl} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data?.title} />
                <meta name="twitter:description" content="kredi.com.tr Kolayca Arayın, Pratik Şekilde Hesaplayın, Hızlıca Başvurun" />
                <meta name="twitter:url" content={window.location.href} />
                <meta name="twitter:image" content={apiurl + data?.imageUrl} />

                <title>KREDİ.COM.TR | {data?.title ?? ""} </title>
            </Helmet>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-8 pl-4 pt-5" id="fillmts" style={{ background: "white" }}>
                    <h3 style={{ color: "black", textAlign: "center" }}>{data.title}</h3>
                    {/* <div style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: data.content }}></div> */}

                    <div className="mt-5 ignrcss se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable" style={{ background: "none" }}>
                        {new HtmlToReactParser().parse(data.content)}

                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 pr-0 pl-5">
                    <div className="mb-3 mt-2">Başlıca Haberler </div>
                    <hr className="title-hr"></hr>
                    <div className="col-12">
                        {blog.map((item, key) => {
                            return (
                                <div key={key} className="col-12 row mb-3 blog-detail-item">

                                    <div className="col-3 p-0">
                                        <img src={apiurl + item.imageUrl} style={{ width: "100%" }}></img>
                                    </div>
                                    <div className="col-7 p-0 pl-2 pr-1" style={{ fontSize: 13, color: "black" }}>
                                        {item.title}
                                        <br></br>
                                        <i style={{ color: "grey" }}>{item.date}</i>
                                    </div>
                                    <div className="col-2 row p-0" style={{
                                        justifyContent: "flex-end",
                                        alignItems: "center"
                                    }}>
                                        <a href={"/haberler-bilgiler/" + item.urlName}><b>Oku</b></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 p-0  mt-5">
                        {

                            creditCart.map((item, key) => {
                                var jsondata = item.cartInfoJson;
                                return (
                                    <div key={key} className="col-12 row mb-5 blog-page-credit-cart-item">
                                        <div className="credit-cart-blog-page row">

                                            <div className="col-6 p-0 m-0 mb-2">
                                                <img src={apiurl + item.logoUrl} style={{ width: "100%" }}></img>
                                            </div>
                                            <div className="col-6 p-0 ">
                                                <p style={{color:"black",fontSize:12}}>Yıllık Kullanım Ücreti :<b>{item.yearlyUsingAmount} TL</b></p>
                                                <a className="default-button" style={{width:"100%",display:"block",textAlign:"center"}} href={"/" + item.bankUrlName + "/" + item.urlName}> Detay </a>
                                            </div>
                                            {
                                                jsondata?.map((jitem, jkey) => {
                                                    return (

                                                        <div className="col-12 row credit-cart-detail " key={jkey}>
                                                            <div className="col-6 ">
                                                                <b> {jitem.key}</b>  :
                                                            </div>
                                                            <div className="col-6 ">
                                                                {jitem.value}
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            }

                                        </div>
                                        <div className="col-12 mt-2">
                                            <a className="blog-credit-cart-detail-button" href={"/" + item.bankUrlName + "/" + item.urlName}><b style={{ color: "blue" }}>Devamı...</b></a>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                    <div className="col-12 p-0  mt-2">
                        <HowMuchLoan></HowMuchLoan>
                    </div>
                    <div className="col-12 p-0  mt-2">
                        <LoanRate></LoanRate>
                    </div>


                </div>

            </div>

        </div>


    )
}
export default BlogDetail
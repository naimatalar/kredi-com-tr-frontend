import React, { createRef, useEffect, useState } from 'react';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { Helmet } from 'react-helmet';
import { apiurl, GetNoneToken } from '../datacrud/datacrud';

const CreditCartCampaing = (props) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [yillikUcret, setYillikUcret] = useState(null)
    const [kartTipi, setKartTipi] = useState([])
    const [bank, setBank] = useState([])

    const [isBottom, setIsBottum] = useState(true);
    const [isOk, setIsOk] = useState(false);
    const [loanding, setLoanding] = useState(false);
    const [banklistFilter, setBanklistFilter] = useState([{ name: "", logoUrl: "" }])


    useEffect(() => {
        start()

    }, [])
    const scrollRef = createRef()

    const changeFilter = async (data) => {
        var bnk = document.getElementsByClassName("bankCheckbox")

        let bnks = [];
        for (let key of bnk) {
            if (key.checked) {
                bnks.push(key.value)
            }
        }
        setBank(bnks)


        var typ = document.getElementsByClassName("cartTypeCheckbox")

        let catrtType = [];
        for (let key of typ) {
            if (key.checked) {
                catrtType.push(key.value)
            }
        }
        setKartTipi(catrtType)

        // var yusing = document.getElementsByClassName("yearlyUsingCheckbox")


        // for (let key of yusing) {
        //     if (key.checked) {

        //         setYillikUcret(key.value == "" ? null : key.value)
        //     }
        // }

    }

    const filterFunc = async () => {

        let prm = new URLSearchParams()


        if (yillikUcret != null) {

            prm.set("yillikucret", yillikUcret)
        }
        if (kartTipi.length > 0) {
            var list = ""
            kartTipi.map((item, key) => {
                list += item + (key < kartTipi.length - 1 ? "." : "")
            })

            prm.set("karttipi", list)
        }
        if (bank.length > 0) {
            var list = ""
            bank.map((item, key) => {
                list += item + (key < bank.length - 1 ? "." : "")
            })
            prm.set("banka", list)
        }
        var elmnt = document.getElementsByTagName("html")[0];
        elmnt.scrollTop = 0;
        props.history.push(window.location.pathname + "?" + prm)
        props.history.go()

    }

    const start = async () => {



        let ccData = await GetNoneToken("CreditCartCampaigns/GetAllBySite?sayfa=" + page + props.location.search.replace("?", "&")).then(x => { return x.data }).catch(x => { return false })

        setData(ccData.data)
        setIsOk(ccData.isOk)

        let b = await GetNoneToken("CreditCartCampaigns/getBank").then(x => { return x.data }).catch(x => { return false })

        bankListFill(b)
        let prm = new URLSearchParams(props.location.search)
        var bnk = prm.get("banka")?.split(".")
        var karttp = prm.get("karttipi")?.split(".")
        var yillik = prm.get("yillikucret")
        if (yillik == "true") {
            yillik = true
        } else if (yillik == "false") {
            yillik = false
        } else if (yillik == undefined) {
            yillik = null
        }


        setYillikUcret(yillik)
        setKartTipi(karttp == undefined ? [] : karttp)
        setBank(bnk == undefined ? [] : bnk)




    }
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


    const bankListFill = (data) => {

        let bankList = [{ name: "", logoUrl: "" }]
        for (let key of data) {

            let bankl = bankList.filter((x) => { return x.name == key.bankUrlName }).length;
            if (bankl == 0) {
                bankList.push({ name: key.bankUrlName, logoUrl: key.bankLogo })
            }
        }
        setBanklistFilter(bankList)
    }


    const Scroll = async (dd) => {

        setIsBottum(false)
        if (isBottom) {



            if (isOk == false) {
                setLoanding(true)
                await sleep(1000)

                setPage(page + 1)

                let d = await GetNoneToken("CreditCartCampaigns/GetAllBySite?sayfa=" + (page + 1) + props.location.search.replace("?", "&")).then(x => { return x.data }).catch(x => { return false })
                let blogAds = data;
                for (const i of d.data) {
                    blogAds.push(i)
                }

                setIsOk(d.isOk)
                setIsBottum(true)
                setData(blogAds)

            }
            setLoanding(false)

        }


    }


    return (
        <div className="master-content">

            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="KREDİ.COM.TR | Kredi kartı kampanyalarına hemen başvur." />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="KREDİ.COM.TR | Düzinelerce kredi kartına ait binlerce kampanya. Yemek, alışveriş, akaryakıt ve daha birçok alanda kampanya başvurmanız için sizleri bekliyor" />
                <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
                <meta name="og:keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />

                <meta name="description" content="KREDİ.COM.TR | Düzinelerce kredi kartına ait binlerce kampanya. Yemek, alışveriş, akaryakıt ve daha birçok alanda kampanya başvurmanız için sizleri bekliyor." />
                <meta name="robots" content="index,follow" />

                <title>KREDİ.COM.TR | Kredi kartı kampanyalarına hemen başvur.</title>
            </Helmet>


            <div className="row mt-3 pb-5">
                <div className="col-12 col-md-3 col-lg-3 mt-3" style={{ paddingLeft: 40 }}>
                    <h5 className="mb-4"><b style={{ color: "#525252", fontStyle: "italic" }} >Filtreleme</b></h5>
                    <h6><b>Kart Türü</b></h6>
                    <hr style={{ borderColor: "#077a68", marginTop: 14 }} />
                    <div className="col-12 mb-4" style={{ padding: 0 }}>


                        <div style={{ padding: 7 }}>
                            <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                <input className="cartTypeCheckbox" checked={kartTipi.includes("point")} value="point" onChange={(element) => changeFilter(element)} style={{ width: 22, height: 22, float: 'left' }} type="checkbox"></input>
                                <span className="filter-campaign">Puan Veren Kartlar</span>
                            </label>
                        </div>
                        <div style={{ padding: 7 }}>
                            <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                <input className="cartTypeCheckbox" checked={kartTipi.includes("miles")} value="miles" onChange={(element) => changeFilter(element)} style={{ width: 22, height: 22, float: 'left' }} type="checkbox"></input>
                                <span className="filter-campaign">Mil Veren Kartlar</span>
                            </label>
                        </div>
                        <div style={{ padding: 7 }}>
                            <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                <input className="cartTypeCheckbox" checked={kartTipi.includes("corporate")} value="corporate" onChange={(element) => changeFilter(element)} style={{ width: 22, height: 22, float: 'left' }} type="checkbox"></input>
                                <span className="filter-campaign">Ticari Kartlar</span>
                            </label>
                        </div>
                    </div>
                    <h6><b>Yıllık Kullanım Ücreti</b></h6>
                    <hr style={{ borderColor: "#077a68", marginTop: 14 }} />
                    <div className="col-12 mb-5" style={{ padding: 0 }}>

                        <form>
                            <div style={{ padding: 5 }}>
                                <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                    <input name="yearlyUsing" className="yearlyUsingCheckbox" checked={yillikUcret === false} onClick={(element) => setYillikUcret(false)} style={{ width: 22, height: 22, float: 'left' }} type="radio"></input>
                                    <span className="filter-campaign">Yok</span>
                                </label>
                            </div>
                            <div style={{ padding: 5 }}>
                                <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                    <input name="yearlyUsing" className="yearlyUsingCheckbox" checked={yillikUcret === true} onClick={(element) => setYillikUcret(true)} style={{ width: 22, height: 22, float: 'left' }} type="radio"></input>
                                    <span className="filter-campaign">Var</span>
                                </label>
                            </div>
                            <div style={{ padding: 5 }}>
                                <label style={{ marginBottom: 0, cursor: "pointer" }}>

                                    <input name="yearlyUsing" className="yearlyUsingCheckbox" checked={yillikUcret === null} onClick={(element) => setYillikUcret(null)} style={{ width: 22, height: 22, float: 'left' }} type="radio"></input>
                                    <span className="filter-campaign">Hepsi</span>
                                </label>
                            </div>

                        </form>


                    </div>

                    <h6><b>Bankalar</b></h6>
                    <hr style={{ borderColor: "#077a68", marginTop: 14 }} />
                    <div className="col-12" style={{ padding: 0 }}>
                        {
                            banklistFilter.map((item, key) => {
                                if (item.name == "") {
                                    return (null)
                                }
                                let bg = "";
                                if (key % 2 != 0) {
                                    bg = "#e4e4e4"
                                }
                                return (
                                    <div key={key} style={{ marginBottom: 13, background: bg, padding: 10 }}>
                                        <label style={{ marginBottom: 0, cursor: "pointer" }}>
                                            <input value={item.name} className="bankCheckbox" checked={bank.includes(item.name)} onChange={(element) => changeFilter(element)} style={{ width: 22, height: 22 }} type="checkbox"></input>
                                            <img alt={item.name + "bütün kredi kartları listele"} title={item.name + " kredi kartları listele"} style={{ width: 120, marginLeft: 10, marginTop: -13 }} src={apiurl + item.logoUrl}></img>
                                        </label>
                                    </div>
                                )

                            })
                        }
                    </div>

                    <div className="col-12 row">
                        <button onClick={() => { filterFunc() }} className="default-button">Filtrele</button>
                    </div>

                </div>
                <BottomScrollListener offset={300} onBottom={Scroll}>
                    {(scrollRef) =>
                        <div className="col-12 col-md-9 col-lg-9  " id="fillmts" style={{
                            background: "white",
                            padding: 33
                        }}>
                            <div className="mb-2"><h4 style={{ color: "black", textAlign: "center" }}> Binlerce  <b>kredi kartı kampanyalarını </b> sizler için bulduk.</h4></div>
                            <div className="mb-4"><h3 style={{ color: "black", textAlign: "center" }}> Hemen  <b>Başvur </b> </h3></div>

                            {data?.map((item, key) => {
                                return (<div key={key} className="pb-2 pt-2 col-12 row align-items-center blog-list-item justify-content-between">
                                    <div className="col-12 col-md-2">
                                        <img className="blog-image" src={apiurl + item.imageUrl}></img>
                                    </div>
                                    <div className="col-12 col-md-10" style={{ color: "black" }}>
                                        <div style={{ color: "black", fontSize: 20 }}> {item.title}</div>
                                        <div> <i style={{ color: "grey", fontSize: 12 }}>{item.date} </i></div>
                                        <a style={{ float: "right", marginTop: 7, textDecoration: "underline" }} href={"/kredi-karti-kampanyalari/kampanya-detaylari?src=" + item.stringId}>Detay için tıklayınız </a>
                                    </div>


                                </div>)
                            })}
                            {
                                loanding &&
                                <div className="col-12 row justify-content-center">
                                    <img style={{ width: 350 }} src={require("../assets/images/loading.gif").default}></img>
                                </div>

                            }
                        </div>
                    }
                </BottomScrollListener>


            </div>

        </div>
    );
}

export default CreditCartCampaing;
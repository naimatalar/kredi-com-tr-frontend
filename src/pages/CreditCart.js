import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";
import { apiurl, GetNoneToken } from "../datacrud/datacrud";
import { kredicartdata } from "../kredicartdata";
import { Helmet } from "react-helmet";
import hcbgImage from "../assets/images/bgss.jpg";
export const CreditCart = (props) => {
    const [mainKrediKartData, setMainKrediKartData] = useState([])
    const [banklistFilter, setBanklistFilter] = useState([{ name: "", logoUrl: "" }])
    const [krediKartData, setKrediKartData] = useState([])


    useEffect(() => {
        start()

    }, [props.cartType])
    const start = async () => {


        if (props.cartType == "all") {

            let ccDAta = await GetNoneToken("CreditCarts/GetAllSiteByCode/" + null).then(x => { return x.data }).catch(x => { return false })

            setMainKrediKartData(ccDAta)

            setKrediKartData(ccDAta)
            bankListFill(ccDAta);

        } else {

            let ccDAta = await GetNoneToken("CreditCarts/GetAllSiteByCode/" + props.cartType).then(x => { return x.data }).catch(x => { return false })
            setMainKrediKartData(ccDAta)
            setKrediKartData(ccDAta)
            bankListFill(ccDAta);
        }
        var bnk = document.getElementsByClassName("bankCheckbox")


        for (let key of bnk) {
            key.checked = false

        }
    }
    const bankListFill = (data) => {
        let bankList = [{ name: "", logoUrl: "" }]
        for (let key of data) {

            let bankl = bankList.filter((x) => { return x.name == key.bank }).length;
            if (bankl == 0) {
                bankList.push({ name: key.bank, logoUrl: key.bankLogo })
            }
        }
        setBanklistFilter(bankList)
    }
    const changeFilter = (data) => {
        var bnk = document.getElementsByClassName("bankCheckbox")

        let bnks = [];
        for (let key of bnk) {
            if (key.checked) {
                bnks.push(key.value)
            }
        }
        let selected = mainKrediKartData.filter((x) => { return bnks.includes(x.bank) });

        if (bnks == 0) {
            setKrediKartData(mainKrediKartData)

        } else {
            setKrediKartData(selected)
        }
    }

    return (
        <div className="ccartcontent">
            <Helmet>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Mil Kazandıran Ve Puan Veren Kredi Kartları" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:description" content="Onlarca kredi kartlarını listeledik. Mil veren kredi kartları Bol bol uçuk kazandırıyor. Diğer yandan puan biriktirilen kredi kartları ile harcayarak kazanıyorsunuz." />
                <meta name="keyword" content="kredi, kredi kartı, kredi başvurusu, kredi faiz oranı, kredi kartı başvurusu" />
                <meta name="twitter:title" content="Mil Kazandıran Ve Puan Veren Kredi Kartları" />
                <meta name="twitter:description" content= "Onlarca kredi kartlarını listeledik. Mil veren kredi kartları Bol bol uçuk kazandırıyor. Diğer yandan puan biriktirilen kredi kartları ile harcayarak kazanıyorsunuz." />
                <meta name="description" content="Onlarca kredi kartlarını listeledik. Mil veren kredi kartları Bol bol uçuk kazandırıyor. Diğer yandan puan biriktirilen kredi kartları ile harcayarak kazanıyorsunuz." />
                <meta name="robots" content="index,follow" />
                <title>{"Mil Kazandıran Ve Puan Veren Kredi Kartları | kerdi.com.tr"} </title>
            </Helmet>
            <div className="ccbanner" style={{ overflow: "hidden" }}>

            </div>
            <div className="credit-cart-head" style={{ backgroundImage: 'url('+hcbgImage+')',}} >

                <div className="row mb-4">
                    <div className="col-12" style={{ textAlign: "center", marginTop: 40 }}>
                        <h1 style={{ color: "white", textShadow: "1px 1px 5px black" }}>Kredi Kartları</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" style={{ textAlign: "center" }}>
                        <ul className="cart-type-nav">
                            <li className={props.cartType == "all" ? "active" : ""}>
                                <Link to="/kredi-karti"><img alt="Bütün kredi kartlarını" title="Bütün kredi kartlarını listele ve bul" style={{ width: 20, marginRight: 5 }} src={require("../assets/images/debit.png").default}></img>Tüm Kartlar</Link>
                            </li>
                            <li className={props.cartType == "miles" ? "active" : ""}>
                                <Link to="/kredi-karti/mil-veren-kredi-kartlari"> <img alt="Mil veren kredi kartlarını listele ve bul" title="Kullandıkça mil veren kredi kartlarını listeler" style={{ width: 18, marginRight: 5 }} src={require("../assets/images/fly-color.png").default}></img>Mil Veren Kartlar</Link>
                            </li>
                            <li className={props.cartType == "point" ? "active" : ""}>
                                <Link to="/kredi-karti/puan-veren-kredi-kartlari">  <img alt="Puan veren kartlarını listele ve bul" title="Puan biriktirip harcadıkça kazandıran puan veren kredi kartları" style={{ width: 18, marginRight: 5 }} src={require("../assets/images/scorecolor.png").default}></img>Puan Veren Kartlar</Link>
                            </li>
                            <li className={props.cartType == "corporate" ? "active" : ""}>
                                <Link to="/kredi-karti/ticari-kredi-kartlari"><img alt="Ticari kredi kartlarını bul" title="Ticari kredi kartları ile alışverişi kazançlı hale getiren ticari kredi kartları"  style={{ width: 18, marginRight: 5 }} src={require("../assets/images/corporatecolor.png").default}></img>Ticari Kartlar</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </div>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20, minHeight: "400px" }}>

                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <h6>Bankalar</h6>
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
                                                <input value={item.name} className="bankCheckbox" onChange={(element) => changeFilter(element)} style={{ width: 22, height: 22 }} type="checkbox"></input>
                                                <img alt={item.name +"bütün kredi kartları listele"} title={item.name +" kredi kartları listele"} style={{ width: 120, marginLeft: 10, marginTop: -13 }} src={apiurl + item.logoUrl}></img>
                                            </label>
                                        </div>
                                    )

                                })
                            }
                        </div>

                    </div>
                    <div className="col-md-9 col-lg-9">
                        <div className="">


                            <div className="row">


                                {krediKartData.map((item, index) => {
                                    return (
                                        <div key={index} className="lg-md-6 col-lg-6 col-sm-6 col-xs-12 " style={{ marginBottom: 35 }}>

                                            <div className="row credit-cart-item">

                                                <div className="col-8">
                                                    <h6 style={{ marginLeft: 10, color: "#ce2312" }}>{item.name}</h6>
                                                    <img alt={item.bank +" banka ait"+item.name +"  adlı kredi kartı" }  title={item.bank +" banka "+item.name +" Kredi kartı" } src={apiurl + item.logo} style={{ width: "100%" }}></img>
                                                </div>
                                                <div className="col-4" >
                                                    <b style={{
                                                        fontSize: 13,
                                                        color: "#828282"
                                                    }}>Yıllık Ücret</b>
                                                    <p style={{ marginBottom: 5 }}><b>{item.yearlyUsingAmount} ₺</b></p>
                                                    <button className="default-button" style={{
                                                        padding: 3,
                                                        fontSize: 13
                                                    }} type="submit">BAŞVUR</button>
                                                    <button className="default-button" style={{
                                                        padding: 3,
                                                        fontSize: 13,
                                                        marginTop: 14,
                                                        background: "#585858",
                                                    }} type="submit">DETAY</button>

                                                </div>
                                                <div style={{ width: "100%" }}><hr style={{ margin: "7px 0 2px 0" }}></hr></div>
                                                <div className="col-12" style={{
                                                    paddingBottom: 17, borderBottomLeftRadius: 10,
                                                    borderBottomRightRadius: 10,
                                                    background: "white"
                                                }}>

                                                    <b style={{
                                                        margin: "0px 0px 12px 28px",
                                                        display: "block",
                                                    }}>Kampanyalar</b>

                                                    {
                                                        item.campaing.map((jitem, jkey) => {
                                                            return (
                                                                <div key={jkey}>
                                                                    <img style={{
                                                                        width: 30,
                                                                        marginRight: 3,
                                                                        float: "left"

                                                                    }} src={require("../assets/images/campaigns.png").default}></img>
                                                                    <span key={jkey} style={{
                                                                        fontSize: 13,
                                                                        display: "block",
                                                                        lineHeight: "15px",
                                                                        marginBottom: 7,
                                                                        color: "black"
                                                                    }}> {jitem.title}</span>

                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    <b style={{
                                                        fontSize: 14,
                                                        color: " #616161",
                                                        marginTop: -1,
                                                        display: "block",
                                                        paddingLeft: 23,
                                                        cursor: "pointer"
                                                    }}> <i>Tüm Kampayaları Gör (+{item.campaingCount - 2})</i>  </b>
                                                </div>

                                            </div>
                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CreditCart;
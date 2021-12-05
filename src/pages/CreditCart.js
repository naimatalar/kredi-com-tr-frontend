import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";
import { apiurl, GetNoneToken } from "../datacrud/datacrud";
import { kredicartdata } from "../kredicartdata";
import { Helmet } from "react-helmet";
import hcbgImage from "../assets/images/bgss.jpg";
import { creditCartRedirect } from "../Components/RedirectComponent";
import Image from "react-image-webp";
import Rimage from "../Components/Rimage";
import Loading from "./Loading";
import ModalComponent from "../Components/modalComponent";
import Seo from "../Components/Seo"
export const CreditCart = (props) => {
    const [mainKrediKartData, setMainKrediKartData] = useState([])
    const [banklistFilter, setBanklistFilter] = useState([{ name: "", logoUrl: "" }])
    const [krediKartData, setKrediKartData] = useState([])
    const [yillikUcret, setYillikUcret] = useState(null)
    const [loading, setLoanding] = useState(true)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(0));
    const [showFilter, setShowFilter] = useState(false)

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }


    useEffect(() => {
        start()
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])
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
        setLoanding(false)
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


    const changeFilter = () => {
        var bnk = document.getElementsByClassName("bankCheckbox")

        let bnks = [];
        for (let key of bnk) {
            if (key.checked) {
                bnks.push(key.value)
            }
        }
        let selectedBase = mainKrediKartData;
        let selected = []
        if (bnks == 0) {
            selected = selectedBase
        } else {
            selected = selectedBase.filter((x) => { return bnks.includes(x.bank) });
        }


        if (yillikUcret == true) {
            selected = selected.filter((x) => { return x.yearlyUsingAmount > 0 })
        } else if (yillikUcret == false) {
            selected = selected.filter((x) => { return x.yearlyUsingAmount == 0 })
        }

        setKrediKartData(selected)

    }

    return (
        <div className="ccartcontent">
            {
                props.cartType == "all" &&
                <Seo keyword="kredi kartı,kampanyalar, kredi kartı kampanyaları," title="Kredi Kartları" description="En uygun kredi kartlarını yıllık kullanım ücretleri, kredi kartı avantajları  ve kredi kartı kampanyalarını görebilirsiniz." />

            }
            {
                props.cartType == "miles" &&
                <Seo keyword="kredi kartı, mil kazandıran kredi kartları, kredi kartı fırsatı" title="Mil Kazandıran Kredi Kartları" description="Harcadıkça uçuş mili kazandıran kredi kartları kullanım ücretleri ve kampanyaları." />

            }
            {
                props.cartType == "point" &&
                <Seo keyword="kredi kartı, puan kazandıran kredi kartı, kredi kartları kampanyası" title="Puan Kazandıran Kredi Kartları" description="Alışveriş yaptıkça bol bol puan kazandıran kredi kartları kampanyaları ve bütün fırsatlarıyla sizlerle." />

            }
            {
                props.cartType == "corporate" &&
                <Seo keyword="kredi kartı, ticari kredi kartı, ticari kredi kartları kampanya" title="Ticari Kredi Kartları" description="Ticari kredi kartlarıyla iş yerinizin bütün harcamalarını yapabileceğiniz, harcadıkça kazanacağınız kredi kartları." />

            }

            <div className="ccbanner" style={{ overflow: "hidden" }}>

            </div>
            <div className="credit-cart-head" style={{ backgroundImage: 'url(' + hcbgImage + ')', }} >

                <div className="row mb-4">
                    <div className="col-12" style={{ textAlign: "center", marginTop: 40 }}>
                        <b style={{ color: "white", textShadow: "1px 1px 5px black", fontSize: 38 }}>Kredi Kartları</b>
                        <div><a className="cart-campaign-link" href="/kredi-karti-kampanyalari">Kredi Kartı Kampanyalarını Görmek İçin Tıklayıız</a></div>
                    </div>
                </div>
                <div className="row">
                    {windowDimensions.width > 600 &&
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <ul className="cart-type-nav">
                                <li className={props.cartType == "all" ? "active" : ""}>
                                    <a href="/kredi-karti"><Image alt="Bütün kredi kartlarını" title="Bütün kredi kartlarını listele ve bul" style={{ width: 20, marginRight: 5 }} webp={require("../assets/images/debit.webp").default} src={require("../assets/images/debit.png").default}></Image>Tüm Kartlar</a>
                                </li>
                                <li className={props.cartType == "miles" ? "active" : ""}>
                                    <a href="/kredi-karti/mil-veren-kredi-kartlari"> <Image alt="Mil veren kredi kartlarını listele ve bul" title="Kullandıkça mil veren kredi kartlarını listeler" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/fly-color.webp").default} src={require("../assets/images/fly-color.png").default}></Image>Mil Veren Kartlar</a>
                                </li>
                                <li className={props.cartType == "point" ? "active" : ""}>
                                    <a href="/kredi-karti/puan-veren-kredi-kartlari">  <Image alt="Puan veren kartlarını listele ve bul" title="Puan biriktirip harcadıkça kazandıran puan veren kredi kartları" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/scorecolor.webp").default} src={require("../assets/images/scorecolor.png").default}></Image>Puan Veren Kartlar</a>
                                </li>
                                <li className={props.cartType == "corporate" ? "active" : ""}>
                                    <a href="/kredi-karti/ticari-kredi-kartlari">
                                        <Image alt="Ticari kredi kartlarını bul" title="Ticari kredi kartları ile alışverişi kazançlı hale getiren ticari kredi kartları" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/corporatecolor.webp").default} src={require("../assets/images/corporatecolor.png").default}></Image>Ticari Kartlar</a>
                                </li>
                            </ul>

                        </div>}


                </div>
            </div>
            {windowDimensions.width < 800 && <div className={"col-12 mobil-filter showfilter-"+showFilter}>
                <div className="filter-mobil-scroll">
                    <div onClick={() => { setShowFilter(false) }} style={{ color: "red", float: "right" }}>Kapat</div>
                    <h5 class="mb-4"><b style={{ color: " rgb(82, 82, 82)", fontStyle: "italic" }}>Filtreleme</b></h5>


                    <h6><b>Yıllık Kullanım Ücreti</b></h6>
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
                                            <input value={item.name} className="bankCheckbox" style={{ width: 22, height: 22 }} type="checkbox"></input>
                                            <Rimage alt={item.name + "bütün kredi kartları listele"} title={item.name + " kredi kartları listele"} style={{ width: 120, marginLeft: 10, marginTop: -13 }} src={item.logoUrl}></Rimage>
                                        </label>
                                    </div>
                                )

                            })
                        }
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
                    <div className="col-12 mb-5 row justify-content-between" style={{ padding: 0 }}>
                        <button onClick={() => { changeFilter(); setShowFilter(false) }} className="default-button" style={{ width: "45%" }}>Filtrele</button>
                        <button onClick={() => { setShowFilter(false) }} className="default-button" style={{
                            width: "45%", backgroundColor: "rgb(155 122 0)",
                            border: "1px solid #c58800"
                        }}>Vazgeç</button>
                    </div>
                </div>
            </div>}
            <div className="container-fluid">
                <div className="col-12 p-0 mt-3 ">
                    {windowDimensions.width < 600 &&
                        <div className="col-11 p-0 text-center" style={{ textAlign: "center" }}>
                            <ul className="cart-type-nav2 row p-0 text-center justify-content-between">
                                <li  className={(props.cartType == "all" ? "active" : "") + " col-6  p-0"}>
                                    <a href="/kredi-karti"><Image alt="Bütün kredi kartlarını" title="Bütün kredi kartlarını listele ve bul" style={{ width: 20, marginRight: 5 }} webp={require("../assets/images/debit.webp").default} src={require("../assets/images/debit.png").default}></Image>Tüm Kartlar</a>
                                </li>
                                <li className={(props.cartType == "miles" ? "active" : "") + " col-6 p-0"}>
                                    <a href="/kredi-karti/mil-veren-kredi-kartlari"> <Image alt="Mil veren kredi kartlarını listele ve bul" title="Kullandıkça mil veren kredi kartlarını listeler" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/fly-color.webp").default} src={require("../assets/images/fly-color.png").default}></Image>Mil Veren Kartlar</a>
                                </li>
                                <li className={(props.cartType == "point" ? "active" : "") + " col-6 p-0 "}>
                                    <a href="/kredi-karti/puan-veren-kredi-kartlari">  <Image alt="Puan veren kartlarını listele ve bul" title="Puan biriktirip harcadıkça kazandıran puan veren kredi kartları" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/scorecolor.webp").default} src={require("../assets/images/scorecolor.png").default}></Image>Puan Veren Kartlar</a>
                                </li>
                                <li className={(props.cartType == "corporate" ? "active" : "") + " col-6 p-0"}>
                                    <a href="/kredi-karti/ticari-kredi-kartlari">
                                        <Image alt="Ticari kredi kartlarını bul" title="Ticari kredi kartları ile alışverişi kazançlı hale getiren ticari kredi kartları" style={{ width: 18, marginRight: 5 }} webp={require("../assets/images/corporatecolor.webp").default} src={require("../assets/images/corporatecolor.png").default}></Image>Ticari Kartlar</a>
                                </li>
                            </ul>

                        </div>}
                </div>
            </div>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20, minHeight: "400px" }}>

                <div className="row">
                    {windowDimensions.width < 800 && <div onClick={() => { setShowFilter(!showFilter) }} className="filter-button">Fitlre</div>}
                    {windowDimensions.width > 800 &&
                        <div className="col-md-3 col-lg-3">
                            <h5 class="mb-4"><b style={{ color: " rgb(82, 82, 82)", fontStyle: "italic" }}>Filtreleme</b></h5>


                            <h6><b>Yıllık Kullanım Ücreti</b></h6>
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
                                                    <input value={item.name} className="bankCheckbox" style={{ width: 22, height: 22 }} type="checkbox"></input>
                                                    <Rimage alt={item.name + "bütün kredi kartları listele"} title={item.name + " kredi kartları listele"} style={{ width: 120, marginLeft: 10, marginTop: -13 }} src={item.logoUrl}></Rimage>
                                                </label>
                                            </div>
                                        )

                                    })
                                }
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
                            <div className="col-12 mb-5" style={{ padding: 0 }}>
                                <button onClick={() => { changeFilter() }} className="default-button">Filtrele</button>
                            </div>

                        </div>}

                    <div className="col-md-9 col-lg-9">
                        <div className="text-center mt-3 mb-5 credit-cart-title-container">
                            <h1 style={{ color: "#5e5e5e" }}>Kredi Kartı Başvuru Ve Kampanyalar</h1>
                            <h3>Size En uygun Olanı Seçebilirsiniz</h3>
                            {
                                props.cartType == "all" &&
                                <p className="text-dark">Bütün bankaların kredi kartlarını kampanyalar, yıllık kullanım ücretleri ve avantajlarıyla birlikte sizler için araştırıp listeledik. Harcadıkça mil kazandırdan, alışverişlerde puan biritiren yüzlerce kredi kartı parmaklarınızın ucunda</p>
                            }
                            {
                                props.cartType == "miles" &&
                                <p className="text-dark">Alışveriş yaptıkça mil kazandıran kredi kartlarını sizler için araştırdık. Bütün bankaların kredi kartlarını, kampanyalar ve kullanım ücretleriyle beraber listeledik. Size en ugun olanı aşağıdan inceleyip başvurabilirsiniz. </p>
                            }
                            {
                                props.cartType == "point" &&
                                <p className="text-dark">Puan kazandıran kredi kartları ile alışverişlerinizde kazandığınız puanları, yakıt, ev ihtiyaçları, eğlence ve ihtiyaç duyduğunuz herşey için kullanabilirsiniz. En çok puan veren kredi kartlarını sizler için araştırdık. Aşağıdan inceleyip başvurabilirsiniz </p>
                            }
                            {
                                props.cartType == "corporate" &&
                                <p className="text-dark">İş yerinizin harcamalarını yapacağınız ticari kredi kartlarını sizler için listeledik. Onlarca ticari kredi kartlarında en uygun ve en avantajlı kredi kartlarını rahatlıkla bulabilmeniz için bütün bankaların kartlarını sizler için araştırıp listeledik. </p>
                            }

                        </div>
                        <div className="mt-2">
                            {
                                loading && <Loading></Loading>
                            }{
                                !loading &&


                                <div className="row mt-4">
                                    {krediKartData.length == 0 && <p style={{
                                        fontSize: 29,
                                        color: "#858282",
                                        width: "100%",
                                        textAlign: "center"
                                    }}>Kayıt Bulunamadı...</p>}

                                    {krediKartData.map((item, index) => {
                                        let isPopuler = ""
                                        if (item.isPopuler) {
                                            isPopuler = "special-offer"
                                        }
                                        return (
                                            <div key={index} className={"lg-md-6 col-lg-6 col-sm-6 col-xs-12 " + isPopuler} style={{ marginBottom: 35 }}>
                                                {
                                                    isPopuler != "" &&
                                                    <div className="populer-mark">
                                                        <Image style={{ width: 32 }} webp={require("../assets/images/special.webp").default} src={require("../assets/images/special.png").default} /> Sponsorlu
                                                    </div>
                                                }
                                                <div className="row credit-cart-item">

                                                    <div className="col-8">
                                                        <h6 style={{ marginLeft: 10, color: "#ce2312" }}>{item.name}</h6>
                                                        <Rimage alt={item.bank + " banka ait" + item.name + "  adlı kredi kartı"} title={item.bank + " banka " + item.name + " Kredi kartı"} src={item.logo} style={{ width: "100%" }}></Rimage>
                                                    </div>
                                                    <div className="col-4" >
                                                        <b style={{
                                                            fontSize: 13,
                                                            color: "#828282"
                                                        }}>Yıllık Ücret</b>
                                                        <p style={{ marginBottom: 5 }}><b>{item.yearlyUsingAmount} ₺</b></p>
                                                        <button
                                                            onClick={() => creditCartRedirect(null,
                                                                item.redirectUrl,
                                                                item.bankId,
                                                                item.creditCartId,
                                                                {
                                                                    bankName: item.bank,
                                                                    CreditCartName: item.name
                                                                })}
                                                            className="default-button" style={{
                                                                padding: 3,
                                                                fontSize: 13
                                                            }} type="submit">BAŞVUR</button>
                                                        <a href={"/" + item.bankUrlName + "/" + item.urlName} className="default-button" style={{
                                                            padding: 3,
                                                            fontSize: 13,
                                                            marginTop: 14,
                                                            background: "#585858",
                                                            textAlign: "center",
                                                            color: "white"
                                                        }} type="submit">DETAY</a>

                                                    </div>
                                                    <div style={{ width: "100%" }}><hr style={{ margin: "7px 0 2px 0" }}></hr></div>
                                                    <div className="col-12" style={{
                                                        paddingBottom: 17, borderBottomLeftRadius: 10,
                                                        borderBottomRightRadius: 10,
                                                        background: "white"
                                                    }}>
                                                        {
                                                            item.campaingCount > 0 && <>


                                                                <b style={{
                                                                    margin: "0px 0px 12px 28px",
                                                                    display: "block",
                                                                }}>Kampanyalar</b>

                                                                {
                                                                    item.campaing.map((jitem, jkey) => {
                                                                        return (
                                                                            <div key={jkey}>
                                                                                <Image style={{
                                                                                    width: 30,
                                                                                    marginRight: 3,
                                                                                    float: "left"

                                                                                }} webp={require("../assets/images/campaigns.webp").default} src={require("../assets/images/campaigns.png").default}></Image>
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

                                                                <a href={"/kredi-karti-kampanyalari/kampanya-detaylari?src=" + item.campaing[0]?.id} style={{
                                                                    fontSize: 14,
                                                                    color: " #616161",
                                                                    marginTop: -1,
                                                                    display: "block",
                                                                    paddingLeft: 23,
                                                                    cursor: "pointer"
                                                                }}> <i>Tüm Kampayaları Gör ({item.campaingCount})</i>  </a>
                                                            </>}
                                                    </div>

                                                </div>
                                            </div>
                                        )

                                    })}

                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default CreditCart;
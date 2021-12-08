import React, { useState } from "react"
import { Collapse } from "reactstrap"
import { apiurl, GetNoneToken } from "../../datacrud/datacrud"
import calculator from "../calculator"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Rimage from "../Rimage";
import CurrencyInput from "react-currency-input";
export const HowToPay = () => {
    const [mountlyCome, setMountlyCome] = useState()
    const [kira, setKira] = useState()
    const [krediKart, setKrediKart] = useState()
    const [evGiderleri, setEvGiderleri] = useState()
    const [neKadarKredi, setNeKadarKredi] = useState()
    const [resultData, setResultData] = useState([])
    const [collapseId, setCollepseId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [resultMoney, setResultMoney] = useState(0)

    async function sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }
    const redirectLoanDetail = async (amount, term, loanId, bankUrlName) => {


        window.location.replace("/bankalar/" + bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + amount + "&term=" + term + "&loanId=" + loanId);
    }
    const calculatenw = async () => {
        setCollepseId(null)
        setLoading(true)
        setNotFound(false)
        var loanType = await GetNoneToken("BankLoanRates/GetAllPersonelLoanSite").then(x => { return x.data }).catch(x => { return false })

        loanType = loanType.filter(x => { return x.loanType.includes("İhtiyaç") })
        var gd = parseInt(kira) + parseInt(krediKart) + parseInt(evGiderleri);

        var result = parseInt(mountlyCome) - gd
        let loanList = []
        var bankList = []
        setResultMoney(result)
        for (const item of loanType) {
            for (let index = 12; index < 60; index = index + 6) {

                var sa = calculator(parseFloat(item.rate), parseFloat(neKadarKredi), parseFloat(index), 5, 15)
                if (result > sa.totalpayment && loanList.filter(x => { return x.bankId == item.bankId })?.length == 0) {

                    if (item.maxAmount > result && item.minAmount < result && item.terms.filter(x => { return x.termValue == index })?.length > 0) {
                        bankList.push({
                            items: [],
                            bankLogoUrl: item.logo,
                            id: item.id,
                            bankUrlName: item.bankUrlName,
                            bankId: item.bankId
                        })
                    }
                }
                if (result > sa.totalpayment) {

                    if (item.maxAmount > result && item.minAmount < result && item.terms.filter(x => { return x.termValue == index })?.length > 0) {

                        loanList.push({
                            mountlyPayment: sa.totalpayment,
                            totalPayment: (parseFloat(sa.totalpayment) * index),
                            rate: item.rate,
                            term: index,
                            bankLogoUrl: item.logo,
                            id: item.id,
                            bankId: item.bankId

                        })
                    }

                }
            }
        }
        let resultList = [];
        for (const item of bankList) {
            let ln = loanList.filter(x => { return x.bankId == item.bankId })
            item.items = ln;
            resultList.push(item)
        }



        await sleep(1000);
        setResultData(resultList)
        setLoading(false)
        if (resultList.length == 0) {
            setNotFound(true)
        }

    }

    const cls = () => {
        setMountlyCome("")
        setKira("")
        setKrediKart("")
        setEvGiderleri("")
        setNeKadarKredi("")
        setResultData([])

    }
    return (
        <div className="row justify-content-center">
            <div className="col-12 mb-3 mt-3"><h2>Ne Kadar Kredi Çekebilirim? </h2><hr className="title-hr mt-1"></hr></div>

            <div className="row col-12">
                <div className="row pt-0 col-12" style={{color:"black"}}>
                   Bu hesaplama aracımız sizin aylık ödeyebileceğiniz tutarı hesaplar. Size kredi verebilecek olan bankaları bulur. Bu hesaplamayı yaparken aylık gelirinizi ve bir kısım giderlerinizi sisteme girmeniz yeterli olacaktır. Hesaplamayı yaptıktan sonra size en uygun krediyi veren bankayı bulur.                
                </div>

                <br></br>
                
                <div className="row col-12 mt-2">
                    <h4>Hemen Bul</h4>
                </div>


                {loading == true && <img alt="loading" className="ld-but" src={require("../../assets/images/loading.gif").default}></img>}
                <div className={"col-12 row calculate-page-calculate-container mt-4 " + (loading == true ? "add-blur" : "")} onSubmit={() => { return false }}>

                    <div className="col-12 col-md-8 col-lg-8">

                        <div className="col-12 mb-2">
                            <label style={{ width: 165 }}><b> Ne Nadar Kredi Lazım: &nbsp;</b> </label>
                            {/* <input value={neKadarKredi} onChange={(e) => { setNeKadarKredi(e.target.value) }} type="text" placeholder=" örnek: 30000"></input> */}
                            <CurrencyInput require inputmode="numeric"  style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setNeKadarKredi(x.replace("₺", "").replace(/\./g, "")) }}
                            value={neKadarKredi}
                            prefix="₺"
                        />
                       
                        </div>
                        <div className="col-12">
                            <label style={{ width: 165 }}><b>Aylık Gelir: &nbsp;</b> </label>
                            {/* <input value={mountlyCome} onChange={(e) => { setMountlyCome(e.target.value) }} type="text" placeholder=" örnek: 5000"></input> */}
                            <CurrencyInput require inputmode="numeric"  style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setMountlyCome(x.replace("₺", "").replace(/\./g, "")) }}
                            value={mountlyCome}
                            prefix="₺"
                        />
                        </div>

                        <div className="col-12 mt-2">
                            <label style={{ width: 165 }}><b>Kira: &nbsp;</b> </label>
                            {/* <input value={kira} onChange={(e) => { setKira(e.target.value) }} type="text" placeholder=" örnek: 1500"></input> */}
                            <CurrencyInput require inputmode="numeric" style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setKira(x.replace("₺", "").replace(/\./g, "")) }}
                            value={kira}
                            prefix="₺"
                        />
                        </div>
                        <div className="col-12 mt-2">
                            <label style={{ width: 165 }}><b> Kredi Kartı Gideri : &nbsp;</b> </label>
                            {/* <input value={krediKart} onChange={(e) => { setKrediKart(e.target.value) }} type="text" placeholder=" örnek: 1000"></input> */}
                            <CurrencyInput require inputmode="numeric"  style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setKrediKart(x.replace("₺", "").replace(/\./g, "")) }}
                            value={krediKart}
                            prefix="₺"
                        />
                      
                        </div>
                        <div className="col-12 mt-2">
                            <label style={{ width: 165 }}><b> Ev Giderleri  : &nbsp;</b> </label>
                            {/* <input value={evGiderleri} onChange={(e) => { setEvGiderleri(e.target.value) }} type="text" placeholder=" örnek: 1000"></input> */}
                            <CurrencyInput require inputmode="numeric"  style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setEvGiderleri(x.replace("₺", "").replace(/\./g, "")) }}
                            value={evGiderleri}
                            prefix="₺"
                        />
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12">
                        <div className="col-12">
                            <button className="default-button" disabled={loading}
                                onClick={() => { calculatenw() }} style={{ color: "white" }}>Hesapla</button></div>
                        <div className="col-12 mt-3">
                            <button onClick={() => { cls() }} className="default-button" style={{
                                color: "black",
                                background: "#ffc670",
                                border: "1px solid #bb7000"
                            }}>Temizle</button></div>

                    </div>
                    <div className="row col-12 result-how-get">
                        {
                            notFound == true && !isNaN(resultMoney) &&
                            <div style={{ color: "red" }}>Verilere göre size kalan aylık ücret. ({resultMoney} ₺) Geliriniz giderinize göre çok düşük olduğundan uygun kredi bulunamadı! </div>

                        }
                        {
                            isNaN(resultMoney) &&
                            <div style={{ color: "red" }}>Girilen Veriler Hatalı! </div>

                        }

                        {
                            resultData.map((item, key) => {
                                
                                return (
                                    <div key={key} className="col-12 row align-items-center how-cal-items">
                                        <div className="col-3 p-0 text-center">

                                            <Rimage alt={item.bankUrlName} src={ item.bankLogoUrl} style={{ width: "70%" }}></Rimage>
                                        </div>
                                        <div className="col-7 p-0 text-center">

                                            Bu bankada <b style={{ color: "#077a68" }}> {item.items.length} adet  ödeyebileceğinzi kredi </b> bulundu.
                                        </div>
                                        <div className="col-2 p-0">
                                            {
                                                collapseId != item.id &&
                                                <button style={{
                                                    border: "1px solid #c3c3c3",
                                                    borderRadius: 6,
                                                    float: "right"
                                                }} onClick={() => { setCollepseId(item.id) }}> <ArrowDropDownIcon></ArrowDropDownIcon></button>

                                            }
                                            {
                                                collapseId == item.id &&
                                                <button style={{
                                                    border: "1px solid #c3c3c3",
                                                    borderRadius: 6,
                                                    float: "right"
                                                }} onClick={() => { setCollepseId(null) }}> <ArrowDropUpIcon></ArrowDropUpIcon></button>

                                            }
                                        </div>
                                        <div className="row justify-content-center m-0 col-12 mt-4">
 
                                            {item.items?.map((jitem, jkey) => {
                                                let color = jkey % 2 == 0 ? { background: "#eeeeee" } : {};
                                                return (
                                                    <Collapse  style={color} className="pt-2 pb-2 col-12 row justify-content-center" key={jkey} isOpen={collapseId == item.id} >

                                                        <div className="row col-12">
                                                            <div className="col-3">
                                                                <div className="col-12 text-center font-weight-bold">
                                                                    Aylık Ödeme
                                                                </div>
                                                                <div className="col-12 text-center">
                                                                    {jitem.mountlyPayment.toFixed(2)}

                                                                </div>
                                                            </div>
                                                            <div className="col-1">
                                                                <div className="col-12 text-center font-weight-bold">
                                                                    Faiz
                                                                </div>
                                                                <div className="col-12 text-center">
                                                                    {jitem.rate}

                                                                </div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div className="col-12 text-center font-weight-bold">
                                                                    Vade
                                                                </div>
                                                                <div className="col-12 text-center">
                                                                    {jitem.term}

                                                                </div>
                                                            </div>
                                                            <div className="col-4 ">
                                                                <div className="col-12 text-center font-weight-bold">
                                                                    Toplam Geri Ödeme
                                                                </div>
                                                                <div className="col-12 text-center">
                                                                    {jitem.totalPayment.toFixed(2)} ₺

                                                                </div>
                                                            </div>
                                                            <div className="col-2 row align-items-center justify-content-center">
                                                                <a href={"/bankalar/" + item.bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + neKadarKredi + "&term=" + jitem.term + "&loanId=" + jitem.id} style={{ color: "white" }} className="default-button row justify-content-center">İncele</a>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                )

                                            })

                                            }
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </div>

    )
}
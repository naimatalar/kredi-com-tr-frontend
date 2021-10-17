import React, { useEffect, useState } from "react"
import { Collapse } from "reactstrap"
import { apiurl, GetNoneToken } from "../datacrud/datacrud"
import calculator from "../Components/calculator"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Rimage from "../Components/Rimage";
import Seo from "../Components/Seo";
import { PriceSplitter } from "../Components/PriceSplitter";

function MounthlyCalculate(props) {
    const [gelir, setGelir] = useState()
    const [gider, setGider] = useState()

    const [neKadarKredi, setNeKadarKredi] = useState()
    const [resultData, setResultData] = useState([])
    const [collapseId, setCollepseId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [resultMoney, setResultMoney] = useState(0)

    async function sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }
    useEffect(() => {
        calculatenw()

    }, [])

    const calculatenw = async () => {

        var Mamount = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].split("-")[1]
        var MDisamount = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].split("-")[3]

        var totalM = (Mamount - MDisamount) * 10;

        setCollepseId(null)
        setLoading(true)
        setNotFound(false)
        var loanType = await GetNoneToken("BankLoanRates/GetAllPersonelLoanSite").then(x => { return x.data }).catch(x => { return false })

        loanType = loanType.filter(x => { return x.loanType.includes("İhtiyaç") })
        var gd = parseInt(MDisamount);
        setGider(MDisamount);
        setGelir(Mamount);
        setNeKadarKredi(totalM)
        var result = parseInt(Mamount) - gd
        let loanList = []
        var bankList = []
        setResultMoney(result)
        for (const item of loanType) {
            for (let index = 12; index < 60; index = index + 6) {

                var sa = calculator(parseFloat(item.rate), parseFloat(totalM), parseFloat(index), 5, 15)
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


    return (
        <div className="container cal-mountly-result">
            <Seo title={"Aylık " + PriceSplitter(parseInt(gelir)) + " ₺ Gelire Göre Kredi Hesaplama"} description={"Aylık " + PriceSplitter(parseInt(gelir)) + " ₺ gelir ve " + PriceSplitter(parseInt(gider)) + " ₺ gider ile kredi hesaplama sonucunda " + neKadarKredi + " ₺ kredi çekebilirsiniz"} />

            <div className="row mt-4">
                <div className="col-12 text-center pt-2 pb-2 zm-mine" style={{
                    border: "1px solid rgb(142, 142, 142)",
                    borderRadius: 10
                }}>
                    <h1>Aylık <b> {PriceSplitter(parseInt(gelir))} ₺</b> Gelire Göre Kredi Hesaplama</h1>
                    <p>{"Ortalama aylık " + PriceSplitter(parseInt(gelir)) + " ₺ gelir ve aylık ortalama " + PriceSplitter(parseInt(gider)) + " ₺ gider ile kredi hesaplama başarılı bir şekilde yapılmıştır.Bu hesaplama sonucunda "}<b>{PriceSplitter(parseInt(neKadarKredi)) + " ₺ kredi tutarınız bulunuyor"}</b></p>
                    <div className=" row justify-content-center center-co-info">
                        <div className="row col-6">
                            <div className="col-12">
                                <span> Ortalama Geliriniz : </span> <b> {PriceSplitter(parseInt(gelir)) + " ₺"}</b>
                            </div>

                            <div className="col-12">
                                <span> Ortalama Giderleriniz : </span> <b>  {" " + PriceSplitter(parseInt(gider)) + " ₺"}</b>
                            </div>

                            <div className="col-12 ">
                                <span style={{
                                    fontSize: 29,
                                    color: "rgb(251 105 17)"
                                }}> Çekeceğiniz Tutar : </span>
                                <b style={{
                                    fontSize: 29,
                                    color: "rgb(251 105 17)"
                                }}>{"  " + PriceSplitter(parseInt(neKadarKredi)) + " ₺"}</b>

                            </div>



                        </div>

                    </div>

                </div>

                <div className="row col-12 result-how-get ">
                    {loading == true &&
                        <div style={{ width: 600, margin: "0 auto" }}>
                            <img alt="loading" style={{ width: "100%" }} src={require("../assets/images/loading.gif").default}></img>

                        </div>
                    }
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
                                <div key={key} className="col-12 row align-items-center how-cal-items mb-4">
                                    <div className="col-3 p-0 text-center">

                                        <Rimage alt={item.bankUrlName} src={item.bankLogoUrl} style={{ width: "70%" }}></Rimage>
                                    </div>
                                    <div className="col-7 p-0 text-center text-dark">

                                        Bu bankada <b style={{ color: "#077a68" }}> {item.items.length} adet  ödeyebileceğinzi kredi </b> bulundu.
                                    </div>
                                    {/* <div className="col-2 p-0">
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
                                    </div> */}
                                    <div className="row justify-content-center m-0 col-12 mt-4 cms-item">

                                        {item.items?.map((jitem, jkey) => {
                                            let color = jkey % 2 == 0 ? { background: "#eeeeee" } : {};
                                            return (
                                                <div style={color} className="pt-2 pb-2 col-12 row justify-content-center" key={jkey} isOpen={collapseId == item.id} >

                                                    <div className="row col-12">
                                                        <div className="col-3">
                                                            <div className="col-12 text-center font-weight-bold">
                                                                Aylık Ödeme
                                                            </div>
                                                            <div className="col-12 text-center text-dark">
                                                                {PriceSplitter(jitem.mountlyPayment.toFixed(2))} ₺

                                                            </div>
                                                        </div>
                                                        <div className="col-1">
                                                            <div className="col-12 text-center font-weight-bold">
                                                                Faiz
                                                            </div>
                                                            <div className="col-12 text-center text-dark">
                                                                {jitem.rate}

                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <div className="col-12 text-center font-weight-bold">
                                                                Vade
                                                            </div>
                                                            <div className="col-12 text-center text-dark">
                                                                {jitem.term}

                                                            </div>
                                                        </div>
                                                        <div className="col-4 ">
                                                            <div className="col-12 text-center font-weight-bold">
                                                                Toplam Geri Ödeme
                                                            </div>
                                                            <div className="col-12 text-center text-dark">
                                                                {PriceSplitter(jitem.totalPayment.toFixed(2))} ₺

                                                            </div>
                                                        </div>
                                                        <div className="col-2 row align-items-center justify-content-center">
                                                            <a href={"/bankalar/" + item.bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + neKadarKredi + "&term=" + jitem.term + "&loanId=" + jitem.id} style={{ color: "white" }} className="default-button row justify-content-center">İncele</a>
                                                        </div>
                                                    </div>
                                                </div>
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
    );
}

export default MounthlyCalculate;
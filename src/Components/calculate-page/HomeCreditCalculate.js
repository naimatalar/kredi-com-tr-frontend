import React, { useState } from "react"
import CurrencyInput from "react-currency-input"
import Image from "react-image-webp"
import calculator from "../calculator"
import Rimage from "../Rimage"

export const HomeCreditCalculate = () => {
    const [loanType, setLoanType] = useState("konut")
    const [rate, setRate] = useState("")
    const [amount, setAmount] = useState("")
    const [term, setTerm] = useState("")
    const [calculateResult, setCalculateResult] = useState({ paymentPlan: [], totalFaiz: 0, totalVergi: 0, totalpayment: 0 })
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    async function sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }
    const calculatenw = async () => {
        setLoading(true)
        var result = { paymentPlan: [], totalFaiz: 0, totalVergi: 0, totalpayment: 0 }
        if (loanType == "ihtiyac") {
            result = calculator(parseFloat(rate), parseFloat(amount), parseFloat(term), 5, 15)

        } else {
            result = calculator(parseFloat(rate), parseFloat(amount), parseFloat(term), 1, 1)
        }
        await sleep(1000);
        setLoading(false)
        setCalculateResult(result)

    }

    const cls = () => {
        setAmount("")
        setTerm("")
        setRate("")

    }

    return (<div>

        <div className="row col-12 ">
            {loading == true && <img style={{ marginTop: -30 }} alt="loading" className="ld-but" src={require("../../assets/images/loading.gif").default}></img>}

            <div className={"row calculate-page-calculate-container col-12 " + (loading == true ? "add-blur" : "")} onSubmit={() => { return false }}>

                <div className="col-12 col-md-6 col-lg-6">
                    {/* <div className="col-12 mb-2">
                        <label style={{ width: 120 }}><b>Kredi Türü: &nbsp;</b> </label>
                        <select value={loanType} onChange={(e) => { setLoanType(e.target.value) }} style={{ padding: 5, width: 191 }}>
                            <option value="ihtiyac">İhtiyaç Kredisi</option>
                            <option value="tasit">Taşıt Kredisi</option>
                            <option value="konut">Konut Kredisi</option>
                            <option value="kobi">Kobi Kredisi</option>

                        </select>
                    </div> */}
                    <div className="col-12">
                        <label style={{ width: 120 }}><b>Kredi Tutarı: &nbsp;</b> </label>
                        {/* <input value={amount} required onChange={(e) => { setAmount(e.target.value) }} type="text" placeholder=" örnek: 50000"></input> */}
                        <CurrencyInput require inputmode="numeric" id="sgdf" style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="0"
                            onChange={(x) => { setAmount(x.replace("₺", "").replace(/\./g, "")) }}
                            value={amount}
                            prefix="₺"
                        />
                   
                    </div>
                    <div className="col-12 mt-2">
                        <label style={{ width: 120 }}><b>Vade: &nbsp;</b> </label>
                        <input inputmode="numeric" value={term} onChange={(e) => { setTerm(e.target.value) }} type="text" placeholder=" örnek: 36"></input>
                    </div>
                    <div className="col-12 mt-2">
                        <label style={{ width: 120 }}><b>Faiz Oranı: &nbsp;</b> </label>
                        <input  inputmode="numeric" value={rate} onChange={(e) => { setRate(e.target.value) }} type="text" placeholder=" örnek: 1.75"></input>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-4">
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
            </div> </div>

        {
            calculateResult.totalpayment != 0 && calculateResult.totalFaiz != 0 && calculateResult.totalVergi != 0 &&
            <div className="row mt-3">

                <div className="col-12"><h2>Hesaplama Sonucu </h2><hr className="title-hr mt-1"></hr></div>
                <div className="col-6 mt-3 inf-res">
                    <div className="col-12 row mt-2">
                        <div className="col-6"><b>Aylık Taksit :</b> </div>
                        <div className="col-6">{calculateResult.totalpayment.toFixed(2)} ₺</div>
                    </div>

                    <div className="col-12 row mt-2">
                        <div className="col-6"><b>Vade Sayısı :</b></div>
                        <div className="col-6">{term}</div>

                    </div>
                    <div className="col-12 row mt-2">
                        <div className="col-6"><b>Faiz Oranı :</b> </div>
                        <div className="col-6">{rate}</div>

                    </div>
                    <div className="col-12 row mt-2">
                        <div className="col-6"> <b>Ödenecek Tutar :</b> </div>
                        <div className="col-6">{(calculateResult.totalpayment * term).toFixed(2)} ₺</div>

                    </div>
                </div>
                <div className="col-12 mt-4 mb-3"><h2>Ödeme Planı </h2><hr className="title-hr mt-1"></hr></div>

                <div className="div-table">

                    <div className="div-table-row div-table-header">
                        <div className="div-table-col pl-2" style={{ width: 50 }}> №</div>
                        <div className="div-table-col">Kalan Ana Para</div>
                        <div className="div-table-col">Ödenen</div>
                        <div className="div-table-col">Ödenen Faiz</div>
                        <div className="div-table-col">Ödenen Vergi</div>
                        <div className="div-table-col">Aylık Taksit</div>
                    </div>
                    {
                        calculateResult.paymentPlan.map((item, key) => {


                            let color = key % 2 == 0 ? { background: "#e8e8e8" } : {};

                            if (item.odenen != 0) {
                                return (
                                    <div key={key} className="div-table-row" style={color}>
                                        <div className="div-table-col pl-2" style={{ width: 50 }}>{key + 1}</div>
                                        <div className="div-table-col">
                                            <CurrencyInput inputmode="numeric" style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={item.tutar.toFixed(0)} />
                                        </div>
                                        <div className="div-table-col">
                                            <CurrencyInput inputmode="numeric" style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={item.odenen.toFixed(0)} />
                                        </div>
                                        <div className="div-table-col">
                                            <CurrencyInput inputmode="numeric" style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={item.faiz.toFixed(0)} />
                                        </div>
                                        <div className="div-table-col">
                                            <CurrencyInput inputmode="numeric" style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={item.vergi.toFixed(0)} />
                                        </div>
                                        <div className="div-table-col">
                                            <CurrencyInput inputmode="numeric" style={{
                                                padding: 0,
                                                border: "none",
                                                display: "inline",
                                                float: "left",
                                                minWidth: 60,
                                                background: "none"
                                            }}
                                                className="col-7"
                                                decimalSeparator=","
                                                thousandSeparator="."
                                                precision="0"
                                                disabled
                                                prefix="₺"
                                                value={(item.odenen + item.faiz + item.vergi).toFixed(0)} />

                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>


            </div>

        }
        <div className=" col-12 mt-3">

            <h3>Konut Kredi Hesaplama Formülü Nasıldır?</h3>
            <p >Konut Kredi hesaplama faiz oranına göre hesaplanır vergiler tahsil edilmez. Genel Hesaplama formülü; <br>
            </br>
                <br></br>
                <Image alt="kredi Hesapla" src={require("../../assets/images/kredihesap.jpg").default}
                webp={require("../../assets/images/kredihesap.webp").default}
                style={{ width: "100%" }}></Image>
                <br></br>
                <br></br>
                Konut Kredilerinde Maliye Bakanlığı  faiz üzerinden uygulanan KKDF ve BSMV tahsil edilmez. Bu ödemeler sadece ihtiyaç kredilerinde bankalar tarafından tahsil edilir.
            </p>
            <div className="row mt-5">
                <div className="col-12 mb-3"><h2>Konut Kredisi Çekmek İçin Nelere ihtiyaç Duyulur? </h2><hr className="title-hr mt-1"></hr></div>
                <p>
                    Konut kredileri kşra yerine kredi ödeyerek ev sahibi olmak isteyenler için düşünülen  kredi türüdür. Konut kredileri hesaplamalarda KKDF ve BSMV tahsil edilmiyor .
                    Konut kredilerinin  başvurusu için başlıca şartlar aşağıdadır;
                </p>
                <ul>
                    <li>18 Yaşından büyük olmak.</li>
                    <li>Aylık düzenli gelire sahip olmak.</li>
                    <li>Daha önceki kredilerden dolayı kara listeye alınmış olmamak.</li>
                    <li>Bazı bankalar alacağını evi hipotekli olarak kredi vermeyi tercih edebilirler.</li>

                </ul>
                <p>
                    Kredi faiz oranları genelde bankanın yayınladığı orandadır. Bankalar sizin ödeme alışkanlığınız ve bankayla olan müşteri ilişkinizi daha önceki kullanılan kredi varsa bu kredinin ödeme alışkanlığı yada kredi kartı ödeme alışkanlığı göz önünde bulundurarak inisiyatif kullanabilir faiz oranında değişiklik yapabilir.
                </p>

            </div>

        </div>
    </div >)
}
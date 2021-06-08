import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input';


const HowMuchLoan = () => {
    const [amount, setAmount] = useState()

    return (

        <div  className="container" style={{
            paddingTop: 20,
            paddingBottom: 45,
            background: "white",
            boxShadow: "2px 2px 5px 0px black",
        }}>


            <div className="row" style={{ padding: 14 }}>
                <h5>Ne Kadar Kredi Çekmeliyim?</h5>
                <p style={{ color: "black" }}>Bu similatör, size en uygun ve kolay ödenebilir kredi fırsatlarını hesaplar. Hesaplama sonucunda size en uygun kredi fırsatlarını listeler </p>

            </div>
            <div className="row" style={{
                paddingTop: 18,
                borderTop: "1px solid #757373"
            }}>
                <div className="col-6">
                    <CurrencyInput thousandSeparator="." maxLength={8} precision="0" prefix="₺" value={amount} onChangeEvent={(val) => { setAmount(val.target.value) }} style={{
                        padding: 3,
                        width: "100%",
                        border: "1px solid #717171",
                        color: "black"
                    }} />
                </div>
                <div className="col-6">
                    <button className="default-button fastloan-button" style={{
                        padding: 2,
                        width: "65%",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white"
                    }} type="submit">DEVAM</button>
                </div>
            </div>

        </div>

    );
};

export default HowMuchLoan;
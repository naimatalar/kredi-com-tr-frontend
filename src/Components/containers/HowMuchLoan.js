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
                <h5>Ne Kadar Kredi Çekebilirim?</h5>
                <p style={{ color: "black" }}>Bu similatör, size en uygun ve kolay ödenebilir kredi fırsatlarını hesaplar. Hesaplama sonucunda size en uygun kredi fırsatlarını listeler </p>

            </div>
            <div className="row" style={{
                paddingTop: 18,
                borderTop: "1px solid #757373"
            }}>
              
              
                <div className="col-6">
                    <a href="/hesaplama/aylik-ne-kadar-odeyebilirim"> Hesaplamak için tıklayınız </a>
                  
                </div>
            </div>

        </div>

    );
};

export default HowMuchLoan;
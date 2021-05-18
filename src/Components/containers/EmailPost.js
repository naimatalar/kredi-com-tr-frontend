import React, { useState } from 'react';

const EmailPost = () => {
    const [mail, setMail] = useState()

    return (

        <div className="container" style={{
            paddingTop: 20,
            paddingBottom: 10,
            background: "white",
            boxShadow: "2px 2px 5px 0px black",
        }}>


            <div className="row" style={{ padding: 14 ,paddingBottom:0}}>
                <h5>Gelişmelerden Haberdar Olun</h5>
                <p style={{ color: "black" }}>Dünyayı takip ediyoruz, sizde finans dünyasından haber almak ilmak ister misiniz ? </p>
 
            </div>
            <div className="row" >
                <div className="col-6">
                    <input type="email" placeholder="E-posta adresinizi giriniz" value={mail} onChange={(val) => { setMail(val.target.value) }} style={{
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
                    }} type="submit">KAYDOL</button>
                </div>
                <div className="col-12"style={{marginTop:7}}>
                    <label style={{color:"black",fontSize:11,lineHeight: "14px",marginBottom:0}}><input style={{width:10}} type="checkbox"></input>&nbsp; Kişisel verilerimin <b style={{color:"#077a68",cursor:"pointer"}}>Rıza Metni</b>’ nde belirlenen şartlarda kayıt edilmesine izin verdiğimi ve 
                    <b style={{color:"#077a68",cursor:"pointer"}}>KVKK Metni</b>’ni okuduğumu ve kabul ettiğimi onaylıyorum.</label>
                    <label style={{color:"black",fontSize:11,lineHeight: "14px"}}><input  style={{width:10}}  type="checkbox"></input>&nbsp; kredi.com.tr’ nin bana, kredi ve kredi kartlarıyla ilgili mail göndermesine izin veriyorum </label>

                </div>
            </div>

        </div>

    );
};

export default EmailPost;
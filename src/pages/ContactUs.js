import React, { useState } from 'react';
import { PostNoneToken } from '../datacrud/datacrud';

const ContactUs = () => {

    const [fullName, setFullName] = useState()
    const [mail, setMail] = useState()
    const [phone, setPhone] = useState()
    const [content, setContent] = useState()
    const [cuWarning, setCuWarning] = useState(false)


    const sendContact = async () => {
        var terms = await PostNoneToken("ContactUs/create", { fullName: fullName, mail: mail, phone: phone, content: content }).then(x => { return x.data }).catch(x => { return false })
        setCuWarning(true)
    }
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-4">
                        <img src={require("../assets/images/lg.png").default} style={{ width: "60%", objectFit: "contain" }}></img>
                        <h1 className="heading-section" style={{ fontWeight: "bold" }}>İletişim Formu</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-8 d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">İstenilen Bilgileri Giriniz</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">

                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm">
                                            <div className="row">
                                                <div className="col-md-6 mb-2">
                                                    <div className="form-group">
                                                        <input type="text" onChange={(x) => setFullName(x.target.value)} className="form-control" name="name" id="name" placeholder="Ad Soyad"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <div className="form-group">
                                                        <input type="text" onChange={x => setMail(x.target.value)} className="form-control" name="email" id="email" placeholder="Email"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <input type="text" onChange={x => setPhone(x.target.value)} className="form-control" name="phone" id="phone" placeholder="Telefon"></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" onChange={x => setContent(x.target.value)} className="form-control" id="message" style={{ width: "100%" }} rows="7" placeholder="Mesaj"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">

                                                        <button type="button" value="Send Message" onClick={() => sendContact()} className="btn btn-primary"> Gönder</button>
                                                        <div className="submitting"></div>
                                                        {cuWarning==true&&  <div className='mt-3 cu-warning'><b>* - İletişim talebiniz alındı. En kısa sürede iletişime geçilecektir.</b></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-stretch">
                                    <div className="info-wrap bg-primary w-100  mt-3">
                                        <h3 className="mb-4 mt-md-4 pl-3">Kredi.com.tr</h3>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ color: "#4d4d4d" }}>Soru Öneri Ve Tekliflerini Bizimle Paylaşın.</p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ color: "#4d4d4d" }}>İletişim bilgilerinizi girdiğinizde size 10 dakika içinde geri dönüş sağlıyor olacağız</p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ color: "#4d4d4d" }}><b>Destek Ekibi <a href="#">kredi.com.tr</a></b> </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                         
                                            <div className="text pl-3">
                                                <p style={{ color: "#4d4d4d" }}> <a href="#">kredi.com.tr</a> saygılar sunar.</p>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
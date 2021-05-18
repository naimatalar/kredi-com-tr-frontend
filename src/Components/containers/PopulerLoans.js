import React from "react";
import { Link } from "react-router-dom";
export const PopulerLoans = () => {

    const data = [
        { logo: require("../../assets/images/a1.png").default, loanType: "Taşıt Kredisi", amount: "150.000", term: "36" },
        { logo: require("../../assets/images/a5.jpg").default, loanType: "İhtiyaç Kredisi", amount: "30.000", term: "24" },
        { logo: require("../../assets/images/a3.png").default, loanType: "İhtiyaç Kredisi", amount: "50.000", term: "36" },
        { logo: require("../../assets/images/a4.png").default, loanType: "Konut Kredisi", amount: "200.000", term: "120" }

    ]

    return (

        <div>
            <div className="populer-loan-container">
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        <img style={{ width: 22, marginRight: 5 }} src={require("../../assets/images/mck.png").default}></img>
                       Öne Çıkan Krediler
                    </p>
                </div>
                <div className="container">
                    <div className="row row-container" >
                        {data.map((item, index) => {
                            var isLast = data.length == index + 1;

                            return (
                                <div key={index} className="row loan-item" style={!isLast ? { borderBottom: "1px solid black" } : {}}>
                                    <div className="col-3 ">
                                        <img src={item.logo} style={{ width: "80%", height: 15 }}></img>
                                    </div>
                                    <div className="col-5 ">
                                        <span>{item.loanType} {item.amount}TL</span>
                                    </div>
                                    <div className="col-4 ">
                                        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}><span>{item.term} Ay Vade {">"} </span></Link>
                                    </div>
                                </div>

                            )



                        })}


                    </div>
                    <div style={{ marginTop: 15 }}>
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>
                            <img style={{ width: 22, marginRight: 5 }} src={require("../../assets/images/debit.png").default}></img>
                       Kredi kartları
                    </p>
                    </div>
                    <div className="container">
                        <div className="row debit-buttons">
                            <div className="col-6">
                                <button style={{background:"#78579a"}}>
                                    <img style={{ width: 18, marginRight: 5 }} src={require("../../assets/images/fly-white.png").default}></img>
                                    <span style={{color:"white"}}>Mil veren kartlar</span>
                                </button>
                            </div>

                            <div className="col-6">
                                <button style={{background:"#579a88"}}>
                                    <img style={{ width: 22, marginRight: 5 }} src={require("../../assets/images/score.png").default}></img>
                                    <span style={{color:"white"}}>Puan veren kartlar</span>
                                </button>
                            </div>

                            <div className="col-6">
                                <button style={{background:"#9a5779"}}>
                                    <img style={{ width: 22, marginRight: 5 }} src={require("../../assets/images/corporate.png").default}></img>
                                    <span style={{color:"white"}}>Ticari kartlar</span>
                                </button>
                            </div>
                            <div className="col-6">
                                <button>
                                    <img style={{ width: 22, marginRight: 5 }} src={require("../../assets/images/debit.png").default}></img>
                                    <span>Tüm kredi kartları</span>
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
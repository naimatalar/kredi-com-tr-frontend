import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export const LoanSearch = () => {
    const loanTypeOnChange = () => {

    }

    
    return (

        <div >
            <div className="loan-search-container">
                <div className="container">
                    <div className="row" >
                        <div className="loan-search-content">
                            <div style={{ width: "100%" }}>
                                <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 17 }}>Kedinizi aratın,<br /> Size uygun olan krediyi buradan bulabilirsiniz </p>

                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12" style={{ marginBottom: 15 }}>
                                        <Dropdown
                                            options={[{ label: "İhtiyaç Kredisi", value: "ihtiyac" }]}
                                            onChange={loanTypeOnChange}
                                            placeholder="Kredi Türü Seçiniz"
                                            arrowClassName="dropdownArrow"
                                        />

                                    </div>
                                    <div className="col-6 ">
                                        <input type="text" placeholder="Tutar Giriniz"></input>
                                    </div>
                                    <div className="col-6 ">
                                        <Dropdown
                                            options={[{ label: "12", value: "12" }]}
                                            onChange={loanTypeOnChange}
                                            placeholder="Vade"
                                            arrowClassName="dropdownArrow"
                                        />
                                    </div>
                                    
                                    <div className="col-6 ">
                                        &nbsp;
                                    </div>
                                    <div className="col-6 " style={{ justifyontent: "flex-end",marginTop: 12}}>
                                       <button className="default-button"  type="submit">ARA</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}
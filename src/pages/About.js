import React from 'react';
import { BankContainer } from '../Components/containers/BankContainer';
import { LoanSearch } from '../Components/containers/LoanSearch';
import Seo from '../Components/Seo';
import CalculatePage from './CalculatePage';
import FindLoan from './FindLoan';

function About(props) {
    return (
        <>
            <Seo title={"Kredi Hesaplama | kredi.com.tr"} description={"Kredi hesaplama, kredi başvurusu ve onlarca kredi kartını araştırdık. Kredi kartı kampanyaları ve detaylarıyla birlikte kredi.com.tr'de bulabilirsiniz. Kredi hesaplama araçlarıyla size en uygun krediyi bulabilir, karşılaştırabilir ve başvurabilirsiniz. "} />

            <div className="row">
                <FindLoan Loans={props.Loans} {...props} Banks={props.Banks} />
            </div>
            <div className="row mt-5">
                <div style={{ paddingRight: 5, marginBottom: 20 }} className="col-lg-6 col-md-6 loan-search-container">
                    <LoanSearch Loans={props.Loans}></LoanSearch>
                </div>
                <div className="col-12 col-md-6 col-lg-6 ab-fonts ">
                    <div className="row">
                        <a href="/kredi-hesaplama/30000-tl-12-ay-vade-ihtiyac-kredisi" className="col-12 col-md-4 col-lg-4 m-3">
                            <h3>30.000 TL Ve 12 Ay Vade</h3>
                            <p>12 ay vade ile hesaplanmış 30.000 TL tutarında kredi veren bankalar</p>
                        </a>
                        <a href="/kredi-hesaplama/35000-tl-18-ay-vade-ihtiyac-kredisi" className="col-12 col-md-4 col-lg-4 m-3">
                            <h3>35.000 TL Ve 18 Ay Vade</h3>
                            <p>18 ay vade ile hesaplanmış 35.000 TL tutarında kredi veren bankalar</p>
                        </a>
                        <a href="/kredi-hesaplama/40000-tl-24-ay-vade-ihtiyac-kredisi" className="col-12 col-md-4 col-lg-4 m-3">
                            <h3>40.000 TL Ve 24 Ay Vade</h3>
                            <p>24 ay vade ile hesaplanmış 40.000 TL tutarında kredi veren bankalar</p>
                        </a>

                        <a href="/kredi-hesaplama/60000-tl-36-ay-vade-ihtiyac-kredisi" className="col-12 col-md-4 col-lg-4 m-3">
                            <h3>60.000 TL Ve 36 Ay Vade</h3>
                            <p>36 ay vade ile hesaplanmış 60.000 TL tutarında kredi veren bankalar</p>
                        </a>
                    </div>

                </div>
            </div>

            <div className="row">
                <CalculatePage UrlName="aylik-ne-kadar-odeyebilirim" />
            </div>

            <div className="row justify-content-center mt-5">

                <BankContainer Banks={props.Banks}></BankContainer>

            </div>
        </>
    );
}

export default About;
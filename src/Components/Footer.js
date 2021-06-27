import React from 'react';
const Footer = () => {

    return (
        <div className="container">


            <div className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-5 mt-md-0 mt-3">
                            <img alt="kredi.com.tr logo" title={"kredi.com.tr"} style={{
                                width: "80%"
                            }} src={require("../assets/images/lgwhite.png").default} ></img>
                          <h4>Bütün Bankaların Kredi Merkezi</h4>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Bilgiler</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Sık Sorulan Sorular</a>
                                </li>
                                <li>
                                    <a href="#!">Kredi Notu</a>
                                </li>
                                <li>
                                    <a href="#!">Blog</a>
                                </li>
                                
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-2 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Krediler</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">İhtiyaç Kredisi</a>
                                </li>
                                <li>
                                    <a href="#!">Taşıt Kredisi</a>
                                </li>
                                <li>
                                    <a href="#!">Konut Kredisi</a>
                                </li>
                                <li>
                                    <a href="#!">Kobi Kredisi</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Kredi Kartları</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Mil Veren Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="#!">Puan Veren Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="#!">Ticari Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="#!">Tüm Kredi Kartları</a>
                                </li>
                            </ul>

                        </div>


                    </div>

                </div>

           

            </div>
        </div>

    )
}
export default Footer
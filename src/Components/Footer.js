import React from 'react';
import Image from 'react-image-webp';
const Footer = () => {

    return (
        <div className="container">


            <div className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-5 mt-md-0 mt-3">
                            <Image style={{
                                width: "80%",
                                
                            }}
                                src={require('../assets/images/lgwhite.png').default}
                                webp={require('../assets/images/lgwhite.webp').default}
                            />



                            <h4 className="text-center">Kredi Başvuru Merkezi</h4>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-5">
                            <h5 className="text-uppercase">kredi.com.tr</h5>

                            <ul className="list-unstyled">

                                <li>
                                    <a href="/soru-cevap">Sık Sorulan Sorular</a>
                                </li>
                                <li>
                                    <a href="/hesaplama/aylik-ne-kadar-odeyebilirim/">Ne Kadar Kredi Çekebilirim</a>
                                </li>
                                <li>
                                    <a href="/haberler-bilgiler">Haberler</a>
                                </li>
                                <li>
                                    <a href="/vadeli-mevduat-sorgulama">Mevduat Başvuru</a>
                                </li>

                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-2 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Kredi</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="/ihtiyac-kredisi">İhtiyaç Kredisi</a>
                                </li>
                                <li>
                                    <a href="/tasit-kredisi">Taşıt Kredisi</a>
                                </li>
                                <li>
                                    <a href="/konut-kredisi">Konut Kredisi</a>
                                </li>
                                <li>
                                    <a href="/kobi-kredisi">Kobi Kredisi</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Kredi Kartları</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="/kredi-karti/mil-veren-kredi-kartlari">Mil Veren Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="/kredi-karti/puan-veren-kredi-kartlari">Puan Veren Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="/kredi-karti/ticari-kredi-kartlari">Ticari Kredi Kartları</a>
                                </li>
                                <li>
                                    <a href="/kredi-karti/">Tüm Kredi Kartları</a>
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
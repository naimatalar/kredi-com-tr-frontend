import React from 'react';
import Seo from '../Seo';

function FindLoanIndex(props) {
    
    return (
        <>
            <Seo keyword={`kredi hesaplama,kredi başvuru,hesaplama`} title={"Kredi Hesaplama ve Uygun Kredi Bulma"} description={"Gelir ve gider kalemlerinize göre kredi hesaplama ve ihtiyaç kredisi bulmanızı sağlayan hesaplama aracımız ile kredinizi bulun."} />

            <div className="container">
                <div className="row justify-content-center find-lcontent">
                    <div className="col-12 row mt-2 justify-content-center ">
                        <h1>Kredi Hesaplama ve Uygun Kredi Bulma</h1>
                        <p className="text-center">Gelir ve gider kalemleri bilgilerini girerek, çekebileceğiniz krediyi bulmanızı sağlayacak kredi hesaplama aracı ile kredi başvurusu yapabilirsiniz.  Tek yapmanız gereken aşağıdan ortalama aylık gelirinizi seçmeniz. Daha sonra aylık giderlerinizi seçecğiniz formdan gider tutarını seçip size en uygun kredilerin listelendiği sayfaya yönlendirileceksiniz. </p>

                    </div>
                    <div className="col-12">

                        <h2>Ortalama Aylık Gelirinizi Seçiniz</h2>
                        <hr className="title-hr mt-1" />
                    </div>

                    <div className="col-12 mt-4 cn-container">
                        <div className="row justify-content-center low-10-href ">
                            <a href="/kredi-bulucu/aylik-gelir-2000">2.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-4000">4.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-6000">6.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-8000">8.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-1000">10.000 ₺</a>
                        </div>
                        <div className="row justify-content-center big-10-href mt-5 mb-5">
                            <a href="/kredi-bulucu/aylik-gelir-12000">12.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-14000">14.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-16000">16.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-18000">18.000 ₺</a>
                            <a href="/kredi-bulucu/aylik-gelir-20000">20.000 ₺</a>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5  cl-content-font">
                    <div className="col-12 row mt-2 justify-content-center ">
                        <div className="col-12 text-center">
                            <h2>Gerlire Göre Kredi Hesaplama.</h2>

                        </div>
                        <div className="col-12">
                            <h3 className="text-center">Aylık gelir ve gidere göre kredi hesaplama nasıl yapılır? </h3>

                        </div>

                    </div>
                    <div className="col-12">
                        <p>Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken, gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                        </p>
                        <p> Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>



                    </div>
                </div>
            </div>
        </>
    );
}

export default FindLoanIndex;
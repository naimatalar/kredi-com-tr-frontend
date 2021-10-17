import { PriceSplitter } from "../../PriceSplitter";

export const priceShow = (amount) => {
    const data = {
        "2000": (
            <div className="row justify-content-center mt-5  cl-content-font">
                <div className="col-12 row mt-2 justify-content-center ">
                    <div className="col-12 text-center">
                        <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                    </div>
                    <div className="col-12">
                        <h3 className="text-center">{PriceSplitter(amount)} ₺ Aylık gelir ve gidere göre kredi hesaplama nasıl yapılır? </h3>
                    </div>
                </div>
                <div className="col-12">
                    <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak seçtiniz. Seçtiğiniz bu gelir tutarı gider olasılığınız hesaplanması için tahmnini aylık giderinizin ne kadar olacağını seçmenizi sağlayacak kutucuklar getirir. Bu kutucuktan giderinizi seçtiğinizde sistem size çekebileceğiniz tutarı ve bu tutarı hangi bankadan ne kadar vade ile çekebileceğinizi gösterir.
                        <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit1.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                        Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                    <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken, gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                    </p>
                    <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                    <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

                </div>
            </div>),

        "4000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit2.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "6000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit3.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "8000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit4.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "10000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit5.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "12000": (
            <div className="row justify-content-center mt-5  cl-content-font">
                <div className="col-12 row mt-2 justify-content-center ">
                    <div className="col-12 text-center">
                        <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                    </div>
                    <div className="col-12">
                        <h3 className="text-center">{PriceSplitter(amount)} ₺ Aylık gelir ve gidere göre kredi hesaplama nasıl yapılır? </h3>
                    </div>
                </div>
                <div className="col-12">
                    <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak seçtiniz. Seçtiğiniz bu gelir tutarı gider olasılığınız hesaplanması için tahmnini aylık giderinizin ne kadar olacağını seçmenizi sağlayacak kutucuklar getirir. Bu kutucuktan giderinizi seçtiğinizde sistem size çekebileceğiniz tutarı ve bu tutarı hangi bankadan ne kadar vade ile çekebileceğinizi gösterir.
                        <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit1.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                        Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                    <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken, gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                    </p>
                    <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                    <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

                </div>
            </div>),

        "14000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit2.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "16000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit3.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "18000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit4.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>),
        "20000": (<div className="row justify-content-center mt-5  cl-content-font">
            <div className="col-12 row mt-2 justify-content-center ">
                <div className="col-12 text-center">
                    <h2>{PriceSplitter(amount)} ₺ Gelire Göre Kredi Hesaplama.</h2>

                </div>
                <div className="col-12">
                    <h3 className="text-center">Ortalama {PriceSplitter(amount)} ₺ Aylık Gelir İle Nasıl Kredi Hesaplanır? </h3>
                </div>
            </div>
            <div className="col-12">
                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Gelirinizi {PriceSplitter(amount)} ₺ olarak belirtilmiş olup
                    seçtiğiniz bu gelir tutarı kredi hesaplanması için  aylık giderinizin ne kadar olacağını seçmenizi otomataik hesaplayip seçmeniz için kutucuklar getirir.
                    Bu seçenek kuruları gelirinize göre tahmini giderlerinizi sizin için hesaplar. Sizin giderlerinizle örtüşen seçeneğe tıklayarak devem edebilirsiniz.
                    <img className="pt-3 pr-3 pb-3" src={require("../../../assets/images/nakit5.jpg").default} style={{ width: "100%", maxWidth: 600, float: "left" }} />
                    Sonuçlar listelendiğinde "İncele" butonuna tıklayıp kredi detayını öğrenebilirsiniz</p>

                <p> &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Aylık gelir ve gider kalemlerine göre kredi hesaplama yaparken,
                    gelir ve gider arasındaki farka göre çekebileceğiniz en yüksek miktar ve en düşük tutar belirlenir. Bu tutarlar belirlendikten sonra kredi.com.tr
                    tarafından geliştirilen kredi hesaplama formülü uygulanır. Bu formül %95 oranında doğru kredi hesaplaması yapabilen bir algoritmadır.
                </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Yapılan hesaplama sonucunda kredi.com.tr bankalara ait verileri tarıyor. Bankaların faiz oranları vade ve vergilerle beraber hazırlanmış bir ödeme planı sunuyor.Bu hesaplamanın önemi ise kredi çekmek isteyen kişinin gerçek hayatta ne aylık ne kadar ödeyebileceğini belirlemesidir.  </p>
                <p>  &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  Farklı tür türde hesaplamalar yapmak durumdaysanız. kredi.com.tr kredi hesaplamanıza önemli derecede yardımı dokunacak bir diğer hesaplama aracı sunuyor. Bu kredi hesaplama aracı ihtiyaç kredi, konut kredisi, araç kredisi yada kobi kredilerini hesaplamanızı sağlıyor. Ayrıca bankaların size ne kadar kredi vereceğini hesaplayab diğer hesaplama aracımızı da <a href="/hesaplama" className="text-primary">buraya tıklayarak</a>  deneyebilirsiniz </p>

            </div>
        </div>)


    }


    return data
}
import React, { useEffect, useState } from 'react';
import { HowToPay } from '../calculate-page/HowToPay';
import { BankContainer } from '../containers/BankContainer';
import { FastLoan } from '../containers/FastLoan';
import { PriceSplitter } from '../PriceSplitter';
import Seo from '../Seo';
import { priceShow } from './Prices/prices';

function FindLoand2Page(props) {
    const [amount, setAmount] = useState()
    const [bAmount, setBAmount] = useState()

    useEffect(() => {
        var amount = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].split("-")[2]
        setAmount(parseInt(amount))
        setBAmount(parseInt(amount) / 10)

    }, [])
    let listHref = []
    {
        for (let index = 0; index < 8; index++) {

            listHref.push((index + 1) * bAmount)
        }
    }

 


    return (
        <>
            <Seo keyword={`kredi hesaplama,kredi başvuru,hesaplama`} title={PriceSplitter(amount) + " TL Maaş İle Kredi Hesaplama"} description={`Aylık ${PriceSplitter(amount)} ₺ maaş ile ne kadar kredi çekebileceğinizi hesaplayın, öğrenin ve hesaplanan krediye başvuru yapın. Seçtiğiniz gelir(maaş) ve gideriniz sistem tarafından size en uygun kredinin bulunması için kredi hesaplama yapar.`} />

            <div className="container">
                <div className="row justify-content-center find-lcontent">
                    <div className="col-12 row mt-2 justify-content-center mt-4">
                        <h1>Aylık{PriceSplitter(amount)} ₺ Gelir İle Kredi Hesaplama</h1>
                        <p className="text-center">Aylık {PriceSplitter(amount)} ₺ geliriniz bulunuyor. Bu geliriniz ile kredi hesaplama yapılması için aşağıdan ortalama aylık giderinizi seçiniz. Seçiminiz sonunda size en uygun krediler hesaplanacak. </p>

                    </div>
                    <div className="col-12 mt-3">

                        <h2>{PriceSplitter(amount) } ₺ Gelirinize Aylık Gider Ekleyin"?</h2>
                        <hr className="title-hr mt-1" />
                    </div>

                    <div className="col-12  cn-container">
                        <div className="row justify-content-center low-10-href-2 ">

                            {
                                listHref.map((item, key) => {
                                    let cls = ""
                                    if (key > 0) {
                                        cls = "sc"
                                    }
                                    return (
                                        <div key={key} className="col-6 col-lg-3 col-md-3 mb-5 row justify-content-center align-content-center">

                                            <a className={"row justify-content-center align-content-center a" + key + " " + cls} href={"/gelire-gore-kredi-hesapla/gelir-" + amount + "-gider-" + item}>{PriceSplitter(item)} ₺</a>

                                        </div>

                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
                {
                    priceShow()[amount]
                }

                <div className="row mt-4">
                    <div className="col-12 col-md-8 col-lg-8 mt-3">
                        <HowToPay></HowToPay>


                    </div>
                    <div className="col-lg-4 col-md-4  col-12" style={{ marginBottom: 20 }}  >
                        <FastLoan ></FastLoan>
                    </div>

                </div>
                <div className="row justify-content-center mt-5">

                <BankContainer Banks={props.Banks}></BankContainer>

                </div>


            </div>
        </>
    );


}

export default FindLoand2Page;
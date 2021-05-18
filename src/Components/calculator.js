import React from "react"

const calculator=(rate,amount,term,vergi,kkdv)=>{
// vergi = 5, kkdf = 15;
    var aOdenen = 0;
    var aKalan = 0;
    var faizOrani = rate
    var tutar = amount;
    var taksitSayisi = term;
    var brutFaiz = ((faizOrani + (faizOrani * vergi / 100) + (faizOrani * kkdv / 100)) / 100);
    var taksit = ((Math.pow(1 + brutFaiz, taksitSayisi) * brutFaiz) / (Math.pow(1 + brutFaiz, taksitSayisi) - 1)) * tutar;

    var list = []
    var totalPayment = taksit

    for (let index = 0; index < term; index++) {
        var aYeniTutar = + amount - aOdenen;
        var aFaiz = aYeniTutar * parseFloat(rate) / 100;
        var aVergi = aFaiz * (vergi + kkdv) / 100;
        aOdenen = taksit - aFaiz - aVergi;
        aKalan = amount - aOdenen;


        list.push({
            tutar: aYeniTutar,
            faiz: aFaiz,
            vergi: aVergi,
            odenen: aOdenen,
        })
    }
    return({totalpayment:totalPayment,paymentPlan:[list]})
}
export default calculator;
import React from "react"

const calculator = (rate, amount, term, vergi, kkdv) => {
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
    var anaOdenen = 0;
    var aYeniTutar = 0;
    var aFaiz = 0;
    var totalFaiz=0;
    var totalVergi=0;
    for (let index = 0; index < term; index++) {
        aYeniTutar = (amount - anaOdenen);
        var aFaiz = aYeniTutar * parseFloat(rate) / 100;
        var aVergi = aFaiz * (vergi + kkdv) / 100;
        aOdenen = taksit - aFaiz - aVergi;
        anaOdenen +=  aOdenen;
        aKalan = tutar - anaOdenen;
         totalFaiz+=aFaiz;
         totalVergi+=aVergi;
        list.push({
            tutar: aKalan,
            faiz: aFaiz,
            vergi: aVergi,
            odenen: aOdenen,
            
        })

    }
    return ({ totalVergi:totalVergi,totalFaiz:totalFaiz, totalpayment: totalPayment, paymentPlan: list })
}
export default calculator;
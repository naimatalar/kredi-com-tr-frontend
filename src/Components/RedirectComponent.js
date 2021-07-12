
import React from "react";
import { apiurl, GetNoneToken, PostNoneToken } from "../datacrud/datacrud";

export const loanRedirect = async (loanUrlName, Url = null, BankId = null, ObjectId = null, LoanRedirectModel = { bankName: null, amount: null, loanName: null, rate: null, term: null }) => {
    
    try {
        LoanRedirectModel.amount = LoanRedirectModel.amount.toString()
    } catch (error) {

    }
    var d = {
        redirectType: 0,
        url: Url,
        bankId: BankId,
        objectId: ObjectId,
        loanRedirectModel: LoanRedirectModel
    }

    var data = await PostNoneToken("RedirectDatas/LoanRedirect", d).then(x => { return x.data }).catch(x => { return false })
    window.location.replace("/" + loanUrlName + "-basvuru?o=" + data.id+"&t=0")
}

export const creditCartRedirect = async (creditCartUrl, Url = null, BankId = null, ObjectId = null, CreditCartRedirectModel = { bankName: null, creditCartName: null }) => {
    

    var d = {
        redirectType: 1,
        url: Url,
        bankId: BankId,
        objectId: ObjectId,
        creditCartRedirectModel: CreditCartRedirectModel
    }

    var data = await PostNoneToken("RedirectDatas/CreditCartRedirect", d).then(x => { return x.data }).catch(x => { return false })
   if (creditCartUrl) {
           window.location.replace("/" + creditCartUrl + "-basvuru?o=" + data.id+"&t=1")

   } 
    window.location.replace("/kredi-karti-basvuru?o=" + data.id+"&t=1")
}
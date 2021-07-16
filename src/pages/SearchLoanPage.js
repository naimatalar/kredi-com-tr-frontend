import React, { useEffect, useState } from "react"
import { apiurl, GetNoneToken, PostNoneToken } from "../datacrud/datacrud"
import { LoanRate } from "../Components/containers/LoanRate";
import CurrencyInput from "react-currency-input";
import Dropdown from 'react-dropdown';
import { loanRedirect } from "../Components/RedirectComponent";
export const SearchLoanPage = (props) => {
  var [data, setData] = useState([])
  const [loansOption, setLoanOption] = useState([])
  const [terms, setTerms] = useState([])
  const [termsValue, setTermsValue] = useState()
  const [staticTerm, setStaticTerm] = useState()

  const [amount, setAmount] = useState(null)
  const [loanType, setLoanType] = useState()
  useEffect(() => {
    start()
  }, [])

  const start = async () => {
    let lns = [];
    for (const item of props.Loans) {
      lns.push({ label: item.loanName, value: item.id })
    }
    setLoanOption(lns)
    let amount = new URLSearchParams(props.location.search).get("amount")||0
    let term = new URLSearchParams(props.location.search).get("term")||0



    setAmount(amount)

    loanTypeOnChange(props.Loan.id)
    setTermsValue(term)
    setStaticTerm(term)

    var d = {
      loanTypeId: props.Loan.id,
      amount: amount,
      term: term
    }
    var terms = await PostNoneToken("InterestRates/GetLoanSearchResult", d).then(x => { return x.data }).catch(x => { return false })

    setData(terms)
  }

  const loanTypeOnChange = async (id) => {

    var terms = await GetNoneToken("InterestRates/GetLoanTerms/" + id).then(x => { return x.data }).catch(x => { return false })

    let termsList = [];
    terms?.map((item, key) => {
      termsList.push({ label: item, value: item })
    })
    setTerms(terms)
    setLoanType(id)
  }
  const termListOnChange = async (val) => {

    setTermsValue(val)

  }

  const calculate = async () => {
    var data = {
      loanTypeId: loanType,
      amount: (amount != null ? amount.replace("₺", "").replace(".", "") : ""),
      term: termsValue
    }

    if (data.loanTypeId) {
      var urlName = props.Loans.find(x => x.id == data.loanTypeId)?.urlName

      let prm = new URLSearchParams()
      prm.set("amount", data.amount)
      prm.set("term", data.term)
      window.location.replace("/" + urlName + "-arama-hesaplama?" + prm)
    }
  }



  return (<div className="container">
    <div className="row mt-3">
      <div className="col-12  ">

        <div className="col-12 mb-3">
          <div className="row" style={{ background: "#072a7a5c", padding: "29px 0px 13px 0" }}>
            <div className="col-12 col-md-3 mb-2">
              <Dropdown
                options={loansOption}
                onChange={(element) => loanTypeOnChange(element.value)}
                placeholder="Kredi Türü Seçiniz"
                arrowClassName="dropdownArrow"
                value={loanType}
              />

            </div>
            <div className="col-12  col-md-3 mb-2">

              <CurrencyInput style={{ width: "100%", maxWidth: "100%" }} placeholder="Tutar Giriniz" className="col-7"
                decimalSeparator=","
                thousandSeparator="."
                precision="0"
                onChange={(x) => { setAmount(x) }}
                value={amount}

                prefix="₺"
              />
              {/* <input type="text" ></input> */}
            </div>
            <div className="col-12 col-md-3 mb-3">
              <Dropdown
                options={terms}
                onChange={(d) => { termListOnChange(d.value) }}
                placeholder="Vade"
                arrowClassName="dropdownArrow"
                value={termsValue}

              />
            </div>


            <div className="col-6 col-md-3" style={{ justifyontent: "flex-end", }}>
              <button onClick={(x) => { calculate() }} className="default-button" type="submit">TEKRAR ARA</button>
            </div>
          </div>

        </div>
        <hr></hr>


      </div>
      <div className="col-12 col-md-4 d-none d-lg-flex d-md-flex">
        <LoanRate></LoanRate>

      </div>
      <div className="col-12 col-md-8">

        {
          data?.map((item, key) => {

            return (
              <div key={key} className="col-12 row loan-search-list-item mb-3">
                <div className="col-3">
                  <div className="mb-2">
                    <img title={item?.loanInfo?.bankName + " " + item?.loanInfo?.loanName} alt={item?.loanInfo?.bankName + " " + item?.loanInfo?.loanName + " sorgulama"} src={apiurl + item?.loanInfo?.bankLogoUrl} style={{ width: "100%" }}></img>
                  </div>

                  <div className="mb-2" style={{ color: "grey", textAlign: "center" }}>{item?.loanInfo?.loanName}</div>
                </div>
                <div className="col-2">
                  <div className="">
                    <span style={{ color: "grey" }}>Faiz Oranı</span>
                  </div>

                  <div className="mb-2"><b style={{ color: "Black" }}>{item?.loanInfo?.rate}</b></div>
                </div>
                <div className="col-2">
                  <div className="">
                    <span style={{ color: "grey" }}>Aylık Taksit</span>
                  </div>

                  <div className="mb-2">
                    <CurrencyInput style={{
                      padding: 0,
                      border: "none",
                      display: "inline",
                      float: "left",
                      background: "none",
                      color: "black",
                      fontWeight: "bold",
                      maxWidth: "100%"

                    }}
                      className="col-7"
                      decimalSeparator=","
                      thousandSeparator="."
                      precision="2"
                      disabled
                      suffix=" TL"
                      value={item?.calculatorInfo?.aylikOdeme?.toFixed(0)} />


                  </div>
                </div>
                <div className="col-3">
                  <div className="">
                    <span style={{ color: "grey" }}>Toplam Ödeme</span>
                  </div>

                  <div className="mb-2">
                    <CurrencyInput style={{
                      padding: 0,
                      border: "none",
                      display: "inline",
                      float: "left",
                      background: "none",
                      color: "black",
                      fontWeight: "bold",
                      maxWidth: "100%"

                    }}
                      className="col-7"
                      decimalSeparator=","
                      thousandSeparator="."
                      precision="2"
                      disabled
                      suffix=" TL"
                      value={(item?.calculatorInfo?.aylikOdeme) * parseInt(staticTerm).toFixed(0)} />
                  </div>
                </div>
                <div className="col-2 row m-0 justify-content-center align-content-space-between" style={{ height: 80 }}>
                  <div className="">
                    <button
                      onClick={() => loanRedirect(item?.loanInfo?.loanUrlName,
                        item?.loanInfo?.redirectUrl,
                        item?.loanInfo?.bankId,
                        item?.loanInfo?.interestRateId,
                        {
                          bankName: item.loanInfo.bankName,
                          amount: amount,
                          loanName: item.loanInfo.loanName,
                          rate: item.loanInfo.rate.toString(),
                          term: termsValue
                        })}
                      className="loan-search-list-item-button default-button">BAŞVUR</button>
                  </div>

                  <div className="mb-2" style={{ textAlign: "center" }}>
                    <a href={"/bankalar/" + item?.loanInfo?.bankUrlName + "-kredi-hesaplama-ve-basvuru?amount=" + amount + "&term=" + staticTerm + "&loanId=" + item.loanInfo.interestRateId + ""} style={{ fontWeight: "bold", color: "rgb(85 0 195)", textDecoration: "underline" }}  >Detay</a>
                  </div>
                </div>

              </div>)

          })
        }{
          data?.length == 0 && <div className="col-12 row text-center justify-content-center"><b><i style={{color:"#b0b0b0"}}>Sonuç Bulunamadı !</i></b>  </div>
        }
      </div>

    </div>
  </div>)
}
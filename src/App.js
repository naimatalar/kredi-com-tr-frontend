import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import bankdemodata from "./bankdemodata";
import loantypedemodata from "./loantypedemodata";

import Footer from "./Components/Footer";

import NavigationTree from "./Components/navigationTree";
import { Banks } from "./pages/Banks";
import CreditCart from "./pages/CreditCart";
import { Home } from "./pages/Home";
import { LoanBank } from "./pages/LoanBank";
import Loan from "./pages/Loan";
import { apiurl, GetNoneToken, PostNoneToken } from "./datacrud/datacrud";
import { SearchLoanPage } from "./pages/SearchLoanPage";
import Head from "next/head";
import { DispositSearchPage } from "./pages/DispositSearchPage";
import { DispositSearchResult } from "./pages/DispositSearchResult";
import { RedirectProduct } from "./pages/RedirectProduct";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { CreditCartDetail } from "./pages/CreditCartDetail";
import { CalculatePage } from "./pages/CalculatePage";
import { Faq } from "./pages/Faq";
import homepage from "./Components/Schduler/Homepage";
import Homepage from "./Components/Schduler/Homepage";
import axios from "axios";
import { route } from "next/dist/next-server/server/router";
export default function App(props) {
  const [bankNavigation, setBankNavigation] = useState([]);
  const [loanNavigation, setLoanNavigation] = useState([]);
  const [blogNavigation, setBlogNavigation] = useState([]);
  const [creditCartName, setCreditCartName] = useState([]);
  const [blg, setBlg] = useState([]);
  const [sss_, setSss_] = useState([]);

  useEffect(() => {

    start();

  }, [])

  const start = async () => {

    var hp = await GetNoneToken("HomePageData/getHomePageData").then(x => { return x.data }).catch(x => { return false })
    setCreditCartName(hp.creditCarts)
    setBlogNavigation(hp.blogs)
    setLoanNavigation(hp.loanType)
    setBankNavigation(hp.Bank)

  }



  return (
    <Router>

      <NavigationTree BankNavigation={bankNavigation} LoanNavigation={loanNavigation}></NavigationTree>

      <div>
        <Switch>

          <Route exact path="/" render={(props) => <div className="master-content"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
          </Route>


          {loanNavigation.map((item, key) => {
            return (
              <Route key={key} path={"/" + item.urlName} render={(props) => <Loan {...props} Loan={item} LoanId={item.id}></Loan>}>

              </Route>
            )
          })}



          <Route path="/vadeli-mevduati-hesaplama-ve-basvuru" render={(props) => < DispositSearchResult {...props} />}>

          </Route>
          {loanNavigation.map((item, key) => {
            return (
              <Route key={key} path={"/" + item.urlName + "-arama-hesaplama"} render={(props) => <SearchLoanPage Loan={item} Loans={loanNavigation} {...props} ></SearchLoanPage>}>

              </Route>
            )
          })}
          {loanNavigation.map((item, key) => {
            return (
              <Route key={key} path={"/" + item.urlName + "-basvuru"} render={(props) => <RedirectProduct {...props} ></RedirectProduct>}>

              </Route>
            )
          })}

          <Route path="/soru-cevap" render={(props) => < Faq {...props} />}>

          </Route>



          <Route path="/kredi-karti/ticari-kredi-kartlari">
            <CreditCart cartType="corporate" />
          </Route>
          <Route path="/kredi-karti/mil-veren-kredi-kartlari">
            <CreditCart cartType="miles" />
          </Route>
          <Route path="/kredi-karti/puan-veren-kredi-kartlari">
            <CreditCart cartType="point" />
          </Route>
          <Route path="/kredi-karti">
            <CreditCart cartType="all" />
          </Route>
          <Route path="/hesaplama/kredi-hesaplama">
            <CalculatePage UrlName="kredi-hesaplama" />
          </Route>

          <Route path="/hesaplama/aylik-ne-kadar-odeyebilirim">
            <CalculatePage UrlName="aylik-ne-kadar-odeyebilirim" />
          </Route>

          <Route path="/hesaplama">
            <CalculatePage UrlName="-" />
          </Route>

          <Route path={"/vadeli-mevduati-basvuru"} render={(props) => <RedirectProduct  {...props} ></RedirectProduct>}>
          </Route>




          {
            bankNavigation.map((item, key) => {
              return (
                <Route key={key} path={'/bankalar/' + item.bankUrlName} render={(props) => <Banks {...props} Banks={bankNavigation} BankId={item.id}></Banks>}>

                </Route>
              )
            })
          }


          {
            bankNavigation.map((item, key) => {
              return (

                <Route key={key} path={'/bankalar/' + item.bankUrlName + "-kredi-hesaplama-ve-basvuru"}
                  render={(props) => <LoanBank  {...props} BankId={item.id}></LoanBank>} >

                </Route>
              )
            })
          }



          <Route exact path="/haberler-bilgiler">
            <Blog Banks={bankNavigation} ></Blog>
          </Route>

          {
            blogNavigation?.map((item, key) => {
              return (

                <Route exact key={key} path={'/haberler-bilgiler/' + item.urlName}
                  render={(props) => <BlogDetail  {...props} blogName={item.urlName}></BlogDetail>} >

                </Route>
              )
            })
          }

          {creditCartName?.map((item, key) => {

            return (
              <Route key={key + "55d6"} path={"/" + item.bankUrlName + "/" + item.urlName} render={(props) => <CreditCartDetail {...props} data={item} ></CreditCartDetail>}>

              </Route>
            )
          })}

          <Route path="/bankalar">
            {
              bankNavigation.map((item, key) => {
                return (
                  <Route key={key} path={'/bankalar/' + item.bankUrlName} render={(props) => <Banks {...props} Banks={bankNavigation} BankId={item.id}></Banks>}>
                  </Route>
                )
              })
            }
            {/* <Route render={(props) => <div className="master-content"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>

            </Route> */}

          </Route>
          <Route path="/vadeli-mevduat-sorgulama" render={(props) => <DispositSearchPage {...props} />}>

          </Route>

          <Route render={(props) => <div className="master-content"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>

          </Route>


        </Switch>
        {/* <div style={{ textAlign: "center", color: "red", textDecoration: "underline" }}>Platformumuz yapım aşamasındadır.<br></br>Faiz oranları, vadeler, kredi kartı fırsatları şu anlık <b style={{ color: "red" }}>gerçek bilgiler değildir.</b><br></br>Gerçek bilgiler için bankanın web sitelerini ziyaret edebilirsiniz.</div> */}
      </div>

      <div className="footer">

        <Footer></Footer>
        <div className="footer-copyright text-center py-2" style={{ fontSize: 12 }}>© 2020 Copyright:
          <a href="/"> kredi.com.tr</a>
        </div>
      </div>

      <Route path={"/kredi-karti-basvuru"} render={(props) => <RedirectProduct {...props}  ></RedirectProduct>}>
      </Route>
      <Route path={"/mevduat-basvuru"} render={(props) => <RedirectProduct {...props}  ></RedirectProduct>}>
      </Route>

      <Route exact path="/setdata" render={(props) => <Homepage></Homepage>}>

      </Route>


    </Router >
  );
}



function About() {
  return <h2>Kredi Kartı</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
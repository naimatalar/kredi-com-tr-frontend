import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Footer from "./Components/Footer";



// const {Banks}= lazy(() => import("./pages/Banks"));
// const CreditCart = lazy(() => import("./pages/CreditCart"));
// const {Home} = lazy(() => import("./pages/Home"));

// import { Banks } from "./pages/Banks";

import NavigationTree from "./Components/navigationTree";
// import CreditCart from "./pages/CreditCart";
// import  Home  from "./pages/Home";
// import  LoanBank  from "./pages/LoanBank";
// import Loan from "./pages/Loan";
import { GetNoneToken } from "./datacrud/datacrud";
import { SearchLoanPage } from "./pages/SearchLoanPage";
// import DispositSearchPage  from "./pages/DispositSearchPage";
// import  DispositSearchResult  from "./pages/DispositSearchResult";
// import  RedirectProduct  from "./pages/RedirectProduct";
// import  Blog  from "./pages/Blog";
// import  BlogDetail  from "./pages/BlogDetail";
// import  CreditCartDetail  from "./pages/CreditCartDetail";
// import CalculatePage  from "./pages/CalculatePage";
// import  Faq  from "./pages/Faq";
import Homepage from "./Components/Schduler/Homepage";

// import CreditCartCampaing from "./pages/CreditCartCampaing";
// import CreditCartCampaingDetail from "./pages/CreditCartCampaingDetail";

import Loading from "./pages/Loading";
export default function App(props) {
  const [bankNavigation, setBankNavigation] = useState([]);
  const [loanNavigation, setLoanNavigation] = useState([]);
  const [blogNavigation, setBlogNavigation] = useState([]);
  const [creditCartName, setCreditCartName] = useState([]);
  const [blg, setBlg] = useState([]);
  const [sss_, setSss_] = useState([]);
  const Banks = lazy(() => import("./pages/Banks"));
  const CreditCart = lazy(() => import("./pages/CreditCart"));
  const Home = lazy(() => import("./pages/Home"));
  const LoanBank = lazy(() => import("./pages/LoanBank"));
  const Loan = lazy(() => import("./pages/Loan"));
  const DispositSearchPage = lazy(() => import("./pages/DispositSearchPage"));
  const DispositSearchResult = lazy(() => import("./pages/DispositSearchResult"));
  const RedirectProduct = lazy(() => import("./pages/RedirectProduct"));
  const Blog = lazy(() => import("./pages/Blog"));
  const BlogDetail = lazy(() => import("./pages/BlogDetail"));
  const CreditCartDetail = lazy(() => import("./pages/CreditCartDetail"));
  const CalculatePage = lazy(() => import("./pages/CalculatePage"));
  const Faq = lazy(() => import("./pages/Faq"));
  // const Homepage = lazy(() => import("./pages/Homepage"));
  const CreditCartCampaing = lazy(() => import("./pages/CreditCartCampaing"));
  const CreditCartCampaingDetail = lazy(() => import("./pages/CreditCartCampaingDetail"));
  require('react-dropdown/style.css');

  
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

      <div style={{ width: "100%", overflow: "hidden" }}>
        <Suspense fallback={<Loading></Loading>}>
          <Switch>

            <Route exact path="/" render={(props) => <div className="container"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
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
            <Route path="/hesaplama/ihtiyca-kredi-hesaplama">
              <CalculatePage UrlName="ihtiyca-kredi-hesaplama" />

            </Route>



            <Route path="/hesaplama/aylik-ne-kadar-odeyebilirim">
              <CalculatePage UrlName="aylik-ne-kadar-odeyebilirim" />
            </Route>
            <Route path="/hesaplama/ihtiyac-kredisi-hesaplama">
              <CalculatePage UrlName="ihtiyac-kredisi-hesaplama" />
            </Route>
            <Route path="/hesaplama/arac-kredisi-hesaplama">
              <CalculatePage UrlName="arac-kredisi-hesaplama" />
            </Route>
            <Route path="/hesaplama/konut-kredisi-hesaplama">
              <CalculatePage UrlName="konut-kredisi-hesaplama" />
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



            <Route exact path={"/kredi-karti-kampanyalari/:slug"} render={(props) => <CreditCartCampaingDetail {...props} ></CreditCartCampaingDetail>}>

            </Route>

            <Route path="/kredi-karti-kampanyalari" exact render={(props) => <CreditCartCampaing {...props} ></CreditCartCampaing>}>
            </Route>
            <Route exact path="/haberler-bilgiler">
              <Blog Banks={bankNavigation} ></Blog>
            </Route>



            <Route exact path={'/haberler-bilgiler/:slug'}
              render={(props) => <BlogDetail  {...props} ></BlogDetail>} >

            </Route>


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


            </Route>
            <Route path="/vadeli-mevduat-sorgulama" render={(props) => <DispositSearchPage {...props} />}>

            </Route>

            {/* <Route path="*" render={(props) => <Loading {...props}></Loading>}>

          </Route> */}


          </Switch>
        </Suspense>
        {/* <div style={{ textAlign: "center", color: "red", textDecoration: "underline" }}>Platformumuz yapım aşamasındadır.<br></br>Faiz oranları, vadeler, kredi kartı fırsatları şu anlık <b style={{ color: "red" }}>gerçek bilgiler değildir.</b><br></br>Gerçek bilgiler için bankanın web sitelerini ziyaret edebilirsiniz.</div> */}
      </div>

      <div className="footer">

        <Footer></Footer>
        <div className="footer-copyright text-center py-2" style={{ fontSize: 12 }}>© 2020 Copyright:
          <a href="/"> kredi.com.tr</a>
        </div>
      </div>

      <Route path={"/kredi-karti-basvuru/"} render={(props) => <RedirectProduct {...props}  ></RedirectProduct>}>
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
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
import { SearchLoanPage2 } from "./pages/SearchLoanPage2";
import { SearchLoanPage } from "./pages/SearchLoanPage";
import { OnlyCalculate } from "./pages/OnlyCalculate";

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
import MounthlyCalculate from "./pages/MounthlyCalculate";
import PersonalLoan from "./pages/homePages/PersonalLoan";
import CarLoan from "./pages/homePages/CarLoan";
import HomeLoan from "./pages/homePages/HomeLoan";
import BusinesLoan from "./pages/homePages/BusinesLoan";
import KediHesaplama from "./pages/kredi-hesaplama";


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
  const CreditCartCampaing = lazy(() => import("./pages/CreditCartCampaing"));
  const CreditCartCampaingDetail = lazy(() => import("./pages/CreditCartCampaingDetail"));
  const FindLoan = lazy(() => import("./pages/FindLoan"));
  const About = lazy(() => import("./pages/About"));
  const ContactUs = lazy(() => import("./pages/ContactUs"));




  const [loading, setLoading] = useState(false);




  useEffect(() => {

    start();

  }, [])

  const start = async () => {
    var hp = await GetNoneToken("HomePageData/getHomePageData").then(x => { return x.data }).catch(x => { return false })
    setCreditCartName(hp.creditCarts)
    setBlogNavigation(hp.blogs)
    setLoanNavigation(hp.loanType)
    setBankNavigation(hp.Bank)
    setLoading(true);
  }

  if (loading == false) {
  return( <div></div>)
  }


  else {

    return (
      <Router>
        <NavigationTree BankNavigation={bankNavigation} LoanNavigation={loanNavigation}></NavigationTree>
        <Suspense fallback={<div></div>}>
          <div style={{ width: "100%", overflow: "hidden" }}>

            <Switch>

              <Route exact path="/" render={(props) => <div className="container"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>

              <Route exact path="/about" render={(props) => <div className="container"> <About Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
                   <Route exact path="/iletisim" render={(props) => <div className="container"> <ContactUs /></div>}>
              </Route>
              <Route exact path="/kredi-bulucu" render={(props) => <div className="container"> <FindLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/kredi-bulucu/:slug" render={(props) => <div className="container"> <FindLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/kredi-bulucu/:slug/:slug" render={(props) => <div className="container"> <FindLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/gelire-gore-kredi-hesapla/:slug" render={(props) => <div className="container"> <MounthlyCalculate Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/kredi-hesaplama" render={(props) => <div className="container"> <KediHesaplama Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>

              {loanNavigation.map((item, key) => {
                return (
                  <Route key={key} path={"/" + item.urlName} render={(props) => <Loan {...props} Loan={item} LoanId={item.id}></Loan>}>

                  </Route>
                )
              })}

              <Route exact path="/ihtiyac-kredisi-hesaplama" render={(props) => <div className="container"> <PersonalLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/tasit-kredisi-hesaplama" render={(props) => <div className="container"> <CarLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/konut-kredisi-hesaplama" render={(props) => <div className="container"> <HomeLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
              <Route exact path="/kobi-kredisi-hesaplama" render={(props) => <div className="container"> <BusinesLoan Loans={loanNavigation} {...props} Banks={bankNavigation} /></div>}>
              </Route>
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
                      render={(props) => <LoanBank  {...props} BankId={item.id} Banks={bankNavigation}></LoanBank>} >
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



              <Route path={'/haberler-bilgiler/:slug'}
                render={(props) => <BlogDetail  {...props} ></BlogDetail>} >

              </Route>


              <Route path={"/kredi-hesaplama/:slug"} render={(props) => <SearchLoanPage2  {...props} ></SearchLoanPage2>}>

              </Route>

              <Route path={"/kredi-hesaplama-detaylari/:slug"} render={(props) => <OnlyCalculate {...props} ></OnlyCalculate>}>

              </Route>
              {creditCartName?.map((item, key) => {

                return (
                  <Route exact key={key + "55d6"} path={"/" + item.bankUrlName + "/" + item.urlName} render={(props) => <CreditCartDetail {...props} data={item} ></CreditCartDetail>}>

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


            {/* <div style={{ textAlign: "center", color: "red", textDecoration: "underline" }}>Platformumuz yapım aşamasındadır.<br></br>Faiz oranları, vadeler, kredi kartı fırsatları şu anlık <b style={{ color: "red" }}>gerçek bilgiler değildir.</b><br></br>Gerçek bilgiler için bankanın web sitelerini ziyaret edebilirsiniz.</div> */}
          </div>

          <div className="footer">

            <Footer></Footer>
            <div className="footer-copyright text-center py-2" style={{ fontSize: 12 }}>© 2009 Copyright:
              <a href="/"> kredi.com.tr</a>
            </div>
          </div>

          <Route exact path={"/kredi-karti-basvuru"} render={(props) => <RedirectProduct {...props}  ></RedirectProduct>}>
          </Route>
          <Route exact path={"/mevduat-basvuru"} render={(props) => <RedirectProduct {...props}  ></RedirectProduct>}>
          </Route>

          <Route exact path="/setdata" render={(props) => <Homepage></Homepage>}>

          </Route>

        </Suspense>

      </Router >
    );

  }
  return (<></>)


}



function About() {
  return <h2>Kredi Kartı</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
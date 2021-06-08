import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import { GetNoneToken, PostNoneToken } from "./datacrud/datacrud";

export default function App(props) {
  const [bankNavigation, setBankNavigation] = useState([]);
  const [loanNavigation, setLoanNavigation] = useState([]);

  useEffect(() => {

    start();

  }, [props])

  const start = async () => {
    var Bank = await GetNoneToken("Banks/GetAllBankSite").then(x => { return x.data }).catch(x => { return false })
   
    var loanType = await GetNoneToken("LoanTypes/GetAllSite").then(x => { return x.data }).catch(x => { return false })
    setLoanNavigation(loanType)


    setBankNavigation(Bank)
  }

  return (
    <Router>

      <NavigationTree BankNavigation={bankNavigation} LoanNavigation={loanNavigation}></NavigationTree>
      <div>
        <Switch>
          <Route  exact path="/" render={(props)=>   <div className="master-content"> <Home Loans={loanNavigation} {...props} Banks={bankNavigation}  /></div>}>
         
          </Route>

          {loanNavigation.map((item, key) => {
            return (
              <Route key={key} path={"/" + item.urlName} render={(props) => <Loan {...props} LoanId={item.id}></Loan>}>

              </Route>
            )


          })}

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


          <Route exact path="/bankalar">
            <Banks BankId=""></Banks>
          </Route>

        </Switch>
      </div>
      <div className="footer">
        <Footer></Footer>
        <div className="footer-copyright text-center py-2" style={{ fontSize: 12 }}>© 2020 Copyright:
               <a href="/"> kredi.com.tr</a>
        </div>
      </div>

    </Router >
  );
}



function About() {
  return <h2>Kredi Kartı</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
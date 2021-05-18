import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import bankdemodata from "./bankdemodata";
import Footer from "./Components/Footer";

import NavigationTree from "./Components/navigationTree";
import { Banks } from "./pages/Banks";
import CreditCart from "./pages/CreditCart";
import { Home } from "./pages/Home";
export default function App() {
  const [bankNavigation, setBankNavigation] = useState([]);
  useEffect(() => {
    setBankNavigation(bankdemodata)

  }, [])

  return (
    <Router>

      <NavigationTree BankNavigation={bankNavigation}></NavigationTree>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="master-content">
              <Home />
            </div>
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



          {
            bankNavigation.map((item, key) => {
              return (
                <Route key={key} path={'/bankalar/' + item.bankUrlName}>
                  <Banks BankId={item.id}></Banks>
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
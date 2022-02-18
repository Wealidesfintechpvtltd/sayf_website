import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Terms from "./Terms";
import Privacy from "./privacy";
import Login from "./pages/Login";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sip from "./Components/sipWithSayf/Sip";
import LinkYourUPI from "./Components/linkYourUPI/linkYourUPI";
import KYC from "./Components/knowYourCustomer/knowYourCustomer";
import mRewards from "./Components/myRewards/myRewards";
import Blogs from "./Components/Blogs/Blogs";
import Blog from "./Components/Blogs/Blog";
import Blog2 from "./Components/Blogs/Blog2";
import Blog3 from "./Components/Blogs/Blog3";
import Blog4 from "./Components/Blogs/Blog4";
import Blog5 from "./Components/Blogs/Blog5";
import Blog6 from "./Components/Blogs/Blog6";
import Blog7 from "./Components/Blogs/Blog7";
import Blog8 from "./Components/Blogs/Blog8";
import Blog9 from "./Components/Blogs/Blog9";
import Blog10 from "./Components/Blogs/essential-points-to-know-before-investing-in-digital-gold";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/sipWithSayf">
          <Sip />
        </Route>
        <Route exact path="/linkYourUPI">
          <LinkYourUPI />
        </Route>
        <Route exact path="/knowYourCustomer">
          <KYC />
        </Route>
        <Route exact path="/myRewards">
          <mRewards />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/blogs/digital-gold-guide">
          <Blog />
        </Route>
        <Route exact path="/blogs/digital-gold">
          <Blog2 />
        </Route>
        <Route exact path="/blogs/7-surprising-facts">
          <Blog3 />
        </Route>
        <Route
          exact
          path="/blogs/why-are-investors-so-obsessed-With-digital-gold"
        >
          <Blog4 />
        </Route>
        <Route exact path="/blogs/time-to-invest-in-digital-gold-with-sayf">
          <Blog5 />
        </Route>
        <Route
          exact
          path="/blogs/gold-safe-investment-option-that-captivates-investor"
        >
          <Blog6 />
        </Route>
        <Route exact path="/blogs/personal-finance-and-savings">
          <Blog7 />
        </Route>
        <Route exact path="/blogs/investment-option-that-captivates-investor">
          <Blog8 />
        </Route>
        <Route exact path="/blogs/gold-etf-all-you-need-to-know">
          <Blog9 />
        </Route>
        <Route
          exact
          path="/blogs/essential-points-to-know-before-investing-in-digital-gold"
        >
          <Blog10 />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

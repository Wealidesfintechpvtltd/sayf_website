import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from "../../assets/sevenFacts.PNG";
import search from "../../assets/search.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import linkedIn from "../../assets/linked.png";

const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogNavbar">
        <Navbar className="blogNav" />
      </div>
      <div className="search">
        <input type="text" placeholder="Seach for blogs..." />
        <img src={search} alt="" />
      </div>
      <div className="blog">
        <div className="author">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <h4 className="category">Finance</h4>
            <h1>7 Surprising Facts You Need to Know About Digital Gold</h1>
            <p className="author-brief">
              {/* Slack’s co-founder and CTO weighs in on why—even when it’s safe to return to the office—there’s no going back to business as usual */}
            </p>
            <p className="blogDetails">
              By the team at SayF <br />
              January 30th, 2022
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="readtime">
            <b>6 mins read</b>
          </div>
          <div className="links">
            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.sayf.in/#/blogs/7-surprising-facts&text=7%20Surprising%20Facts%20via%20@sayfinvest">
              {" "}
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.sayf.in/#/blogs/7-surprising-facts">
              {" "}
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.sayf.in/#/blogs/7-surprising-facts">
              {" "}
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
        <br />
        <p>
          With the rise of digital platforms, many people are making investments
          in Digital Gold without any hassle. However, knowing what exactly is
          Digital Gold is an essential aspect. The last couple of years has seen
          price fluctuations and the demand for digital gold. Most people are
          looking to invest a specific part of their gold earnings.
        </p>
        <p>
          Digital Gold is precisely like the regular gold that you purchase, but
          without the burden of being responsible for its security and storage,
          eliminating the problem of finding a legitimate seller and finding a
          fair selling price. If you invest in Digital Gold, the seller provides
          you with a gold certificate of 24 Karat that ensures 99.99% gold
          purity.
        </p>
        <p>
          Investors can buy or sell digital gold that will be delivered to their
          homes with the click of a button through the app. Additionally, there
          is no limit to purchasing digital gold. You can begin with as low as
          ₹1. Isn't that awesome?
        </p>
        <p>
          Many unknown facts are floating about digital gold in the share market
          with its rising popularity; if you want to know about surprising facts
          about digital gold, let's see about it in detail below:
        </p>

        <h2>1) You Can't Hold Digital Gold Forever</h2>
        <p>
          An investor can't invest in digital gold for a longer time. There's a
          limited time for the holding of Digital Gold, after which the buyer
          must either take delivery of the gold or sell it. If you're unable to
          accept delivery of the gold, you will have to pay charges to hold the
          gold.
        </p>
        <p>
          For MMTC-PAMP, investors are required to accept delivery or sell the
          gold they purchase after 5 years. Investors will be required to pay
          the additional costs imposed by MMTC PAMP if the delivery isn't taken
        </p>

        <h2>2) Digital Gold isn't a Good Investment Option</h2>
        <p>
          The reverse is true. Investments in gold can provide the investor with
          handsome returns. Gold is a good option that one can use to protect
          against declining prices for stocks.
        </p>
        <p>
          In contrast to recessions and economic downturns, the gold price has
          risen over nearly 92 years. In addition to its cultural significance
          for the Indian culture, India Gold has intrinsic value and has proven
          to be a good investment with higher returns with each passing year.
          Compared to diamonds and platinum, which don't offer the same price as
          gold. Gold is generally highly recommended and the best investment
          option that anyone could go for.
        </p>

        <h2>3) No Regulatory Authority</h2>
        <p>
          When it comes to digital gold investment, there is no regulatory
          authority. It appears as the greatest risk for investors. When you
          purchase digital gold, the manufacturer buys the gold in a similar
          amount under your name. The gold is then stored in vaults owned by an
          outside party or the buyer. The investor appoints the trustee to
          determine if the amount and quality of gold remain at the same level.
          There aren't any authorities to govern the actions.
        </p>
        <p>
          For Gold ETF, SEBI acts as a regulator. In cases of Sovereign Gold
          Bonds, RBI is the regulator. However, there is no regulatory body to
          protect your investment in Digital Gold. While they claim they have a
          similar amount of gold and are safe to store, there isn't regulation
          or auditing about their claim. For gold ETFs, regulator audits are
          performed by SEBI.
        </p>

        <h2> 4) Digital Gold is Purest </h2>
        <p>
          At SayF, Digital gold is secured by 99.99% purity 24. When you
          purchase digital gold from any third-party app, it helps you access
          that gold through well-known companies such as Augmont Gold Ltd,
          Digital Gold India Pvt. Ltd, SafeGold, and MMTC-PAMP Pvt. Ltd. That is
          why investing in digital gold is authentic, safe, and beneficial.
        </p>

        <h2>5) No Additional or Hidden Charges</h2>
        <p>
          There are no hidden or additional charges while buying digital gold.
          You need to pay a 3% goods and services tax (GST), just like buying
          physical gold.
        </p>
        <p>
          Digital gold providers charge a spread ranging between 2-3%, which
          provides expenses such as storage cost, insurance, and trustee fee.
        </p>

        <h2>
          6) You Don't Need a Good Amount of Money Before Investing in Digital
          Gold
        </h2>
        <p>
          Digital gold can be purchased online and stored in vaults with
          insurance for the buyer's benefit. It helps us to overcome all the
          problems with physical gold purchases. All you need is internet or
          mobile banking, and you can invest in gold at any time and anywhere.
        </p>
        <p>
          Digital gold is available at an affordable price and is
          budget-friendly. The rare precious yellow metal is now readily
          available at a minimum rate of ₹1. Sounds cool!
        </p>

        <h2>7) It Doesn't Require Extensive Documentation</h2>
        <p>
          Buying Digital Gold is extremely simple and easy, like any other
          online shopping app. All you require is a smartphone, a good internet
          connection, and a Say F application to complete your purchase.
        </p>
        <p>
          Woahh!!! You can buy Digital gold in real-time with the SayF app to
          avoid the hassle.
        </p>
      </div>
    </div>
  );
};

export default Blog;

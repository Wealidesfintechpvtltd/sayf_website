import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from "../../assets/Blog8.jpg";
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
            <h1>
              Sovereign Gold Bonds : An Alternative to Physical Gold Investment
            </h1>
            <p className="author-brief"></p>
            <p className="blogDetails">
              By the team at SayF <br />
              February 6th, 2022
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="readtime">
            <b>6 mins read</b>
          </div>
          <div className="links">
            <a href="https://twitter.com/intent/tweet?url=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold&text=%22Why%20Are%20Investors%20So%20Obsessed%20With%20Digital%20Gold?%22%20via%20@sayfinvest%20https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold">
              {" "}
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold">
              {" "}
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
        <br />
        <p>
          The Sovereign Gold Bonds (SGBs) are an excellent alternative to
          investing in gold in physical form. You can reap the benefits of
          capital appreciation and earn interest every year by investing in
          these bonds. Gold bonds, issued through India's Government of India,
          also reduce the risk associated with physical gold.
          <br />
          One option to purchase gold in the paper form is to invest through
          Sovereign Gold Bonds (SGBs). They are more secure and safer than
          buying physical gold. In addition, their lock-in time provides an
          excellent choice to consider them for short-term to long-term
          investment choices.
          <b>Explore More About Sovereign Gold Bonds</b>
          <br />
          The RBI can issue Sovereign Gold Bonds (SGBs) on behalf of the
          Government of India. In essence, they are government securities backed
          by grams of gold. They function as an alternative to holding physical
          gold. It is the only kind of gold in which you receive regular
          interest @ 2.5 % per annum, paid semi-annually. The interest paid on
          gold bonds is added annually to the buyer's account. <br />
          The maturity period of gold bonds is 8 years, with the option to exit
          beginning in the 5th year. They can also be traded on exchanges within
          a fortnight after issuance, allowing investors to leave early.
          <br />
          <b>Lock-in Period for SGBs</b>
          <p>
            SGBs gets mature at 8 years from the initial investment. They also
            come with an initial lock-in period of five years. After that, you
            can return the bond. When you redeem the bond on maturity, you'll
            receive the current price of gold.
          </p>
          <br />
          <b>Capital appreciation plus interest income</b>
          <p>
            SGBs provide a fixed yield of 2.5% per year on the investment. It is
            added to your account bi-annually. Furthermore, you can receive
            capital appreciation when redeeming the bond on or before maturing,
            based on how the price of gold has fluctuated during the time. The
            annual interest payment is an advantage that you will not receive
            when you buy jewelry or gold coins and store them in a safe deposit
            box.
          </p>
          <b>Taxation</b>
          <p>
            The capital gain tax arising from redeeming the SGBs on maturity has
            been exempted for individuals. Suppose you decide to redeem it after
            5 years, any profits. In that case, if there are any, the profit is
            subjected to LTCG ( Long term capital gain) of 20%, with indexation
            benefits (calculated after adjustment for inflation). It is,
            therefore, logical to keep your SGBs in reserve until the time of
            maturity if you don't need the cash.
          </p>
          <b>Where to Invest Your Money for Getting High Returns?</b>
          <p>
            <ul>
              <li>
                The RBI issues SGBs in regular tranches for dates, and prices
                are published on the RBI website. If you make an online
                investment and pay with a credit card, the bank will offer an
                advantage on the gold price on a per-gram basis.
              </li>
              <li>
                The cost of each one of them will be contingent on the current
                market price of gold.
              </li>
              <li>There are banks specifically designated to sell SGBs.</li>
            </ul>
          </p>
          <b>The Benefits from Investing in SGBs</b>
          <br />
          &#8205;
          <br />
          Digital gold tax: When a customer purchases Digital Gold, a 3% tax on
          goods and services (GST) is imposed. Additionally, the returns made
          from Digital Gold are subject to tax exactly as physical gold, gold
          mutual funds, gold ETFs, or any other investment in gold.Digital Gold
          gives you access to both affordability and convenience for anyone who
          has access to a smartphone can buy gold online at as little as 1 Rs.
        </p>

        <p>
          <h3>Q: From Where One Can Purchase Digital Gold? </h3>
          A: Sellers of digital gold offer agreements with various broking firms
          and fintech companies. These 3rd party apps act as intermediaries
          between buyers and sellers. However, verifying the gold quality,
          refund policy, and hallmarking is essential before buying digital gold
          from any platform.
          <br />
          &#8205;
          <br />
          <h3>
            Q: What Exactly is Digital Gold & Why Is It Gaining Investor
            Attention?
          </h3>
          The digital version of gold investment is much more convenient and
          flexible, and it allows the investor to purchase gold at the comfort
          of their couch in just a few taps. You don't have to go to any
          physical store to buy gold worth 22k at a fair market rate. The most
          significant benefit is that you can get the delivery of the gold in
          physical form at any time you'd like to. <br />
          To invest in gold digitally, you'll have to go online on a platform
          like SayF and make a secure investment in digital gold.
          <br />
          &#8205;
          <h3>Final Words</h3>
          The idea of investing in digital gold is becoming popular among new
          investors. It's because it's more convenient as compared to physical
          gold. You can have the gold as bars or coins on your doorstep based on
          the platform you select. Additionally, you will be free from all kinds
          of stress, including authenticity, security, storage, good investment
          amount, and more.
        </p>
      </div>
    </div>
  );
};

export default Blog;

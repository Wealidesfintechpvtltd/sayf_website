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
            <h1>Essential Points to Know Before Investing in Digital Gold</h1>
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
          Gold is famous as precious yellow metal in India. The reason for its
          popularity is that it's an investment choice and is safer than any
          other option. Apart from being used for weddings, festivals, and even
          donating to temples, it enables you to get loans. For instance, you
          could use your gold jewelry to pledge as collateral and obtain an
          amount of money based on your specific needs. <br />
          It is famous for its high returns and has been among the top
          investment asset in recent years. Numerous websites and applications
          like SayF offer digital gold online and are only a few taps away from
          investors.
          <br />
          Here we are giving you details about digital gold investment in India
          precisely! <br /> <br />
          Transparency and actual-time update: With easy internet access,
          investors can purchase Digital Gold at the market's current rates. Any
          changes in the gold price in the market are immediately visible
          through these sites, allowing the buyer to make a desirable decision.
          <br />
          &#8205;
          <br />
          Delivery and making charges: The most significant advantage of Digital
          Gold is that it does not have making costs, meaning that the buyer
          only pays the price of gold while purchasing it. Charges will be
          incurred after the investment period or when an investor opts for the
          digital gold delivery in physical form.
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

import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from "../../assets/blog9.jpg";
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
            <h1>Gold ETF: All You Need to Know</h1>
            <p className="author-brief">
              {/* Slack’s co-founder and CTO weighs in on why—even when it’s safe to return to the office—there’s no going back to business as usual */}
            </p>
            <p className="blogDetails">
              By the team at SayF <br />
              February 11th, 2022
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="readtime">
            <b>5 mins read</b>
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
        <p><br/>A Gold ETF, is popularly known as exchange-traded funds, is a commodity ETF made up of only one asset, gold. Exchange-traded funds function as individual stocks and trade on exchanges similar to it.</p>

<p>Gold is considered a great investment choice. There are many reasons investors must invest in Gold ETF and why they're an excellent alternative to traditional investment methods of gold.</p>

<p>&bull; There is no need to worry about impurities or any adulteration.<br />
&bull; Available in digital form only.<br />
&bull; Investor can track their investment values in real-time.<br />
&bull; Extremely Liquid.</p>

<p><h2>How One Can Invest in Gold ETFs?</h2>
For investing in Gold ETFs, you need to follow a simple two-step procedure:</p>

<p><h3>Choosing of Gold ETFs Product</h3>
Investors can buy Gold ETF products from many private financial institutions or banks. Once you choose the product, the ETF fund manager will process your request and perform as a stockbroker at NSE or BSE. The fund manager will buy or sell the gold for investors.</p>

<p><h3>You Must Have a Demat Account</h3></p>

<p>Gold ETF is a security bond that can only buy or sell digitally. You can't have access to Gold ETF bonds in physical form, and one requires a Demat account to trade them. An investor can open the Demat account with the help of an ETF fund manager or stock broker as per their choice.</p>

<h2>Features of Gold ETFs</h2>

<h4>&bull; Trading becomes Easy</h4>

<p> To start trading with Gold ETFs, one needs to buy at least 1 unit. Here 1 unit represents 1 gram of gold. However, one can start investing in SIP to get gold ETF at nominal prices. Investors can buy or sell these units with the help of an ETF manager whenever they want, just like any other mutual fund investment.</p>

<p><h4>&bull; Cost-efficient</h4>
 Investment in any Gold ETF listed on the stock exchange comes with no entry or exit load- (charges applied while redeeming any mutual funds). Investors need to pay small brokerage charges of 0.5-1% to buy or sell any unit.</p>

<p><h4>&bull; Transparency</h4>
Like any other stock or share, the prices of the gold ETFs are available publicly to maintain complete transparency. You can quickly know about the value of your portfolio by checking the prices on a daily or hourly basis, according to your convenience.</p>

<p><h4>&bull; Low-Risk Investment</h4>

Gold ETFs investments are considered safe or have low risk because the prices of gold don't show many fluctuations as in the case of a share or stock investment. It simply implies that there might be a chance that the return on your share goes down; however, gold ETFs investment is safe here as it protects you from any kind of significant losses.</p>

<p><h4>&bull; Additional Tax Benefits</h4>
Investment in gold ETFs comes with additional tax benefits to the investor. It comes with the perk of long-term capital gain after one year and is free of any kind of VAT and Securities Transaction Tax.</p>

<p><h2>Use of Gold ETFs</h2>
Gold ETFs come with low-risk perks, and many investors see them as a defensive asset. They use these investments to hedge against any kind of market fluctuations( political, economic, or currency debasement ).</p>

<p>The price of gold is inversely proportional to the dollar's strength, so it can be seen as the asset that can cover you while the dollar goes down.</p>

<p>Gold ETF is an actual commodity exchange-traded fund. Investors use it to hedge against gold commodities' risk or gain exposure to fluctuation in gold's price if an investor faces an increased risk to his portfolio assets if prices of gold increase; having an ETF will help reduce the risk associated with that investment.</p>

<p>After going through research, if investors want to go for short-term gold trading, one can simply go for a gold ETF as it has a simple procedure, and they can easily benefit from it.<br />
 <br />
<h2>Conclusion</h2>
When you buy gold ETFs, you purchase gold in electronic form. You can buy and sell gold ETFs the same way you trade stocks. You won't receive the actual gold but the money equivalent when you redeem the Gold ETF. ETFs in gold are traded through a dematerialized bank account (Demat) and fund manager, making it a convenient investment method.<br />
There is complete transparency regarding the assets of an ETF because its prices are revealed publicly. <br />
</p>
      </div>
    </div>
  );
};

export default Blog;

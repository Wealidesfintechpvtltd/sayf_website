import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from "../../assets/goldInvestor.PNG";
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
            <h1>Why Are Investors So Obsessed With Digital Gold?</h1>
            <p className="author-brief">
              {/* Slack’s co-founder and CTO weighs in on why—even when it’s safe to return to the office—there’s no going back to business as usual */}
            </p>
            <p className="blogDetails">
              By the team at SayF <br />
              February 1st, 2022
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="readtime">
            <b>3 mins read</b>
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
        <p>Gold: Safe Investment Option that Captivates Investor<br />
&quot;Gold luster never gets out of time,&quot; making it timeless metals among all. The aesthetic and timeless value of the yellow metal is only the beginning of the story of gold investment. Gold as an investment will remain the 1st choice for the investor because it provides security, safety, price performance, and high liquidity.</p>

<p> Gold has stood firm with the same strength during moments of doubt, such as the 2008 financial crisis or pandemic in 2020. According to the financial advisor, gold can withstand and outshine in the most challenging times.</p>

<p>The Indian economy was reeling under tension because of a nationwide lockdown beginning in March 2020 and lasting until May 2020. The price of gold increased by 15% in value from Rs.40,825 to Rs.47,097 within just two months. This increase continued until the second wave and reached all-time high prices of more than Rs.57,000 by the end of August.</p>

<p>The prices of digital gold remain the same across the globe, and it outperforms well in a situation like market fluctuations or financial crisis.</p>

<p>Reasons Why Gold is a Forever Investment Option?<br />
Higher Returns that Outshine Always<br />
As a reliable performer, Gold has strengthened its role as a &quot;valuable asset' during both the good times and the tough times. Over debt yields and closing to the performance of equity markets, Gold has the potential to earn decent returns, even at riskier levels.</p>

<p>Gold Investment is for Forever<br />
Gold has proved its worth during moments of the financial crisis but is also prone to performing compared to other asset classes that are riskier. This negative correlation can create a unique hedge for your gold investment portfolio overall.<br />
Value Store, Against Inflation<br />
With consistent returns that close at double-digits, Gold not only protects your investment's value but can also safeguard your portfolio from the effects of inflation.</p>

<p>Conclusion: Cherry on Top <br />
Gold has risen to an important position with distinctive investment mode options across all investment modes that goes far beyond decorative value. The unique commodity that blends aesthetic appeal and investment quality can enhance the returns of your portfolio that are risk-adjusted.<br />
What's more? You can go through all the advantages with your &quot;Digital Gold&quot; investments anytime and anywhere.</p>

<p></p>
      </div>
    </div>
  );
};

export default Blog;

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
            <h1>Digital Gold Wallets: Your Investment Buddy</h1>
            <p className="author-brief"></p>
            <p className="blogDetails">
              By the team at SayF <br />
              February 7th, 2022
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
          The popularity of physical gold in India is insane, making the country
          the second largest buyer. However, investors have been moving towards
          digital gold recently—the boom in digitalization due to COVID,
          resulted in an expansion of investment in digital gold and the
          popularity of digital gold wallets. Still, the concept of digital gold
          is new in India, and it is getting popular as it eliminates a few
          drawbacks that consumers face while buying physical gold. <br />
          We observed many changes in the methods of investment after
          introducing the concept of Digital India in 2015. These changes are
          progressive and beneficial for users as they can now access everything
          in just a few taps on their smartphones. Earlier, the payment was
          often through cash; however, now mobile apps are making everything
          more accessible. The introduction of digital wallets made everyday
          transactions easier for all.
        </p>
        <br />
        <b>What is a Digital Gold Wallet?</b>
        <br />
        Digital Gold wallets are digital versions of your traditional wallet.
        Many e-wallets provide a secure and safest way to buy gold online like
        SayF. With the help of a digital gold wallet, investors can easily buy
        digital gold or get the amount received after selling digital gold.
        There are three organizations in India that offer online gold
        investment:
        <br />
        1. Augmont Gold Ltd. <br />
        2. MMTC-PAMP India Pvt. Ltd
        <br />
        3. SafeGold.
        <br />
        <p />
        <br />
        <b>Why are Digital Gold Wallets Gaining Popularity Among Youth?</b>
        <p>
          Digital gold wallets are gaining popularity among youth as well as
          investors across all age groups because of the following reasons:
          <br />
          1. They are the safest and most secure option as there is no fear of
          theft and security.
          <br />
          2. You can easily protect your digital gold wallets with a strong
          passcode/Pin. <br />
          3. Biometric authentication in such apps makes them more secure for
          any transactions. <br />
          4. You don't need to carry cash or a debit/credit card with you every
          time for a transaction. 5. It is easily accessible anywhere and
          anytime 6. Quick payment methods
        </p>
        <br />
        <b>Pros & Cons of Buying Digital Gold</b>
        <p>
          Advantages: <br />
          <ul>
            <li>There are no additional/hidden charges.</li>
            <li>High liquidity.</li>
            <li>Real-time investment whenever you want.</li>
            <li>Secure option to buy gold.</li>
            <li>No risk of theft or locker charges.</li>
          </ul>
        </p>
        <p>
          Increased digital awareness has led to increased accessibility of
          information for the population. It leads investors to understand and
          learn various types of investment methods. Some of the major concerns
          buyers face while buying physical gold are eliminated with Digital
          gold. These include issues like purity and additional making charges
          for physical gold.
        </p>
        <p>
          Additionally, the buyer is free from any security and locker fee
          expenses after buying digital gold, enabling you to do trading with
          it. Investors can now understand the difference between purchasing
          physical jewelry or investing in gold digitally.
        </p>
        <p>
          Disadvantages: <br />
          Every coin has 2 sides, so does the investment in digital gold; You
          can learn more about them below: <br />
          <ul>
            <li>
              Its investment limit is ₹2 lakhs on most of the reliable
              platforms.
            </li>
            <li>
              They don't have any official regulatory body like RBI or SEBI.
            </li>
            <li>
              Conversion of gold in the physical form required delivery and
              making charges.
            </li>
            <li>Maximum storage of 5 year.</li>
            <li>The danger of cyber theft can't be avoided.</li>
          </ul>
        </p>
        <b>Conclusion</b>
        <p>
          Every country across the globe has faced an unimaginable situation due
          to pandemics, which may lead to the devaluation of currencies in the
          near future. People are coming up with risk management strategies
          (hedging) to get less affected by such depreciation, and digital gold
          is particularly beneficial in countering these market fluctuations.
        </p>
        <p>
          Although we all know about different forms of physical gold like bars,
          jewelry, and coins, digital gold requires some more clarification.
          Experts believe that even though physical gold would have seen
          popularity during festivals, the concept of the investment in digital
          gold has seen growing popularity throughout the year.{" "}
        </p>
        <p>
          The current pandemic has created the concept of digital gold more
          well-known throughout the country and led to an increase in digital
          gold demand by nearly 70 %.
        </p>
      </div>
    </div>
  );
};

export default Blog;

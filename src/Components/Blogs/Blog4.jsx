import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from '../../assets/goldInvestor.PNG'
import search from '../../assets/search.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import linkedIn from '../../assets/linked.png'

const Blog = () => {
  return (
    <div className="blogContainer">
      <div className="blogNavbar">
      <Navbar className="blogNav"/>
      </div>
      <div className="search">
        <input type="text" placeholder="Seach for blogs..."/>
        <img src={search} alt="" />
      </div>
      <div className="blog">
      <div className="author">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h4 className="category">
            Finance
          </h4>
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
            <a href="https://twitter.com/intent/tweet?url=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold&text=%22Why%20Are%20Investors%20So%20Obsessed%20With%20Digital%20Gold?%22%20via%20@sayfinvest%20https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold">   <img src={twitter} alt="" /></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold"><img src={facebook} alt="" /></a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://sayf.in/#/blogs/why-are-investors-so-obsessed-With-digital-gold"> <img src={linkedIn} alt="" /></a>
            
          </div>
        </div>
        <br />
        <p>
          This article will try to uncover why millennials and youth investors are so fond 
          of Digital Gold in India and what makes it a better alternative than Physical gold.
        </p>
        <p>
          Gold has been used as a trading asset for a long time and has the oldest history in investment. 
          However, don't you feel amazed at how people are obsessed with this yellow metal, especially in India?
        </p>
        <p>
          People have been buying gold in physical forms such as jewelry for consumption, gold bars, 
          and gold coins for investments in India for years, and why not? After all, it is the safest 
          and trusted investment option over all kinds of inflation in the market.
        </p>
        <p>
          In recent times, the rise in gold prices makes it a profitable option to invest in with high returns.
        </p>


        <h2>Issues Investors are Facing with Digital Gold</h2>
        <p>
          Investors are going through many problems while investing and handling the gold in its physical form. 
          Handling and transporting gold in its physical form seems to be a challenging job and comes with the risk of theft.
        </p>
        <p>
          The pandemic has highlighted more demerits when you invest in physical gold than digital gold, and the distribution channel's failure can be observed.
          The speculation grew due to political uncertainty and vaccine change, resulting in extreme volatility.
        </p>
        <p>
          If the physical transportation of tons of metal is needed, it can be difficult to respond quickly to substantial price changes. 
          With the many external forces that influence the market for commodities, investors are looking for an easier, less expensive method 
          to invest in gold because they are still fond of it.
        </p>
        <p>
          Thus, the post-pandemic crisis has increased the number of Digital Gold investments. 
          Most investors are taking the safer alternative of physical gold and making investments in Digital Gold.
        </p>

        <h2>Explore More About Digital Gold with Us</h2>
        <p>
          Digital Gold is a budget-friendly and easily accessible way for buying yellow metal without any responsibility 
          to keep it safe in physical form. SayF app is a convenient, trusted, and reliable source for starting with digital 
          gold investment. We enable our users to begin their gold investment with a minimum price of ₹1.
        </p>
        <p>
        Digital gold is a better investment option seeing its high returns and lesser risk. The investment in digital gold 
        remains free from any kind of manipulation and variations. In contrast to physical gold, the prices of digital gold remain the same throughout the globe.
        </p>
        <p>
          It is a safe and hassle-free option to invest in digital gold, and according to digital gold merchants, an increase of 40-50% in demand for 
          digital gold is easily observed during the lockdown.
        </p>
        <p>
          <b>
            But why do investors get so obsessed with digital gold? Well, it's a flexible and easy investment process that captivates investors towards it.
          </b>
        </p>
        <p>
          <b>Pure Gold and No Hidden Charges:</b> Digital Gold is a pure gold product with no additional costs. Here you only trade in pure gold, i.e., 24 karat Gold. 
          The amount you pay is put into gold only, and investors need to pay a tax of 3% while making the purchase.
        </p>
        <p>
          <b>Security and Storage:</b> There's no issue with the storage or deposit of digital gold. Every gram of gold you buy is secured 
          in the vault with your name. It means you're in no danger or risk at any moment.
        </p>
        <p>
          <b>Size of investment:</b> The idea of investing in digital gold is accessible and can be bought and sold with a minimum of ₹1.
        </p>
        <p>
          <b>Trading:</b> Digital Gold can be purchased and sold online anytime and anywhere.
        </p>
        <p>
          <b>High Liquidity:</b>  Digital Gold can be bought and sold from anywhere at any time. There is no need to go to any dealer or keep an account 
          with gold purchase security for a long time to receive the entire resale value of the gold.
        </p>
        <p>
          <b>Security:</b> Digital gold is 24 Karat and kept in a safe owned through one of three Gold banks in India, Augmont | MMTC PAMP, SafeGold. 
          That means you're completely safe at any moment.
        </p>
        <h3>Conclusion</h3>
        <p>
          Gold continues to be an obsession among young people because it is one of the most secure investments. 
          As time passes, the investment in gold has evolved into new forms; however, it's the same valuable asset in a different form.
        </p>
        <p>
        The advancement in technology comes with new investment options, such as Digital Gold, making it an easy investment choice for young people. 
        With various flexibility, high ROI, and safety, digital gold offers an exciting future for investors.
        </p>

      </div>
    </div>
  );
};

export default Blog;

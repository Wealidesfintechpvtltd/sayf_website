import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from '../../assets/blog1img.png'
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
          <h1>Digital Gold: A Simple and Complete Guide</h1>
          <p className="author-brief">
          {/* Slack’s co-founder and CTO weighs in on why—even when it’s safe to return to the office—there’s no going back to business as usual */}
          </p>
          <p className="blogDetails">
            By the team at SayF <br />
            21st January 2021
          </p>
        </div>
      </div>
        <div className="stats">
          <div className="readtime">
            <b>5 mins read</b>
          </div>
          <div className="links">
            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.sayf.club%2F%23%2Fblogs%2Fdigital-gold-guide&text=%22Digital%20Gold%20Guide%22%20via%20%40sayfinvest">   <img src={twitter} alt="" /></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.sayf.club%2F%23%2Fblogs%2Fdigital-gold-guide"> <img src={facebook} alt="" /></a>
            <a href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.sayf.club%2F%23%2Fblogs%2Fdigital-gold-guide&title=%22Digital%20Gold%20Guide%22%20via%20%40sayfinvest"> <img src={linkedIn} alt="" /></a>
            
          </div>
        </div>
        <br />
        <p>
          Digital gold is an online and digital method to invest in gold without
          owning it in physical form. Anyone can buy and sell it online, and the
          minimum value to buy and sell it is ₹1 .
        </p>
        <h2>Detailed Information About Digital Gold</h2>
        <p>
          Digital gold, as the name suggests, is a virtual method of buying
          gold digitally. It is one of the cost-efficient methods for one who
          wants to buy gold. For every gram of gold a user buys, a 24k of gold
          gets stored in the locker under the name of any of these three gold
          banks in India- <b> Augmont | MMTC - PAMP | SafeGold</b>. Investors can buy,
          sell and even order physical gold of the same amount at their doorstep
          in just one click. Additionally, it doesn't have a minimum limit. The
          investor can start buying digital gold from <b>₹ 1</b> amount too. In this
          article, we will give detailed information about this modern
          investment.
        </p>
        <h3>Why is Digital Gold Getting Popular?</h3>
        <p>
          Owning a physical gold comes up with particular challenges that
          include identifying the purity and legitimacy of gold. In addition,
          the safekeeping and storage of physical gold is another major concern.
          However, you are assured about purity in digital gold, and the gold is
          safe in vaults.
        </p>
        <h2>Advantages of Buying Digital Gold Over Physical Gold</h2>
        <p>
          Physical gold ownership comes with many challenges and doubts.
          However, one can buy the same amount of gold online with certified 24k
          gold. In addition, the owner doesn't need to worry about the gold
          safety as sellers insure it. To invest in digital gold, one doesn't
          need to have a certain amount in their bank account. One can go as
          minimum as ₹1 while investing in digital gold. You can also sell the
          gold online in the future or get it delivered in physical form at your
          doorstep. ‍ All this can be done with a few taps on a smartphone!! 
          <b>
          &nbsp; Sounds Perfect and Genuine? However, there is a drawback that you
          won't be able to hold it or show it off.
          </b> Digital gold is gaining
          popularity between youth and millennials because of the flexibility
          and easy access to doorstep delivery whenever required. ‍ Buying
          digital gold from any app means buying it from a 3rd party app,
          helping the investor invest in digital gold from reputed companies
          MMTC-PAMP India Pvt. Ltd., Augmont Gold Ltd and Digital Gold India
          Pvt. Ltd. - SafeGold. They charge a small percentage as investment
          charges because they are answerable for the security of digital gold.
        </p>
        <h3>
          Can one get ownership of the digital gold they buy if they lose login
          information or smartphone?
        </h3>
        <p>
          Yes! You can easily get the ownership of digital gold you own even if
          you lose your smartphone or forget the login information. Investment
          in digital gold is just like any other investment that gets registered
          under your name. The gold is stored in a vault and verified by an
          independent trustee.
        </p>
        <h3>Where Can You Buy Digital Gold?</h3>
        <p>
          <b> One can easily buy digital gold from a minimum of ₹1 from the SayF
          app. </b>
          SayF app is your personal finance app backed by the trusted UPI
          and NPCI service providers in the market; SayF helps you save, invest,
          and optimize your spending. ‍ You can buy digital gold without
          completing KYC, but it has certain limitations. The limitation varies
          depending upon the investment app terms & conditions.
        </p>
        <h2>Pros & Cons of Investing in Digital Gold</h2>
        <p>
          <b>Pros</b>
        </p>
        <p>
          1. High Liquidity: You can buy and sell the gold at any time of day at
          current market rates. <br />
           2. It is easy to track. <br />
           3. Lockdown forced us to shut down every activity. Jewelry shops were being closed, leading to
          the increase in the business of digital gold manifold. The rise in investment shows that people like this feature and accept it. <br /> 
          4. You can use digital gold as collateral against any loans.
        </p>
        <p>
          <b>Cons</b>
        </p>
        <p>
          1. No passive income generation in the form of interest. 
          2. Digital gold doesn't come under SEBI and SBI guidelines. 
          3. Maximum investment every month is limited to the amount of 2 lakh. 
          4. Once you demand delivery of digital gold at your doorstep, a small management fee is
          charged by the intermediaries application for holding the gold for
          you. However, cons outweigh benefits while investing in digital gold
          would be better as it offers the benefits of security, high liquidity,
          and safe delivery.
        </p>
        <h2>How to Invest in Digital Gold?</h2>
        <p>
          Like any other online shopping platform, one can easily invest in
          digital gold online. Here we are mentioning an easy step by step
          procedure to help you out: <br />
          1. Visit any trusted platform that allows you to buy digital gold, such as SayF, Paytm, Amazon, and more. 2.
          Click on the Gold locker option. <br />
          3. Enter the amount you like to invest in purchasing digital gold 
          4. Move towards the payment section
          <br /> 5. An investor can use different payment gateways such as debit card,
          credit card, net banking or simply make the payment using an e-wallet.
          <br /> 6. Once the amount gets credited, it will get updated quickly, and the
          gold gets stored in a 100% safe vault. 7. Investors can easily buy or
          sell digital gold at a market rate, providing high liquidity. Many 3rd
          party applications or intermediaries have a certain amount of
          management fee during gold delivery.
        </p>
        <h3>Taxation on Digital Golds</h3>
        <p>
          It depends on capital gain from the sale of physical, whether
          short-term (upto 36 Months) or long-term capital gains( & 36 Months).
          Capital gain on digital gold for short-term investment isn't strictly
          taxable. For long-term investment, a 20% tax charge on the whole
          amount in addition to the surcharge.
        </p>
        <h3>Frequently Asked Questions</h3>
        <h3>Q: Difference Between Physical Gold and Digital Gold?</h3>
        <p>
          A: Digital gold is simply buying yellow metal having a purity of 24 k,
          and investors can access it anytime via digital platforms. One can
          easily buy, sell and store digital gold via digital channels. In
          contrast, physical gold is bought for ornamental purposes mainly.
          Still, it isn't a wise investment osption as they come with many
          additional non-refundable fees such as making charges, locker charges
          and risk of robbery. Physical gold is a liability rather than an
          asset.
        </p>
        <h3>Q: Why should one invest in digital gold?</h3>
        <p>
          A: Digital gold offers the customer a smart way of investing in gold.
          It gives dual benefits to users that it comes with high liquidity and
          an option of physical delivery.
        </p>
      </div>
    </div>
  );
};

export default Blog;

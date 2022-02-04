import React from "react";
import "./blog.css";
import Navbar from "../Navbar";
import img from "../../assets/Calculator.jpg";
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
            <h1>Know the Investment Overview in India: Personal Finance and Savings </h1>
            <p className="author-brief">
              {/* Slack’s co-founder and CTO weighs in on why—even when it’s safe to return to the office—there’s no going back to business as usual */}
            </p>
            <p className="blogDetails">
              By the team at SayF <br />
              February 5th, 2022
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
        <p>Know the Investment Overview in India: Personal Finance and Savings <br />
Why do we need to save money? What is the main motive behind financial management? Definitely, we all do this to make the best use of our hard earned money, right.<br />
Financial management helps us accomplish our life financial goals such as saving money for the Future; investment is collateral, education, traveling, retirement plans, and more.<br />
The process of financial planning is changing at a constant pace. One needs to monitor and evaluate each stage to know about the perks and risks one needs to go through due to the low amount of liquid money in hand. A correct strategy for investment and expenses involves careful planning.<br />
&#8205;Making an appropriate plan for spending and investing money necessitates careful planning. Certain basic things need to be kept in mind, like research, analysis, and budgeting. It is necessary to have financial planning for a secure and successful future. One must take care of their expenses, investment, and money to reach a particular stable condition.</p>

<p>Reason Behind Personal Finance Management &amp; Why Do We Need it?</p>

<p>&#8205; Why should one not plan about their personal finances? If you are the one who thinks it's all for the rich and wealthy person, then you might be wrong under this condition. You don't need to be rich to come up with a proper financial plan. However, a correct financial planning strategy can help you grow rich with every passing day.<br />
Whether you are a salaried person or student, it doesn't matter your monthly salary or stipend; we all need to have financial planning for a secure future. Still not convinced? Below are a few points where personal finance management can work like wonders<br />
Cash flow<br />
Secure Future of family<br />
Proper management of your income<br />
Property investments<br />
Financial support<br />
Emergency fund<br />
Knowledge about finance</p>

<p>Appropriate Strategy Planning for Financial Management&#8205;<br />
Coming up with appropriate strategy planning is the crucial and foremost step of financial management; one should look at the following criteria while planning for the same:<br />
1) Know Your Financial Goals<br />
It is necessary to make your goal genuine and achievable both in the long term or short-term investment. It helps in ensuring the financial security of the person in the Future.<br />
It gives you a basic idea of cutting down your expenses to achieve your target and make a secure future for yourself and your family. You might end up doing unnecessary expenses without any goal and end up running out of money; however, it gives you a sense of responsibility and keeps you in a secure financial situation.</p>

<p>2)Strengthen Your Financial Condition<br />
Financial management helps you strengthen your financial condition with short, long, and mid-term investment goals. You can find plenty of online apps that can analyze your financial strength and help you figure out your current situation.</p>

<p>3)Taxation &amp; Financial Planning <br />
Tax planning is essential to set your financial goals. You can't plan any investment by overseeing tax liabilities. It requires a lot of research and effort to develop financial planning efficiently to manage your taxes efficiently. One can save and cut down a lot of money through tax savings if one invests optimally. <br />
4)Secure Retirement Plans<br />
It may sound early, but retirement plans are essential. You can't be as productive as today in every phase of life. It would be best if you start planning early about finance during retirement. The investment of funds at an early age can give you a sense of security and a secure future for your family.<br />
You must initially go for pension planning and learn about different investment plans according to your preferences. However, if you haven't started with it yet, you can still go for it instead of dropping the idea.</p>

<p>5)Meet Your Future Financial Goals<br />
The investment planning strategy is a process of meeting your expectations and goals when it comes to financial security. Strategic investment helps in ensuring a secure future and maintaining high living standards. One can easily handle their expenses, debt, and tax liabilities with proper financial management.</p>

<p>Savings and Future Planning<br />
&#8205; Planning executes the second part, which is saving. It is great if you incorporate saving as a habit. Below are some crucial tips one should know :<br />
1) Cut Down Your Expenses<br />
You must spend less money than the amount you are making. It would help if you learned how to control your expenditure and reduce it to save money for the Future.<br />
2) Budget: Track Your Expenses<br />
You don't need to be proficient with financial management to make a budget. There are comprehensive options of the app available online that do the same for you in no time. They also enable you to categorize your expenses in a different section so users can figure out the expenses they can control. Otherwise, it will be tedious to figure out where you are spending extra money.</p>

<p>3) Ignore Taking Debts<br />
We live in a digitally-driven society, and sometimes to maintain a particular lifestyle, we willingly support debt. So it is always advisable not to fall into debt under any circumstances.</p>

<p>4) Know the Sigma 50/30/20 Rule <br />
It helps you divide your expenses 50% on food, housing, and health., 30% on lifestyle and hobbies, and 20% of your money need to save as an emergency fund to save you in a challenging situation.</p>

      </div>
    </div>
  );
};

export default Blog;

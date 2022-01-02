import React from "react";
import { useState, useEffect } from "react";
import "./dashboard.css";
import DashNav from "./DashNav";


import Carousel from "react-elastic-carousel";
import CarouselItem from "./CarouselItem";
import ProgressBar from "./ProgressBar";

// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import img from "./dashboard_assets/7.png";
import Chrome from "./dashboard_assets/chrome.png";

import { userData, partnerStores, userGoldData, userTransactions } from "../../api";

const Dashboard = () => {
  // const user = useParams();

  var [data, setData] = useState({ userInfo: {}, partnerStores: [], goldOwnership: {}});

  const [loaded, setLoaded ] = useState(false);

  async function getUserInfo() {
    var stores = [];
    var info = {};
    var gold = {};
    var tranx = {};
    var res = await userData();
    var sRes = await partnerStores();
    var gRes = await userGoldData();
    var tRes = await userTransactions();

    if (sRes.status === 200) {
      stores = sRes.data;
    }
    if (res.status === 200) {
      info = res.data;
    }
    if (gRes.status) {
      gold = gRes.data;
    }
    if (tRes.status) {
      tranx = tRes.data;
    }

    setData({ userInfo: info, partnerStores: stores, goldOwnership: gold, transactions: tranx });
    setLoaded(true);
    console.log(info);
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  
  // const cleanPercentage = (percentage) => {
  //   const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  //   const isTooHigh = percentage > 100;
  //   return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  // };
  
  // const Circle = ({ colour, percentage, radius }) => {
  //   const r = radius;
  //   const circ = 2 * Math.PI * r;
  //   const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  //   return (
  //     <circle
  //       r={r}
  //       cx={100}
  //       cy={100}
  //       fill="transparent"
  //       stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
  //       strokeWidth={"2rem"}
  //       strokeDasharray={circ}
  //       strokeDashoffset={percentage ? strokePct : 0}
  //     ></circle>
  //   );
  // };
  
  // const Text = ({ percentage }) => {
  //   return (
  //     <text
  //       x="50%"
  //       y="50%"
  //       dominantBaseline="central"
  //       textAnchor="middle"
  //       fontSize={"1.5em"}
  //     >
  //       {percentage.toFixed(0)}%
  //     </text>
  //   );
  // };
  
  // const Pie = ({ percentage, colour, rad }) => {
  //   const pct = cleanPercentage(percentage);
  //   return (
  //     <svg width={200} height={200}>
  //       <g transform={`rotate(-90 ${"100 100"})`}>
  //         <Circle colour="lightgrey" radius={rad}/>
  //         <Circle colour={colour} percentage={pct} radius={rad}/>
  //       </g>
  //       <Text percentage={pct} />
  //     </svg>
  //   );
  // };

  return (
    loaded? 
    <>
    <DashNav phone= {data.userInfo["phone"]} username = {data.userInfo["first_name"]}/>
    <div className="dashboard">
      <div className="hero-section">
        <h1>Welcome to SayF, {data.userInfo["first_name"]}</h1>
      </div>
      <div className="cards">
        <div className="card button-box">
          <div className="im">
            <img src={img} className="img" alt="image" />
          </div>
          <h4>SIP with SayF</h4>
          {/* <button>Save Daily</button> */}
        </div>
        <div className="card button-box">
          <div className="im">
            <img src={img} className="img" alt="image" />
          </div>
          <h4>Link Your UPI</h4>
          {/* <button>Activate</button> */}
        </div>
        <div className="card button-box">
          <div className="im">
            <img src={img} className="img" alt="image" />
          </div>
          <h4>Know Your Customer<br/>(KYC)</h4>
          {/* <button>Start</button> */}
        </div>
        <div className="card button-box">
          <div className="im">
            <img src={img} className="img" alt="image" />
          </div>
          <h4>My Rewards</h4>
          {/* <button>View Rewards</button> */}
        </div>
      </div>
      <div className="section-three">
        <div className="left">
          <div className="card">
            <Carousel itemsToShow={3}>
              {data.partnerStores.length <= 0 ? (
                <p>Getting In More Stores...</p>
              ) : (
                data.partnerStores
                  .slice(0, Math.min(data.partnerStores.length, 15))
                  .map((ele, index) => (
                    <CarouselItem item={ele} key={index} />
                  ))
              )}
            </Carousel>
          </div>
          <div className="card">
            <div className="perks-section">
              <p>
                The 2021 Sayf Path to $1,000,000 has ended. Explore your
                milestones, and we will announce the winner in the New Year!
              </p>
              <div className="progressBar">
                <ProgressBar done="20" />
                <label htmlFor="progress">
                  <h4>20/150 Entries earned</h4> <br />
                </label>
                <div className="progress-content">
                  <p>Milestones</p>
                  <p>🏷️ 1/26</p>
                </div>
                <div className="progress-content">
                  <p>Milestones</p>
                  <p>🏷️ 1/26</p>
                </div>
                <div className="progress-content">
                  <p>Milestones</p>
                  <p>🏷️ 1/26</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card deposit">
            <h3>You have ₹0 in scheduled deposits every month</h3>
            <p>
              Nearly 40% of Indians don't have emergency savings ! <br />{" "}
              Start saving and investing for a great day.
            </p>
            <button>Get Started</button>
            <p>* dummy text couldnt read</p>
          </div>
        </div>
        <div className="right">
          <div className="card gold-card">
            <p className="small-text" style={{fontSize: "15px", fontWeight: "400"}}>Total Balance</p>
            <p className="large-text">{"total" in data.goldOwnership ? data.goldOwnership["total"] : "N/A"} gms</p>

          </div>
          <div className="card">
            <p>
              Earn rewards from 300+ stores with SayF Chrome Extension!{" "}
              <br />
              <img className="chrome" src={Chrome} alt="c" />{" "}
              <span>Coming Soon... </span>
            </p>
          </div>
          <div className="card">
            <p>
              You invested <span>₹0.00</span> in the last 30 days.
            </p>
          </div>
          <div className="card">
            <div className="grow-list">
              <div className="list-item">
                <p>How much should you invest?</p>
              </div>
              <div className="list-item">
                <p>How much should you invest?</p>
              </div>
              <div className="list-item">
                <p>How much should you invest?</p>
              </div>
              <div className="list-item">
                <p>How much should you invest?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    :
    <>
      <DashNav></DashNav>
      <div className="dashboard-loading">
        <h1>Loading ....</h1>
      </div>
    </> 
    
  );
};

export default Dashboard;

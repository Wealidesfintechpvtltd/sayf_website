import React from "react";
import "./blogs.css";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
import img from '../../assets/blog1img.png'
import img2 from '../../assets/Blogimg2.png'
import img3 from '../../assets/sevenFacts.PNG'
const Blogs = () => {

    const history = useHistory();

  return (
    <div className="blogsContainer">
      <Navbar />
      <div className="blogs">
        <h1>Blogs</h1>
        <div className="blogsTiles">
          <div className="row">
            <a href="#/blogs/digital-gold-guide">
            <div onClick={()=>{
                // history.push()
            }} className="tiles">
    
              <div className="heading">
                <div className="image">
                <img src={img} alt="" />
                </div>
                <h2>Digital Gold: A Simple and Complete Guide</h2>
              </div>
              <div className="summary">
                <p>
                Digital gold is an online and digital method to invest in gold without
          owning it in physical form.......
                </p>
              </div>
            </div>
            </a>
          </div>
          <div className="row">
            <a href="#/blogs/digital-gold">
            <div onClick={()=>{
                // history.push()
            }} className="tiles">
    
              <div className="heading">
                <div className="image">
                <img src={img2} alt="" />
                </div>
                <h2>Digital Gold a New Way of Buying Gold</h2>
              </div>
              <div className="summary">
                <p>
                The history of gold in India is quite old, and we see it as more than an investment.......
                </p>
              </div>
            </div>
            </a>
          </div>
          <div className="row">
            <a href="#/blogs/7-surprising-facts">
            <div onClick={()=>{
                // history.push()
            }} className="tiles">
    
              <div className="heading">
                <div className="image">
                <img src={img3} alt="" />
                </div>
                <h2>7 Surprising Facts You Need to Know About Digital Gold</h2>
              </div>
              <div className="summary">
                <p>
                With the rise of digital platforms, many people are making investments in Digital Gold without any hassle. However.......
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

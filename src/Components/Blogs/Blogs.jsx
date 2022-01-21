import React from "react";
import "./blogs.css";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";


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
        </div>
      </div>
    </div>
  );
};

export default Blogs;

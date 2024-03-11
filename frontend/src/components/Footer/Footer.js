import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="copy-right-para">
          <span>
            2023© Copyright Reddy Harika. All Rights Reserved.
          </span>
          <a
            href="https://github.com/harika136"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pngimg.com/uploads/github/github_PNG53.png"
              alt="github-img"
              className="github-img"
            />
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;



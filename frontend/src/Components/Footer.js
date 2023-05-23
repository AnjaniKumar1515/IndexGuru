import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import docsPDF from "./assets/Investment Guide.pdf"
function Footer() {


    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = docsPDF; 
      link.download = 'Investment Guide.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <footer className="footer">
      <div className="socials_copyright">
        <div className="footer__social">
          <h3 className="contact">Contact me at:</h3>
          <a
            href="https://github.com/AnjaniKumar1515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anjani-kumar-rai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/wisteria.fall_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 IndexGuru</p>
        </div>
      </div>
      
      
      <div className="links_container">
      <div className="Important_Links">
        <h3 style={{color: "#10b983"}}>Types of Funds</h3>
        <button className="fbuttons">Equity Mutual Funds</button>
        <button className="fbuttons">Debt Funds</button>
        <button className="fbuttons">ELSS Funds</button>
        <button className="fbuttons">Index Funds</button>
        <button id="guide" className="fbuttons" onClick={handleDownload} style={{textAlign:"center"}}>Investment Guide <FaDownload/></button>
        
      </div>



      <div className="allaboutFunds">
        <h3 style={{color: "#10b983"}}>All about Mutual Funds</h3>
        <Link to={"/MutualFunds"}>
          {" "}
          <button className="fbuttons">Mutual Funds</button>{" "}
        </Link>
        <Link to={"/TypesOfFunds"}>
        <button className="fbuttons">Type of mutual funds</button>
        </Link>
        <Link to={"/HowToInvest"}> 
        <button className="fbuttons">How to invest in mutual funds</button>
        </Link>
        <Link to={"/MutualFundsReturns"}>
        <button className="fbuttons">Mutual Fund Returns</button>
        </Link>
        <Link to={"/InvestmentPlan"}>
        <button className="fbuttons">Systematic Investment Plan</button>
        </Link>
      </div>
    

      
      
      <div className="Important_Links">
        <h3 style={{color: "#10b983"}}>Important Links</h3>
        <button className="fbuttons">Your Questions</button>
        <button className="fbuttons">Videos</button>
        <button className="fbuttons">SIP Calculator</button>
        <button className="fbuttons">LumpSum Calculator</button>
        <button className="fbuttons">Glossary</button>
      </div>
      </div>
    </footer>
  );
}

export default Footer;

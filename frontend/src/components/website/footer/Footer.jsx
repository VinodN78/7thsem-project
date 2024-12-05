import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../assets/logo.png";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg__accent text__color">
      <div className="top">
        <div className="box1">
          <div className="logo text__primary">
          <img src={logo} alt="RUAS Library Logo" className="logo__icon" height="30" width="25" />
            <h4>Ruas Library</h4>
          </div>
          <p style={{ marginTop: "8px", lineHeight: "1.5rem" }}>
            <h4>Project by:</h4>
            Arjun M P <br/>
            Adarsh <br/>
            Ibrahim<br/>
            Vinod <br/>
             

          </p>
        </div>
        <div className="box2">
          <h4>USEFULL LINKS</h4>
          <Link to="/" className="text__color">
            Home
          </Link>
          <Link to="/about-us" className="text__color">
            About Us
          </Link>
          <Link to="/contact-us" className="text__color">
            Contact Us
          </Link>
          <Link to="/login" className="text__color">
            Login
          </Link>
        </div>

        <div className="box3">
          <h4>OTHER USEFULL LINKS</h4>
          <Link to="/" className="text__color">
            Books
          </Link>
          <Link to="/about-us" className="text__color">
            EBooks
          </Link>
          <Link to={"/admin/dashboard"||"user/dashboard"} className="text__color">
            Dashboard
          </Link>
          <Link to="/login" className="text__color">
            Forget Password
          </Link>
        </div>

        <div className="box4">
          <h4>CONTACT</h4>
          <div className="item">
            <AiOutlineHome className="icon__home" />
            <span>M S Ramaiah University of Applied Sciences</span>
          </div>
          <div className="item">
            <AiOutlineMail className="icon" />
            <span>mparjun.me@gmail.com</span>
          </div>
          <div className="item">
            <AiOutlinePhone className="icon" />
            <span>8904190173</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>
          &copy;2024 Copyright : Student of M S Ramaiah University Of Applied Sciences, Bengaluru
        </span>
      </div>
    </footer>
  );
};

export default Footer;

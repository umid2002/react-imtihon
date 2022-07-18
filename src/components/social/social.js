import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./social.scss";

const Social = () => {
  return (
    <div className="social">
      <h2 className="social-title">What I do!</h2>
      <p className="social-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
        augue erat ac eros. Cras ultricies mattis convallis.
      </p>
      <Link className="explore-me" to="/">
        Explore me <AiOutlineRight className="right-icon" />
      </Link>
      <div className="icons">
        <IconContext.Provider value={{}}>
          <Link to="/">
            <FaFacebookF className="social-icons" />
          </Link>
          <Link to="/">
            <BsGithub className="social-icons" />
          </Link>
          <Link to="/">
            <BsTwitter className="social-icons" />
          </Link>
          <Link to="/">
            <FaLinkedinIn className="social-icons" />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Social;

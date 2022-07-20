import { Link, } from "react-router-dom";
import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import error from "../../assets/img/error.jpg"
import "./error.scss"
import {AiOutlineRight} from "react-icons/ai"


const Error = () => {
  return (
    <>
      <Container>
        <Navbar className="error" />
        <img className="error-img" src={error} alt="img" />
        <h2 className="error-title">Page not found - 404</h2>
        <p className="error-subtitle">This page not found (deleted or never exists). <br /> Try a phrase in search box or back to home and start again.</p>
        <Link className="home-link" to="/">TAKE ME HOME <AiOutlineRight /> </Link>
      </Container>
    </>
  );
}

export default Error;
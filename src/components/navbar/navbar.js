import Search from "../search/search";
import MobileNavigation from "./mobile-navigation";
import Navigation from "./navigation";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate()
  return (
    <div className="nav">
      <div>
        <h1 onClick={()=>{navigation("/")}} className="logo">BoburBlog</h1>
      </div>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="mobile-navigation">
        <MobileNavigation />
      </div>
      <Search />
    </div>
  );
};

export default Navbar;

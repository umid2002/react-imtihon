import Search from "../search/search";
import MobileNavigation from "./mobile-navigation";
import Navigation from "./navigation";
import "./navbar.scss"


const Navbar = () => {

  
  return (
    <div className="nav">
      <div><h1 className="logo">BoburBlog</h1></div>
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

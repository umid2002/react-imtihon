import Menu from "../menu/menu";
import Search from "../search/search";
import "./navbar.scss"


const Navbar = ({ menuData }) => {
  return (
    <div className="nav">
      <div className="logo">BoburBlog</div>
      <Menu menuData={menuData} />
      <Search />
    </div>
  );
};

export default Navbar;

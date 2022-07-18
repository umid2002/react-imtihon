import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import Filter from "../menu/filter";
import Search from "../search/search";
import "./navbar.scss"


const Navbar = () => {
  const {menu} = useContext(TodosContext)
  return (
    <div className="nav">
      <div className="logo">BoburBlog</div>
      <Filter menuData={menu} />
      <Search />
    </div>
  );
};

export default Navbar;

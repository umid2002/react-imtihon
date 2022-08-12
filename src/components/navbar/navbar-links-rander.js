import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import NavLinks from "./nav-links";


const NavbarFilter = () => {
  const {navLinks} = useContext(TodosContext);
  return(
    <ul className="nav-list">
      {navLinks.map((link) =>  (<NavLinks key={link.id} link={link} />) )}
    </ul>
  );
}
export default NavbarFilter;
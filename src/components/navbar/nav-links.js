import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";

const NavLinks = ({link}) => {
  const {setFilteredUsers, users} = useContext(TodosContext);
  const handleRadioChange = (evt) =>{
    const inputType = evt.target.id;
    const filterByType = users.filter((item) => item.sort === inputType)
    inputType === "All" ? setFilteredUsers(users) : setFilteredUsers(filterByType)
  }
  return (
      <li className="nav-list__item">
        <label>
          {link.name}
          <input name="sort" onChange={handleRadioChange} id={link.name} className="visually-hidden" type="radio" />
        </label>
      </li>
    
  );
}

export default NavLinks;
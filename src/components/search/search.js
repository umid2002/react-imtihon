import "./search.scss";
import {BiSearch} from "react-icons/bi"
import { TodosContext } from "../../contexts/contexts";
import { useContext, useRef } from "react";


const Search = () => {
  const { users, setFilteredUsers } = useContext(TodosContext);
  const inputRef = useRef()

  const handleFilterSubmit = (evt) => {
    evt.preventDefault()  
    const inputValue = inputRef.current.value;

      const filteredUsers = users.filter((data) => data.title.includes(inputValue))
      setFilteredUsers(filteredUsers)

  }
  return (  
    <>
      <form onSubmit={handleFilterSubmit}  method="get" className="search" action="#">
        <input ref={inputRef} placeholder="Search" className="search-input" type="text" />
        <button className="search-submit">
           <BiSearch color="white" size="1rem" />
        </button>
      </form>
    </>
  );
}

export default Search;
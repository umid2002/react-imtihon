import "./search.scss";
import {BiSearch} from "react-icons/bi"


const Search = () => {
  return (
    <>
      <form className="search" action="#">
        <input placeholder="Search" className="search-input" type="text" />
        <button className="search-submit">
           <BiSearch color="white" size="1rem" />
        </button>
      </form>
    </>
  );
}

export default Search;
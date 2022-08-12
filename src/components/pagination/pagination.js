import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import "./pagination.scss"

const Pagination = () =>{
  const {filteredUsers, setactivePageNumber} = useContext(TodosContext);

  if(!filteredUsers){
    return null
  }

  const pagesCount = Math.ceil(filteredUsers.length / 10)

  const handlePaginationClick = (evt) => {
    if(evt.target.matches("button")){
      setactivePageNumber(+evt.target.dataset.id)
    }
  }

  return (
    <ul onClick={handlePaginationClick} className="pagination">
      {Array(pagesCount).fill().map((_, index) => (
        <li key={index}>
        <button className="pagination-button" data-id={index + 1} key={index}>{index + 1}</button>
      </li>
      ))}
    </ul>
  );
}


export default Pagination;
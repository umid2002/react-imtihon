import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import FilterItem from "../filter-item/filter-item";

import "./filter.scss";

const Filter = () => {
  const {menu} = useContext(TodosContext)

  return (
    <ul className="nav-list">
      {menu.map((data) => {
        return(
          <FilterItem key={data.id} data={data} />
        );
      })}
    </ul>
  );
};

export default Filter;

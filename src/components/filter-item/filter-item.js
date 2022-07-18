import { Link } from "react-router-dom";

const FilterItem = ({ data }) => {
  return (
    <li className="nav-list__item">
      <Link to={"/"}>{data.name}</Link>
    </li>
  );
};

export default FilterItem;

import { Link } from "react-router-dom";

const Menu = ({ menuData }) => {
  return (
    <ul className="nav-list">
      {menuData.map((data) => (
        <li>
          {" "}
          <Link to={"/nav"}>{data.name}</Link>{" "}
        </li>
      ))}
    </ul>
  );
};

export default Menu;

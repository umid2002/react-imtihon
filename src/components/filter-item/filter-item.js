
const FilterItem = ({ data }) => {
  return (
    <li className="nav-list__item">
      <label>
        {data.name}
        <input className="visually-hidden" type="radio" />
      </label>
    </li>
  );
};

export default FilterItem;

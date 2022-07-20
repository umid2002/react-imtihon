import "./product-item.scss"

import { Link } from "react-router-dom";

const ProductItem = ({ data, className }) => {
  const { id, title, date, sort, time } = data;
  return (
    <>
      <div className={"product-item " +  className}>
        <div className="product-item__top">
          <p className="date">{date}</p>
          <p className="sort">{sort}</p>
        </div>
        <Link to={"blog/" + id}><h2 className="title">{title}</h2></Link>
        <span className="time">{time}</span>
      </div>
    </>
  );
}


export default ProductItem;
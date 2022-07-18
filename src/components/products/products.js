import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import ProductItem from "../../components/product-item/product-item";


const Product = () => {
  const {users} = useContext(TodosContext);
  return (
    <>
      {
        users?.map( (data) => (
          <ProductItem key={data.id} data={data} />
        ) )
      }
    </>
  );
}

export default Product;
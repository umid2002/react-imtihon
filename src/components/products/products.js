import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";
import ProductItem from "../../components/product-item/product-item";


const Product = () => {
  const {paginatedAlbums} = useContext(TodosContext);
  return (
    <>
      {
        paginatedAlbums?.map( (data) => (
          <ProductItem key={data.id} data={data} />
        ) )
      }
    </>
  );
}

export default Product;
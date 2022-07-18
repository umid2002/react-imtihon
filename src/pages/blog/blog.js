import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import ProductItem from "../../components/product-item/product-item";
import "./blog.scss";
import blog from "../../assets/img/blog.jpg";
import { useContext } from "react";
import { TodosContext } from "../../contexts/contexts";

const Blog = () => {
  const { id } = useParams();
  const { users } = useContext(TodosContext)

  
  const dataItem = users.find((data) => {
    return data.id === +id;
  });


  return (
    <>
      <header className="blog">
        <Container>
          <Navbar />
          <section className="section section-blog">
            <ProductItem className="blog-product" />
            <img className="blog-img" src={blog} alt="Blog Img" />
            <p className="blog-body">{dataItem.body}</p>
            <div className="info">
              <h2 className="info-title">Info overload</h2>
              <p className="info-subtitle">
                Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit
                dignissim, mauris massa pellentesque augue, quis ultricies sem
                tortor et velit.
              </p>
              <div className="info-about">
                <p className="info-description">
                  Sed commodo ligula vitae mollis tristique. Maecenas egestas
                  semper mauris. Duis tempus blandit ultrices. Proin{" "}
                  <Link className="elit-link" to="elit.uz">
                    elit.uz{" "}
                  </Link>
                  nulla, viverra id suscipit quis, tristique a dolor.
                </p>
                <p className="info-author">
                  ‘Designing For Sustainability, Tim Frick, 2014'
                </p>
              </div>
            </div>
            <div className="lesson">
              <h2 className="lesson-title">Lessons Learnt: Best Practice</h2>
              <ul className="lesson-list">
                <li className="lesson-item">
                  Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at
                  lorem ultricies aliquam eu eu nisl.
                </li>
                <li className="lesson-item">
                  Suspendisse. Maecenas sit amet ligula auctor neque aliquam
                  placerat et ac neque. Proin risus eros, fringilla eu suscipit
                  dignissim, dignissim.
                </li>
              </ul>
            </div>
          </section>
        </Container>
      </header>
    </>
  );
};

export default Blog;

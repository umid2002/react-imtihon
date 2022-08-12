import { Link, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import ProductItem from "../../components/product-item/product-item";
import "./blog.scss";
import blog from "../../assets/img/blog.jpg";
import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/contexts";
import Footer from "../../components/footer/footer";
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineShareAlt} from "react-icons/ai"

const Blog = () => {
  const { id } = useParams();
  const { users } = useContext(TodosContext);
  
  const dataItem = users?.find((data) => {
    return data?.id === +id;
  });
  const data = dataItem;

  const [like, setLike] = useState(data?.like)
  const [share, setShare] = useState(data?.share)


  const handleLikeAdd = () => {
    return setLike(like + 1)
  }
  const handleShareAdd = () => {
    return setShare(share + 1)
  }


  return (
    <>
      <header className="blog">
        <Container>
          <Navbar />
        </Container>
      </header>
      <section className="section-blog">
        <Container>
          <div className="blog-center">
            <ProductItem className="blog-product" data={data} />
            <span onClick={handleLikeAdd} className="like"> <AiOutlineLike size="1.5rem" /> {like}</span>
            <span onClick={handleShareAdd} className="share"> <AiOutlineShareAlt size="1.5rem" />{share}</span>
            <img className="blog-img" src={blog} alt="Blog Img" />
            <p className="blog-body">{data?.body}</p>
            {/* rander numbers */}
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
          </div>
          <div className="more-like">
            <h3 className="more-like__title">More like this</h3>
            <div className="more-like__product-item">
              <div className="product-item">
                <div className="product-item__top">
                  <p className="date">September 24. 2020</p>
                  <p className="sort">Figma</p>
                </div>
                <Link to={"#"}>
                  <h2 className="more-title">How to choose the right colors when creating a website?</h2>
                </Link>
                <span className="time">3 minute read</span>
              </div>
            </div>
            <div className=" more-like__product-item">
              <div className="product-item">
                <div className="product-item__top">
                  <p className="date">September 24. 2020</p>
                  <p className="sort">Figma</p>
                </div>
                <Link to={"#"}>
                  <h2 className="more-title">How to choose the right colors when creating a website?</h2>
                </Link>
                <span className="time">3 minute read</span>
              </div>
            </div>
            <div className=" more-like__product-item">
              <div className="product-item">
                <div className="product-item__top">
                  <p className="date">September 24. 2020</p>
                  <p className="sort">Figma</p>
                </div>
                <Link to={"#"}>
                  <h2 className="more-title">How to choose the right colors when creating a website?</h2>
                </Link>
                <span className="time">3 minute read</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Blog;


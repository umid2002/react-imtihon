import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import Social from "../../components/social/social";
import Product from "../../components/products/products";
import Footer from "../../components/footer/footer";

import "./home.scss";
import Pagination from "../../components/pagination/pagination";

const Home = () => {
  return (
    <>
      <header className="home-header">
        <Container>
          <Navbar />
        </Container>
      </header>
      <section className="home-section">
        <Container>
          <div className="home-todo">
            <div className="home-left">
              <Social />
            </div>
            <div className="home-right">
              <p className="home-right__title">Recent Posts</p>
              <Product />
            </div>
          </div>
        </Container>
      </section>
      <section className="paginate">
        <Container>
          <Pagination />
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default Home;

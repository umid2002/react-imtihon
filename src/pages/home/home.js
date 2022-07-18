import Container from "../../components/container/container"
import Navbar from "../../components/navbar/navbar";
import Social from "../../components/social/social";
import Product from "../../components/products/products";

import "./home.scss"

const Home = () => {


  return (
    <Container>
      <Navbar />
      <section className="home-section">
        <div className="home-left">
          <Social />
        </div>
        <div className="home-right">
          <p className="home-right__title">Recent Posts</p>
          <Product />
        </div>
      </section>
    </Container>
  )
}
export default Home;
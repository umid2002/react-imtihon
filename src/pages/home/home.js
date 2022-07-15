import Container from "../../components/container/container"
import Navbar from "../../components/navbar/navbar";

const Home = ({ menuData }) => {
  return (
    <Container>
      <Navbar menuData={menuData} />
    </Container>
  )
}
export default Home;
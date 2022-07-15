import Home from "./pages/home/home";
import menuData from "./components/data/data";


function App() {
  return (
    <>
      <Home  menuData={menuData} />
    </>
  );
}

export default App;

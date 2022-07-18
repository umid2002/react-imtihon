import Home from "./pages/home/home";

import "./assets/scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/blog";
import Error from "./pages/error/error";
import TodosProvider from "./contexts/contexts";


const App = () => {
 


  return (
    <>
      <TodosProvider >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/error/:id" element={<Error />} />
          </Routes>
      </TodosProvider>
    </>
  );
};

export default App;



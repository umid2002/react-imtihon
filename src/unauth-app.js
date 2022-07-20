import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
// import Error from "./pages/error/error";

const UnauthApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<Error /> } /> */}
    </Routes>
  );
}

export default UnauthApp;



// Route ishlamadi 
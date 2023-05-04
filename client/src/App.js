import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Forgotpassword from "./Pages/Forgot Password/Forgotpassword";
import NewPassword from "./Pages/NewPassword/NewPassword";
import Addproduct from "./Components/Products/Addproduct/Addproduct";
import UpdateProduct from "./Components/Products/Updateproduct/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/forgotpassword"} element={<Forgotpassword />} />
        <Route path={"/NewPassword/:token"} element={<NewPassword />} />
        <Route path={"/Addproduct"} element={<Addproduct />} />
        <Route path={"/Updateproduct/:SKU"} element={<UpdateProduct />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

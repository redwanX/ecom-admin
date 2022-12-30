import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customer from "./Pages/Customer/Customer";
import Products from "./Pages/Products/Products";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Shop/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-accent">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="customer" element={<Customer></Customer>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

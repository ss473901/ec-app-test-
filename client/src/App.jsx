import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Success } from "./pages/Success";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

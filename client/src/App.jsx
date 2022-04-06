import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/login" element={<Login />}>
          {user ? <Navigate to="/" /> : <Login />}
        </Route> */}

        {/* <Route path="login" element={<Login />}>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Route> */}

        {/* <Route>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login element={<Login/>}" />
          )}
        </Route> */}

        {/* 
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )} */}

        {/* {user ? (
          <Route>
            <Navigate to="/" />
          </Route>
        ) : (
          <Route path="/login" element={<Login />} />
        )} */}

        {user ? (
          <Navigate to="/" />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Book Store</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

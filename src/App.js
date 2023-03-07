import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Interview from "./pages/Interview";
import Error from "./pages/Error";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/common/ScrollToTop";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="interview" element={<Interview />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

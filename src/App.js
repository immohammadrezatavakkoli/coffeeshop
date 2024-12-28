import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import Header from "./components/module/Header";
import NotFound from "./page/404";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

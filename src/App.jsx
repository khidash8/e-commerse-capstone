import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
import Navbar from "./pages/nav-bar/nav-bar";

const Shop = () => {
  return <h1>im a shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;

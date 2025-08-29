import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      {/* Nav Bar. */}
      <Navigation />
      <div>
        {/* Home page. */}
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

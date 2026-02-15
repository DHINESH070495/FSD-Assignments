import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import products from "./products";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <Header />

      <ProductList products={products} />

      <Footer />

    </div>
  );
}

export default App;

import ProductCard from "./components/ProductCard";
import Banner from "./components/shared/home/Banner";
import RisenProducts from "./components/shared/home/RisenProducts";

async function Home() {
  const res = await fetch(`${process.env.API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error(`API error! Status: ${res.status}`);
  }
  const products = await res.json();
  console.log();

  return (
    <div>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-12">
        <Banner></Banner>
        <RisenProducts products={products}></RisenProducts>
      </main>
    </div>
  );
}

export default Home;

import { IProduct } from "@/app/types/types";
import ProductCard from "../../ProductCard";
import { FiTriangle } from "react-icons/fi";

const RisenProducts = ({products} : {products : IProduct[]}) => {
    const filteredProducts = products
    .filter((p) => p?.change?.dir === "up" || p?.change?.pct > 0)
    .sort((a, b) => b?.change.pct - a?.change.pct)
    .slice(0, 6);

//   const fallers = products
//     .filter(
//       (p) => p.priceChangeDirection === "down" || p.priceChangePercent < 0,
//     )
//     .sort((a, b) => a.priceChangePercent - b.priceChangePercent)
//     .slice(0, 6);

  return (
    <div>
        <h2 className="flex gap-2 items-center text-xl font-bold my-5"><FiTriangle className="w-4 h-4 text-[#d9383a] fill-[#d9383a]"/>আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            filteredProducts?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </div>   
    </div> 
  );
};

export default RisenProducts;

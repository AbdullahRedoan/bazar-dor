import { IProduct } from "@/app/types/types";
import ProductCard from "../../ProductCard";
import { TbTriangleInverted } from "react-icons/tb";

const FallenProducts = ({products} : {products : IProduct[]}) => {
    const filteredProducts = products
    .filter((p) => p?.change?.dir === "down" || p?.change?.pct < 0)
    .sort((a, b) => b?.change.pct - a?.change.pct)
    .slice(0, 6);

  return (
    <div>
        <h2 className="flex gap-2 items-center text-xl font-bold my-5"><TbTriangleInverted className="w-4 h-4 text-success fill-success"/>আজ দাম কমেছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            filteredProducts?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </div>   
    </div> 
  );
};

export default FallenProducts;

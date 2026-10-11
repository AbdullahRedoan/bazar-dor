import { IProduct } from "@/app/types/types";
import ProductCard from "../../../products/ProductCard";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div id="products">
      <div className="my-5">
        <h2 className="text-xl font-bold my-2">সব পণ্য</h2>
        <h5>
          মোট {products?.length.toLocaleString("bn-BN")}টি পণ্য দেখানো হচ্ছে
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

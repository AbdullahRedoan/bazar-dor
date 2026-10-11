"use client";
import { useState } from "react";
import { IProduct } from "../types/types";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ products }: { products: IProduct[] }) => {
  const [sortBy, setSortBy] = useState("");
  const handleSort = (products: IProduct[]) => {
    if (sortBy === "default") {
      return products;
    } else {
      const sorted = [...products].sort((a, b) =>
        sortBy === "desc" ? b.today - a.today : a.today - b.today,
      );
      return sorted;
    }
  };

  const sortedProducts = handleSort(products);

  return (
    <div>
      <div className="w-full md:min-w-sm my-10 bg-[#f8faf8] border border-gray-100 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-4 w-full justify-end">
            সাজান{" "}
            <select
              onChange={(e) => setSortBy(e.target.value)}
              defaultValue="Pick a color"
              className="select w-1/12 rounded-xl"
            >
              <option value={"default"}>ডিফল্ট</option>
              <option value={"asc"}>দাম: কম থেকে বেশি</option>
              <option value={"desc"}>দাম: বেশি থেকে কম</option>
            </select>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedProducts?.map((product) => (
          <ProductCard key={product?.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

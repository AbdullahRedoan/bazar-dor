import { IProduct } from "../types/types";
import CategoryProducts from "./CategoryProducts";

const CategoryDetails = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const { category } = await searchParams;
  const res = await fetch(
    `${process.env.API_BASE_URL}/products?category=${category}`,
  );
  const products: IProduct[] = await res.json();


  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="w-full md:min-w-sm my-10 bg-[#f8faf8] border border-gray-100 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="w-20 h-20 rounded-2xl bg-gray-100/80 flex items-center justify-center text-2xl shrink-0">
            {products[0]?.image}
          </span>
          <span className="text-2xl font-bold">
            {products[0]?.categoryNameBn}
            <p className="text-sm font-normal my-2">
              {products?.length?.toLocaleString('bn-BN')}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </span>
        </div>
      </div>
      <CategoryProducts products={products}></CategoryProducts>
    </div>
  );
};

export default CategoryDetails;

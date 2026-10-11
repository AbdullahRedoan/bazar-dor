import ICategory from "@/app/types/types";
import CategoryBtn from "./CategoryBtn";

const Categories = async () => {
  
  const res = await fetch(`${process.env.API_BASE_URL}/categories`);
  const categories = await res.json();
  return (
    <div className="bg-[#f6f8f6] border-b border-gray-200/60 py-1 sm:px-10">
      <div className=" max-w-7xl mx-auto flex justify-start gap-10 py-2  items-center">
        {categories.map((category: ICategory) => {
          return( <CategoryBtn key={category.id} category ={category}></CategoryBtn>)
        })}
      </div>
    </div>
  );
};

export default Categories;

import Link from "next/link";
import ICategory from "@/app/types/types";

const Categories = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/categories`);
  const categories = await res.json();
  console.log(categories);
  return (
    <div className="bg-[#f6f8f6] border-b border-gray-200/60 py-1 sm:px-10">
      <span className=" max-w-7xl mx-auto flex justify-start gap-10 py-2">
        {categories.map((category: ICategory) => {
          return (
            <Link className="text-black" href={category.slug} key={category.id}>
              <>
                <span>{category.icon}</span>
              </>
              <span>{category.nameBn}</span>
            </Link>
          );
        })}
      </span>
    </div>
  );
};

export default Categories;

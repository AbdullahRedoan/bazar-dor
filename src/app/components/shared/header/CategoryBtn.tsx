'use client'
import ICategory from "@/app/types/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CategoryBtn = ({category}:{category : ICategory}) => {
    const searchParams = useSearchParams()
    const currentCategoryParam = searchParams.get('category');
    const isActive = currentCategoryParam === category.slug;
  return (
    <Link
      className={`text-black font-semibold text-md ${
              isActive
                ? 'bg-[#008a45] text-white shadow-sm py-1 px-2 rounded-2xl'
                : ' hover:text-emerald-700 hover:bg-slate-100'
            }`}
      href={`/products?category=${category.slug}`}
      key={category.id}
    >
      <>
        <span>{category.icon}</span>
      </>
      <span>{category.nameBn}</span>
    </Link>
  );
};

export default CategoryBtn;

import Link from "next/link";
import ICategory from '@/app/types/types';

const Categories = async() => {
    const res = await fetch(`${process.env.API_BASE_URL}/categories`)
    const categories = await res.json();
    console.log(categories);
    return (
        <span>
            {
                categories.map((category : ICategory) => {
                    console.log(category.nameBn);
                    <p>Good boy</p>
                })
            }
        </span>        
    );
};

export default Categories;
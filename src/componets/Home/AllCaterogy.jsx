import React from "react";
import Link from "next/link";

const AllCaterogy = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">All Category</h2>

      <ul className="mt-6 flex flex-col gap-3">
        {categories.news_category.map((category) => {
          const isActive = String(activeId) === String(category.category_id);

          return (
            <li
              key={category.category_id}
              className={`rounded-md p-3 text-center text-xl font-bold ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-gray-800"
              }`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCaterogy;
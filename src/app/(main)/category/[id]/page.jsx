import { Suspense } from "react";
import { cacheLife } from "next/cache";

import AllCaterogy from "@/componets/Home/AllCaterogy";
import DragonNewsHome from "@/componets/Home/DragonNewsHome";
import News from "@/componets/Home/News";

async function getCategories() {
  "use cache";

  cacheLife("hours");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const result = await res.json();

  return result.data;
}

async function getNewByCategories(id) {
  "use cache";

  cacheLife("hours");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );

 

  const result = await res.json();


  return result.data;
}

async function NewsCategoryContent({ params }) {
  const { id } = await params;

  const [categories, news] = await Promise.all([
    getCategories(),
    getNewByCategories(id),
  ]);

  return (
    <div className="mx-auto mt-[60px] grid w-11/12 grid-cols-12 gap-3">
      {/* Left Sidebar */}
      <div className="col-span-12 bg-white md:col-span-3">
        <AllCaterogy categories={categories} activeId={id} />
      </div>

      {/* News Section */}
      <div className="col-span-12 md:col-span-6">
        <h2 className="mb-4 text-2xl font-bold">All News</h2>

        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => (
              <News
                key={n._id ?? n.id}
                news ={n}
                
            
              >
                <h3 className="font-semibold">{n.title}</h3>
              </News>
            ))
          ) : (
            <p>No news found in this category.</p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-12 md:col-span-3">
        <DragonNewsHome />
      </div>
    </div>
  );
}

export default function NewsCategoryPage({ params }) {
  return (
    <Suspense
      fallback={
        <p className="mx-auto mt-10 w-11/12 text-center">
          Loading category news...
        </p>
      }
    >
      <NewsCategoryContent params={params} />
    </Suspense>
  );
}
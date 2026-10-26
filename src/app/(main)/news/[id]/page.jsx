export const instant = false;

import React from "react";
import { cacheLife } from "next/cache";
import Image from "next/image";

async function getDetail(id) {
  "use cache";

  cacheLife("hours");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch news details: ${res.status}`);
  }

  const result = await res.json();

  return Array.isArray(result.data)
    ? result.data[0] 
    : result.data;
}

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getDetail(id);

  if (!news) {
    return <p>News not found!</p>;
  }

  return (
    <main className="mx-auto mt-10 w-11/12 max-w-4xl">
      <h1 className="mb-5 text-3xl font-bold">
        {news.title}
      </h1>

      {news.image_url && (
        <Image
          src={news.image_url}
          width={400}
          height={400}
          alt={news.title || "News image"}
          className="mb-5 w-full rounded-lg"
        />
      )}

      <p className="leading-8">{news.details}</p>
    </main>
  );
};

export default DetailsPage;
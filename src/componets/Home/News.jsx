import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiRead, CiShare2, CiStar } from "react-icons/ci";

const News = ({ news }) => {
  console.log(news, "news");

  return (
    <div>
      <div className=" bg-base-100  ">
  <div className="card-body">

        {/* Aothot Baer */}
        <div className=" flex justify-between items-center bg-slate-200 p-3 ">
            <div className="flex gap-3">
                <Image src={news.author?.img} alt={news.author?.name} height={40} width={40} className="rounded-full"></Image>

                 <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p>{news.author?.published_date}</p>
            </div>

            </div>
            <div className="flex justify-between items-center gap-3">

                <CiShare2 className="text-xl" />
                <CiBookmark className="text-xl" />


            </div>
           
        </div>


    <h2 className="card-title">{news.title}</h2>
     <figure>

     <Image src={news.image_url} alt={news.title} height={300} width={300} className="w-full"></Image>
    
  </figure>

  <p>{news.details}</p>

  <div className="flex justify-between items-center ">
    <div className="flex justify-between items-center gap-3 " >
        <h2 className="flex items-center gap-2"><CiStar />
{news.rating.number}</h2>
        <h2 className="flex items-center gap-2"><CiRead />{news.total_view}</h2>

    </div>
    <Link
    href={`/news/${news._id}`}
    className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
  >
    Read More
  </Link>
  </div>

  </div>
 
</div>
</div>
  );
};

export default News;
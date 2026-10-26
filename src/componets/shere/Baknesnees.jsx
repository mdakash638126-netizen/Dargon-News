import React from 'react';
import Marquee from 'react-fast-marquee';

const Baknesnees = () => {

    const news = [
        {
            id: "1",
            title: "Breaking news : Major Event unfold in the city"
        },

        {
            id: "2",
            title: "Technology News: New AI Technology Changes the Future",
        },

        {
            id: "3",
            title: "Sports News: Bangladesh Wins an Exciting Cricket Match",
        },
    ]


    return (
        <div className=' mx-auto w-11/12 px-2 flex justify-between gap-3 py-4 bg-gray-500 items-center'>
            <button className='btn bg-rose-500 text-white'>Laste News</button>
            <Marquee pauseOnHover = {true}>

                {
                    news.map((n)=>{
                        return<span key={n.id}> {n.title}</span>
                    })
                }
  
            </Marquee>
        </div>
    );
};

export default Baknesnees;
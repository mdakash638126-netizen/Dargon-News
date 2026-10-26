import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const DragonNewsHome = () => {
    return (
        <div>
            <h2 className='font-semibold text-2xl p-3'>Login With</h2>
           <div className='flex flex-col gap-3 '> 
             <button className='btn border-blue-500 texr-blue-500'> <FaGoogle />Login with google</button>
            <button className='btn'> <FaGithub />Login with GitHub</button>
           </div>
        </div>
    );
};

export default DragonNewsHome;
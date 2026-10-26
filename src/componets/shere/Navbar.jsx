import Link from 'next/link';
import React from 'react';
import user from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between mx-auto w-11/12 gap-4 mt-5'>
            <div></div>
          <ul className='flex justify-between items-center gap-3 text-center'>
            <li>
                <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink href={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink href={"/career"}>Career</NavLink>
            </li>
          </ul>
          <div className='flex gap-3'>
            <Image src={user} height={40} width={40} alt='user img'></Image>
            <button>
                <Link href={"/login"}>Login</Link>
            </button>
          </div>
        </div>
    );
};

export default Navbar;
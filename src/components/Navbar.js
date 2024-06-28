import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';
import Products from './Products';
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center w-full fixed px-[20%] mx-auto transition-all duration-300 z-50 ${isScrolled ? 'bg-white' : 'bg-[#F9F0EC]'}`}>
      <div className='w-32 h-24 relative'>
        <Image src={logo} fill alt="Logo" />
      </div>
      <ul className="flex space-x-4 w-[55%] justify-between relative">
        <li className="relative">
          <Link href="/">
            <h1 className={`text-[16px] roboto-bold uppercase font-semibold ${router.pathname === '/' ? 'text-[#FF0054] font-bold' : 'text-black hover:text-[#FF0054]'}`}>Home</h1>
          </Link>
        </li>
        <li className="relative">
          <Link href="/About">
            <p className={`roboto-bold uppercase font-semibold ${router.pathname === '/About' ? 'text-[#FF0054] font-bold' : 'text-black hover:text-[#FF0054]'}`}>About us</p>
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link href="/Packages">
            <div className={`flex items-center ${router.pathname === '/Packages' ? 'text-[#FF0054] font-bold' : 'text-black hover:text-[#FF0054]'}`}>
              <p className="roboto-bold uppercase font-semibold">Packages</p>
              <FaArrowDown className='ml-2 text-[17px]' />
            </div>
          </Link>
          {isDropdownVisible && (
            <div
              className='absolute top-full left-1/2 transform -translate-x-1/2 w-[60vw] bg-white rounded-2xl z-50 px-10 py-5'
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-medium mb-10'>Our products</h1>
              <Products className='mb-10' />
            </div>
          )}
        </li>
        <li className="relative">
          <Link href="/our-work">
            <p className={`roboto-bold uppercase font-semibold ${router.pathname === '/our-work' ? 'text-[#FF0054] font-bold' : 'text-black hover:text-[#FF0054]'}`}>Our work</p>
          </Link>
        </li>
        <li className="relative">
          <Link href="/Contact">
            <p className={`roboto-bold uppercase font-semibold ${router.pathname === '/Contact' ? 'text-[#FF0054] font-bold' : 'text-black hover:text-[#FF0054]'}`}>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

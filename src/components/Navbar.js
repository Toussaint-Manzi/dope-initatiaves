import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Products from './Products';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center w-[60%] mx-auto relative">
        <div className='w-32 h-24 relative '>
            <Image
                src={logo}
                fill
            />
        </div>
        <ul className="flex space-x-4 w-[55%] justify-between">
            <li>
                <Link href="#section1" className='text-black hover:text-[#FF0054]'>
                    <h1 className="text-[16px]  roboto-bold uppercase font-semibold">Home</h1>
                </Link>
            </li>
            <li>
                <Link href="#section2" className='text-black hover:text-[#FF0054]'>
                    <p className="roboto-bold uppercase font-semibold">About us</p>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='flex items-center text-black hover:text-[#FF0054]'>
                    <p className="roboto-bold uppercase font-semibold">Packages</p>
                    <FaArrowDown className=' ml-2 text-[17px]'/>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='text-black hover:text-[#FF0054]'>
                    <p className="roboto-bold uppercase font-semibold">our work</p>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='text-black hover:text-[#FF0054] '>
                    <p className="roboto-bold uppercase font-semibold">contact</p>
                </Link>
            </li>
        </ul>
        <div className='w-[100%] mx-auto absolute top-[100px] left-[20%] bg-white rounded-2xl z-50 px-10 py-5'>
            <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-medium mb-10'>Our products</h1>
            <Products className='mb-10'/>
        </div>
    </nav>
  );
};

export default Navbar;

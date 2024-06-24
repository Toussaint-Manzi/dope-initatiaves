import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import { FaArrowDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center w-full">
        <div className='w-32 h-24 relative '>
            <Image
                src={logo}
                fill
            />
        </div>
        <ul className="flex space-x-4 w-[55%] justify-between">
            <li>
                <Link href="#section1" className='text-black hover:text-[#FF0054]'>
                    <p className="uppercase font-semibold">Home</p>
                </Link>
            </li>
            <li>
                <Link href="#section2" className='text-black hover:text-[#FF0054]'>
                    <p className=" uppercase font-semibold">About us</p>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='flex items-center text-black hover:text-[#FF0054]'>
                    <p className=" uppercase font-semibold">Packages</p>
                    <FaArrowDown className=' ml-2 text-[17px]'/>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='text-black hover:text-[#FF0054]'>
                    <p className="uppercase font-semibold">our work</p>
                </Link>
            </li>
            <li>
                <Link href="#section3" className='text-black hover:text-[#FF0054]'>
                    <p className="uppercase font-semibold">contact</p>
                </Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;

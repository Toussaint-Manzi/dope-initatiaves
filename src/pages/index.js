import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import personImage from '../../public/assets/images/Pose 1.png';
import logo1 from '../../public/assets/images/logo.png';
import logo2 from '../../public/assets/images/Logo-2.png';
import logo3 from '../../public/assets/images/LOGO-KEZA-QUIZ.png';
import Partners from '@/components/sections/Partners';
import Home from '@/components/sections/Home';

const index = () => {
  return (
    <div className=''>
      <Home/>
      <Partners/>
    </div>
  );
};

export default index;

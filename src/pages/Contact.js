import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaPhone } from "react-icons/fa";
import { IoMdMail, IoIosSend } from "react-icons/io";
import Image from 'next/image';
import emailjs from 'emailjs-com';
import message from '../../public/assets/images/message.webp';
import personImage from '../../public/assets/images/Pose-2.png';
import logo1 from '../../public/assets/images/Keza-eshop-Logo.png';
import logo2 from '../../public/assets/images/Logo-2.png';
import logo3 from '../../public/assets/images/LOGO-KEZA-QUIZ.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('dope_initiative', 'template_dope_initiative', formData, '5Vn0dQTXAzt7_UHS2')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ ...formData, fullName:'', phone:'', email:'', message:'' });
        setFormStatus('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        setFormStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className='bg-[#F9F0EC] h-full pb-20'>
        <div
            className='w-full'
            style={{
                backgroundColor: '#F9F0EC',
                backgroundImage: 'url(/assets/images/background2.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
            }}
        >
            <div className='w-[60%] mx-auto flex justify-between items-center h-full xl:flex-col-reverse xl:justify-start xl:w-[80%] md:items-start sm:w-[90%]'>
                <div className='flex flex-col items-start self-start mt-48 w-[50%] xl:mt-0 xl:w-[80%] sm:w-[90%] pt-[150px]'>
                    <h1 className='roboto uppercase text-[15px] text-[#FF0054] font-semibold'>Dope Initiatives</h1>
                    <div className='grotesk leading-tight'>
                        <h1 className='text-[70px] text-black font-[600] xs:text-[45px]'>Contact <span className='bg-[#FF0054] text-white rounded-md px-5'>US</span></h1>
                        <h1 className='text-[40px] text-black font-[400] my-16 xs:text-[25px] xs:my-5'>Career center, 7th floor, Gasabo, Kimihurura</h1>
                    </div>
                </div>
                <div className='relative w-[45%] h-[900px] xl:w-[80%] sm:w-[90%] xs:hidden'>
                    <Image
                        src={personImage}
                        layout="fill"
                        objectFit="contain"
                        alt="Person"
                        style={{ top: '0%', left: '15%' }}
                    />
                    <div className='absolute w-[120px] h-[120px] animate-bounce' style={{ top: '40%', left: '5%' }}>
                        <Image src={logo1} width={120} height={120} alt="Square 1"/>
                    </div>
                    <div className='absolute w-[120px] h-[120px] animate-bounce' style={{ top: '10%', right: '5%' }}>
                        <Image src={logo2} width={120} height={120} alt="Square 2"/>
                    </div>
                    <div className='absolute w-[120px] h-[120px] animate-bounce' style={{ top: '50%', left: '100%' }}>
                        <Image src={logo3} width={120} height={120} alt="Square 3"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white w-[60%] mx-auto flex justify-between items-center h-[100px] rounded-3xl grotesk px-10 -mt-32 xl:mt-10 xl:w-[80%] sm:w-[100%] sm:flex-col sm:justify-start sm:h-full xs:w-[95%]'>
            <div className='flex items-center'>
                <FaPhone className='text-4xl text-[#FF0054] mr-3 xl:text-3xl xs:text-2xl'/>
                <h1 className='text-[30px] text-black font-[400] my-16 xl:text-[18px] sm:text-[15px] md:my-3 xs:text-[20px]'>(+250) 789294922</h1>
            </div>
            <div className='flex items-center'>
                <IoMdMail className='text-4xl text-[#FF0054] mr-3 xl:text-3xl xs:text-2xl'/>
                <h1 className='text-[30px] text-black font-[400] my-16 xl:text-[18px] sm:text-[15px] md:my-3 xs:text-[20px]'>dopeinitiativesltd@gmail.com</h1>
            </div>
        </div>
        <div className='relative bg-white w-[60%] mx-auto flex flex-col justify-between items-start h-full rounded-3xl grotesk px-20 mt-48 xl:w-[80%] xs:w-[95%] xs:px-3'>
            <div className='flex justify-between items-start md:flex-col md:items-center'>
                <div className='w-[40%] flex flex-col justify-center items-center md:w-[80%] md:mb-5 sm:mb-0'>
                    <div className='absolute -top-24 h-[270px] w-[300px] my-8 md:h-[180px] md:w-[200px]'>
                        <Image
                            src={message}
                            fill
                        />
                    </div>
                    <div className='mt-64 xs:mt-36'>
                        <h1 className='roboto text-[35px] text-black font-bold leading-tight xs:text-[25px]'>Send us a message.</h1>
                        <h1 className='text-[38px] text-black font-[400] leading-tight xs:text-[25px]'>Feel free to reach out, We will get back to you shortly</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='w-[50%] px-5 py-10 md:w-[80%] xs:w-[95%]'>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input 
                            name="fullName"
                            placeholder="Full Name*"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50 outline-none focus:border-[#FF0054] px-3" 
                        />  
                    </div>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input 
                            name="phone"
                            placeholder="Phone*"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50 outline-none focus:border-[#FF0054] px-3" 
                        />  
                    </div>
                    <div className="relative h-11 w-full min-w-[200px] mb-10">
                        <input 
                            name="email"
                            type='email'
                            placeholder="E-mail Address*"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50 outline-none focus:border-[#FF0054] px-3" 
                        />  
                    </div>
                    <div className="relative w-full min-w-[200px] mb-10">
                        <textarea 
                            name="message"
                            id="message"
                            rows="5"
                            placeholder="Message...*"
                            value={formData.message}
                            onChange={handleChange}
                            className="block h-full w-full text-gray-700 border-b-[3px] border-[#eed3c9] bg-transparent font-sans text-[17px] font-normal text-blue-gray-700 transition-all placeholder:text-gray-700 disabled:border-0 disabled:bg-blue-gray-50 outline-none focus:border-[#FF0054] px-3" 
                        ></textarea>  
                    </div>
                    {formStatus && <div className={`text-center mt-4 text-lg font-semibold ${ formStatus === 'Message sent successfully!' ? 'text-green-600' : 'text-red-500' }`}>{formStatus}</div>}
                    <button type="submit" className='h-[60px] self-start bg-white border-[3px] border-[#FF0054] rounded-md flex items-center justify-center text-[#FF0054] px-8 py-8 mt-16 hover:bg-[#FF0054] hover:text-white'>
                        <h1 className="text-[19px] grotesk font-medium mr-4">Send Message</h1>
                        <IoIosSend className='text-[30px]'/>
                    </button>
                </form> 
            </div>
            <div className='h-[1px] w-full bg-gray-300 mt-10 mb-5'></div>
            <div className='flex flex-row mb-10'>
                <h1 className='roboto text-[18px] text-gray-400 font-[400]'>Monday – Friday: 06:00 AM – 10:00 PM</h1>
                <h1 className='roboto text-[18px] text-gray-400 font-[400] ml-14'>Saturday – Sunday: 08:00 AM – 08:00 PM</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact;

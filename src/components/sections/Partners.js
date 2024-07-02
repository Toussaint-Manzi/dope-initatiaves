import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
function Partners() {
	return (
		<div className='w-full px-[20%] pt-4 pb-20 mx-auto bg-[#F9F0EC]'>
			<h2 className='text-center text-2xl font-[700] grotesk text-[#FF0054] my-7'>Our partners</h2>
			<section id='clients' className='clients section-bg'>
				<div className='container' data-aos='zoom-in'>
					<Carousel
						responsive={responsive}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={3000}>
						<div className={`relative w-[110px] h-[90px]`}>
							<Image
								src='/assets/images/imbuto.png'
								layout="fill"
								objectFit="contain"
								alt='Imbuto'
							/>
						</div>

						<div className={`relative w-[110px] h-[90px]`}>
							<Image
								src='/assets/images/Smart_Africa.png'
								layout="fill"
								objectFit="contain"
								alt='Smart Africa'
							/>
						</div>

						<div className={`relative w-[110px] h-[90px]`}>
							<Image
								src='/assets/images/RBC.png'
								layout="fill"
								objectFit="contain"
								alt='RBC'
							/>
						</div>

						<div className={`relative w-[110px] h-[90px]`}>
							<Image
								src='/assets/images/minict.png'
								layout="fill"
								objectFit="contain"
								alt='MINICT'
							/>
						</div>

						<div className={`relative w-[110px] h-[90px]`}>
							<Image
								src='/assets/images/mineduc.png'
								layout="fill"
								objectFit="contain"
								alt='MINEDUC'
							/>
						</div>

						{/* <div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/assets/images/Visa.svg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/assets/images/Visa.svg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/assets/images/Visa.svg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div> */}
					</Carousel>
				</div>
			</section>
		</div>
	);
}

export default Partners;

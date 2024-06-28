import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 7,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
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
						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/assets/images/PayPal.svg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/assets/images/Mastercard.svg'
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
						</div>
					</Carousel>
				</div>
			</section>
		</div>
	);
}

export default Partners;

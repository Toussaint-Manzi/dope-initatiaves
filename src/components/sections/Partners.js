import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
  const partners = [
    { src: "/assets/images/imbuto.png", alt: "Imbuto Foundation", height: 90 },
    { src: "/assets/images/RBC.png", alt: "Rwanda Biomedical Center", height: 60 },
    { src: "/assets/images/Smart_Africa.png", alt: "Smart Africa", height: 60 },
    { src: "/assets/images/minict.png", alt: "Ministry of ICT", height: 90 },
    { src: "/assets/images/mineduc.png", alt: "Ministry of Education", height: 90 },
	{ src: "/assets/images/RBC.png", alt: "Rwanda Biomedical Center", height: 60 },
	{ src: "/assets/images/Smart_Africa.png", alt: "Smart Africa", height: 60 },
  ];

  return (
    <div className="w-full px-[20%] pt-4 pb-20 mx-auto bg-[#F9F0EC]">
      <h2 className="text-center text-2xl font-[700] grotesk text-[#FF0054] my-7">Our partners</h2>
      <section id="clients" className="clients section-bg">
        <div className="container" data-aos="zoom-in">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="flex items-center justify-center"
            centerMode={true}
            additionalTransform={-20}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center my-3">
                <div className={`relative w-[110px] h-[${partner.height}px]`}>
                  <Image
                    src={partner.src}
                    layout="fill"
                    objectFit="contain"
                    alt={partner.alt}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Partners;



import React from "react";
import Image from "next/image";
import img from '../img/Nav Bar (1).png';
import img1 from '../img/Details Rental.png';
import Img3 from '../img/Top 5 Car Rental.png';
import img4 from '../img/Recent Transaction.png'

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between">
      {/* Navbar Image on the left side */}
      <div className="first hidden md:flex w-[25%] lg:w-[450px]">
        <Image alt="" src={img} />
      </div>

      {/* Flex container for the two images (img1 and Img3) */}
      <div className="flex w-full md:w-[75%] lg:w-[80%] ">
        {/* First Image (Details Rental) */}
        <div className="flex justify-center w-[50%]">
          <Image alt="" src={img1} className="" />
        </div>

        {/* Second Image (Top 5 Car Rental) */}
        <div className=" justify-center w-[500px]">
          <Image alt="" src={Img3} className="mx-auto" />
          <Image alt="" src={img4} className="mx-auto" />
        </div>
        
      </div>
    </div>
  );
}

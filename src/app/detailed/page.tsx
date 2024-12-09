import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {  FaHeart, FaStar } from 'react-icons/fa';

export default function Det() {
  return (
    <div className='w-full flex'>
     <div className="first hidden sm:flex w-[25%]">
        {/* <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/> */}



<div>
    <h1 className=' text-gray-400 ml-5 mt-5'>Type</h1>




    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        Sport (10)
      </label>
    </div>


    
    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        Suv (12)
      </label>
    </div>



    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        MPV (16)
      </label>
    </div>



    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        Sedan (20)
      </label>
    </div>


    
    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        Coupe (14)
      </label>
    </div>


    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        Hatchback (14)
      </label>
    </div>






    <h1 className=' text-gray-400 ml-5 mt-5'>Capacity</h1>



    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        2 Person (10)
      </label>
    </div>




    
    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        4 Person (14)
      </label>
    </div>

    
    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        6 Person (12)
      </label>
    </div>


    <div className="flex items-center space-x-2 mt-5">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-blue-950 font-semibold">
        8 Or more  (16)
      </label>
    </div>


    <h1 className=' text-gray-400 ml-5 mt-5'>price</h1>


</div>


      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div className=' bg-[#3563E9]  '>
                    <h1 className=' mt-6 text-white font-bold text-2xl w-72 ml-4'>Sports car with the best design and acceleration</h1>
                    <p className=' text-white w-72 mt-8 ml-4
                    '>Safety and comfort while driving a 
                    futuristic and elegant sports car</p>

                    <Image src={'/Car (12).png'} alt='' width={300} height={360} className=' mt-5 ml-4'/>

                </div>
                
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>

              <div className=' bg-[#3563E9] items-center justify-center pt-20 rounded-md mr-8'><Image src={'/Car (12).png'} alt='' width={148} height={124}/></div>
                <Image src={'/View 2.png'} alt='' width={148} height={124} className=' mr-4'/>
                <Image src={'/View 3.png'} alt='' width={148} height={124}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
 <div className=' flex '>  <h1 className=' text-black font-bold text-2xl ml-6 mt-6'>Nissan GT-R</h1>
 <FaHeart className=' mt-6 ml-44 text-red-600'/>
 </div> 

    <div className=' flex ml-6'>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#b0acac] '/>

<p className=' text-gray-400 ml-5'>440+ Reviewer</p>

    </div>
    <p className=' text-gray-500 mt-8 ml-6'>NISMO has become the embodiment of Nissans outstanding performance inspired by the most unforgiving proving ground the race track.</p>


<div className=' flex mt-5 ml-5 gap-10'>
    <h1 className=' text-gray-400'>Type car</h1>
    <h2 className=' text-gray-700'>Sports</h2>
    <h3 className=' text-gray-400'>Capacity</h3>
    <h4 className='text-gray-700'>2 person</h4>
</div>



<div className=' flex mt-5 ml-5 gap-10'>
    <h1 className=' text-gray-400'>Steering</h1>
    <h2 className=' text-gray-700'>Manual</h2>
    <h3 className=' text-gray-400'>Gasoline</h3>
    <h4 className='text-gray-700'>70 Lac</h4>
</div>




  <div className="p-4 flex  items-center gap-4 mt-10">


    <div className="flex items-center justify-between w-full">




      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/payment"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>


        <div>

<div className=' flex ml-4'>
<h2 className=' font-bold text-xl'>Reviews</h2>
<div className=' bg-[#3563E9] text-white px-2 rounded-md ml-4 py-1'>
    13
</div>


</div>

<div className=' mt-5 flex'>
    <Image src='/Profill.png' alt=' ' width={50} height={50}/>
    <h1 className=' font-bold text-lg ml-2'>Alex Stanton</h1>
    <h2 className=' text-gray-400 ml-[30rem]'>21 July 2022</h2>

</div>

<div className=' flex '>
    <h1>CEO at Bukalapak</h1>
    <FaStar className=' ml-[33rem] text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#787373]'/>

</div>

<p className=' text-gray-700 mt-10'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>





<div className=' mt-10 flex'>
    <Image src='/Profill (1).png' alt='' width={50} height={50}/>
    <h1 className=' font-bold text-lg ml-2'>Skylar Dias</h1>
    <h2 className=' ml-[32rem] text-gray-500'>20 July 2022</h2>
</div>


<div className=' flex '>
    <h1>CEO at Amazon</h1>
    <FaStar className=' ml-[35rem] text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#FBAD39]'/>
    <FaStar className=' text-[#787373]'/>

</div>

<p className=' text-gray-700 mt-10'>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>

<div className=' flex text-gray-500 mt-20 items-center justify-center'>
<h3>show all</h3>
<FaChevronDown />
</div>
        </div>

        {/* <section className=' w-full flex items-center justify-center'>
           
            <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={'/Reviews (1).png'} alt='' width={492} height={384} className=' md:hidden'/>
        </section> */}
        <section className="popular w-full flex flex-col gap-5 mt-16">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                {/* <Image src={"/heart.png"} alt="" width={20} height={20} /> */}
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              {/* <Image src={"/suv.png"} alt="" width={220} height={68} /> */}
              <Image src={"/Car (2).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush
                 {/* <Image src={"/heart.png"} alt="" width={20} height={20} /> */}
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              {/* <Image src={"/Car (7).png"} alt="" width={220} height={68} /> */}
              <Image src={"/Car (7).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/Car (7).png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              {/* <Image src={"/Car (4).png"} alt="" width={220} height={68} /> */}
              <Image src={"/Car (4).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              {/* <Image src={""} alt="" width={220} height={68} /> */}
              <Image src={"/car (11).png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>
  )
}
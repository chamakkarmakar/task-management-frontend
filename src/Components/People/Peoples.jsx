import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import People from './People';


const Peoples = () => {
    const [peopleSlider, setPeopleSlider] = useState(0);
    const peoples = [
        {
            img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1717572474~exp=1717576074~hmac=d95fb7f5f800e8b302e7ee8808f7f756ebe0c201104d4c30b811f6d44af42ddb&w=740",
            people: "Web Developer",
           
        },
        {
            img: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?t=st=1717572508~exp=1717576108~hmac=a6ce8542348762188b5f732662103bbc59391b5c63a6b77058782f21df5e6577&w=740",
            people: "Bankers",
           
        },
        {
            img: "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?w=740",
            people: "Corporate Professionals",
           
        },
        {
            img: "https://img.freepik.com/premium-photo/portrait-girl-closeup-girl-brown-background-beautiful-look_215924-2126.jpg?w=360",
            people: "Frontend Developer",
           
        },
        {
            img: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?t=st=1717572656~exp=1717576256~hmac=4bf62417665b87300ff6dc243a25a86b781416de0143b9521078f1629516ccd3&w=740",
            people: "Backend Developer",
           
        }
    ];

    const prevSlider = () => setPeopleSlider((peopleSlider) => peopleSlider === 0 ? peoples.length - 1 : peopleSlider - 1);
    const nextSlider = () => setPeopleSlider((peopleSlider) => peopleSlider === peoples.length - 1 ? 0 : peopleSlider + 1);
    return (
        <div className="max-w-4xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">

            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    <IoIosArrowBack className='w-7 h-7 text-sky-500' />
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    <IoIosArrowForward className='w-7 h-7 text-sky-500' />
                </button>
            </div>
            {/* slider container */}
            <div className="h-[400px] md:h-[500px] w-3/5 ml-auto relative ease-linear duration-300 flex items-center"
                style={{ transform: `translateX(-${peopleSlider * 50}%)` }}>
                {/* sliders */}
                {peoples.map((people, index) => (
                    <People key={index}
                    index={index}
                    peopleSlider={peopleSlider}
                    people={people}
                    />
                ))}
            </div>
        </div>
    )
}

export default Peoples

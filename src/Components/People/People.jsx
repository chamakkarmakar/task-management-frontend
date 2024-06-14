import React from 'react'

const People = ({peopleSlider,people,index}) => {
  return (
    <div 
    className={`${peopleSlider === index ? "h-[240px] md:h-[300px]" : "h-[220px] md:h-[280px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
    style={{ perspective: "200px" }}>
    <img src={people.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={people.people} style={{ transform: `${peopleSlider - 1 === index ? "rotateY(4deg)" : peopleSlider + 1 === index ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
    <h6 className='text-center font-bold text-xl'>{people.people}</h6>

</div>
  )
}

export default People

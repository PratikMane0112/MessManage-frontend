import React from 'react'
// import {FaHeart} from 'react-icons/fa'
// import {FaStar} from 'react-icons/fa'
const RecommendedFood = () => {

return(
<div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6" id="RecomFoods">
<div className="container mx-auto py-[2vh]">
<div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
Recommended <span className="text-[#f54748]">Foods</span>
</div>
<div className="grid gap-8 py-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073358.jpg?t=st=1709464821~exp=1709468421~hmac=9d20abd9bd57f195d69a49075d1a4f7d0dfa23cc0c2fa1dc9242ea33dee5eb58&w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">70Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Chapati Bhaji
</button>
</div>
<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/maharashtrn-kakdi-thalipeeth-punjabi-cucumber-paratha-made-from-fresh-grated-kheera-breakfast-serve-it-along-with-yogurt_466689-4282.jpg?w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">50Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Alu Paratha
</button>
</div>
<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg?t=st=1709464974~exp=1709468574~hmac=7e1953c21c757ebe12f0e73b339a14376c3a7bf8182f26e39a233b4631809164&w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">55Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Pulav
</button>
</div>
<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?t=st=1709465045~exp=1709468645~hmac=51e628042576115756ccff4ec09c04edec4d8885c5671c91ed91364ea101c011&w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">120Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Biryani
</button>
</div>




</div>
</div>

</div>

)
}


export default RecommendedFood
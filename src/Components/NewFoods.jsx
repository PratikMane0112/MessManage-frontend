import React from 'react'
// import {FaHeart} from 'react-icons/fa'
// import {FaStar} from 'react-icons/fa'
const NewFoods = () => {
    return(
<div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">

<div className="container mx-auto py-[2vh]">
<div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl" id="NewFoods">
New <span className="text-[#f54748]">Foods</span>
</div>

<div className="grid gap-8 py-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">



<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_466689-29517.jpg?w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">30Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Idli
</button>
</div>


<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72890.jpg?w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">30Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Samosa
</button>
</div>

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/puri-bhaji-indian-semi-dry-potato-spicy-recipe-also-known-as-batata-aloo-ki-sabji-served-with-fried-poori-selective-focus_466689-12818.jpg?w=996" alt="" />
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
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Puri Bhaji
</button>
</div>

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_466689-1590.jpg?w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">30Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Udith Vada
</button>
</div>









</div>
</div>

</div>
    )
}
export default NewFoods
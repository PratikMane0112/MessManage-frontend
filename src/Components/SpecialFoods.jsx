import React from 'react'
const SpecialFoods = () => {

return(

<div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6" id="SpecialFoods">
<div className="container mx-auto py-[2vh]">
<div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
Special <span className="text-[#f54748]">Foods</span>
</div>
<div className="grid gap-8 py-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/healthy-natural-yoghurt-wooden-table_51137-2737.jpg?w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">10Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Dahi
</button>
</div>

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-20466.jpg?t=st=1709466972~exp=1709470572~hmac=4a9e4109a6c0534e78c77143c5f36f9384d00814ea84dff202f8a57274e49562&w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">40Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Fruit Salad
</button>
</div>

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/premium-photo/glasses-smoothie_891428-132.jpg?w=900" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">20Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Fruit Juice
</button>
</div>

<div className="food-card flex flex-col  bg-red-500/10 rounded-xl cursor-pointer items-center p-2">
<div className="relative mb-3">
    <img src="https://img.freepik.com/free-photo/prepared-unhealthy-pile-delicious-food_1339-25.jpg?t=st=1709467156~exp=1709470756~hmac=ed580aff97bbfe259c61fd9413e95db4acdc67cd095c8f32ff1c4be7aa282477&w=996" alt="" />
   <div className="absolute top-2 left-2">
      </div>
   <div className="absolute bottom-2 right-2">
     <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e]
      cursor-pointer p-3 h-14 w-14 text-x1 font-bold rounded-full relative">
        <div className="absolute text-x1 top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 ">10Rs</div>
      </button>
   </div>
</div>
<div className="flex gap-4 items-center">
<div className="flex text-sm space-x-2 cursor-pointer">
</div>
</div>
<button className="bg-[#f54748] active:scale-90 transition duration-150
 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium Itext-white">Snacks
</button>
</div>


</div>
</div>
</div>

)
}


export default SpecialFoods
import React from 'react';
import logo from "../assets/nav-logo.svg"
const Footer = () => {
    return (
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
        
              <img src={logo} alt="" className='h-14 cursor-pointer ' />
              <p>FoodHunt MessManage.<br/>Providing reliable food and satisfaction</p>
                  
            
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                 
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                          <a href="#SpecialFoods" class="hover:no-underline hover:text-red-500">Special Foods</a>
                      </li>
                      <li class="mb-4">
                          <a href="#RecomFoods" class="hover:no-underline hover:text-red-500">Recommended Foods</a>
                      </li>
                      <li>
                          <a href="#NewFoods" class="hover:no-underline hover:text-red-500">New Foods</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                          <a href="" class="hover:no-underline hover:text-red-500 ">Home</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:no-underline hover:text-red-500 ">About Us</a>
                      </li>
                      <li>
                          <a href="" class="hover:no-underline hover:text-red-500">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                          <a href="#" class="hover:no-underline hover:text-red-500">Legacy</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:no-underline hover:text-red-500">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:no-underline hover:text-red-500">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
     
   
    </div>
</footer>

     
    );
};

export default Footer
import React from 'react'
import header from '../assets/homePageLogo.png'
import AdCard from './AdCard';
const Header = () => {
    return (
        <div className="py-2 px-10 sm:px-4 md:px-6 lg:px-3 -z-10 ">
            <div className="container mx-auto py-[4vh] -z-10 m-10">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center -z-10">
                    <div className="lg:w-[32rem] w-full flex flex-col space-y-6 -z-10">
                        <div className="text-4x1 md:text-5xl font-bold text-[#2e2e2e lg:text-6x1] -z-10">
                            We are <span className="text-[#f54748] -z-10">
                                Serious
                            </span> For <span className="text-[#f54748] -z-10">Food</span> & <span className="text-[#fdc55e]">Delivery .</span>
                        </div>
                        <div className="lg:text-xl text-[#191919] md:text-lg text-base -z-10">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s.

                        </div>

                       

                    </div>
                    <img src={header} alt="" className='h-[28rem] mx-auto justify-end -z-10' />

                </div>
            </div>
            <AdCard />
        </div>
    )

}
export default Header
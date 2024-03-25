import React from "react";
import homePng from "../Svg/Green Collage Daily Favorite Food Youtube Banner (3).png"
import Header from './Header'
import RecommendedFood from './RecommandedFood'
import Service from './Service'
import NewFoods from './NewFoods'
import Services2 from './Services2'
import SpecialFoods from './SpecialFoods'

const Home = () => {
  return (
  <>
  {/* <div className="  ">
    <img className="max-h-[80vh] min-w-[80%] m-auto " src={homePng} alt="" />
  </div> */}

  {/* <h1 className="">Eat Healthy,</h1>
  <h1>Stay Healthy</h1> */}
  {/* <div className="min-h-screen bg-lime-300">Home</div>; */}
            <Header/>
            <RecommendedFood/>
            <Service/>
            <NewFoods/>
            <Services2/>
            <SpecialFoods/>
  </>
)};

export default Home;

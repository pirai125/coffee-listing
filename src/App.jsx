import React from "react";
import data from './data';
import star from './assets/img/Star.svg'
import starfill from './assets/img/Star_fill.svg' 
import vector from "./assets/img/vector.svg"
import Allproducts from "./Allproducts";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Availableproducts from "./Avilableproducts";
import cafe from"./assets/img/bg-cafe.jpg"


export default function App() {

  const datainfo = data

  return (
    <>
    <div className="bg-black w-full h-full px-10 py-4" style={{
      backgroundImage:`url(${cafe})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"top",
      objectFit:"contain"
    }}>

    <div className="font-dm_sans mt-12 bg-shadeblack w-fit box-border rounded-2xl">

      
      <div className="flex justify-center items-center flex-col w-full sm:px-40 px-8 mx-auto box-border" >
        <h1 className="text-3xl text-white font-bold py-4">Our Collection</h1>
        <p className="text-center text-lg font-semibold text-grey py-2">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>

      <div className="mx-auto w-fit box-border my-1 ">
        <ul className="flex">
        <li className="text-white mx-2 bg-grey py-2 px-3 rounded-lg" ><Link to="/">All Products</Link></li>
        <li className="text-white mx-2 bg-grey py-2 px-3 rounded-lg" ><Link to="/about">Available Now</Link></li>
        </ul>
      </div >
    

      <Routes>
          <Route path="/" element={<Allproducts data={datainfo} star={star} starfill={starfill}   /> } />
          <Route path="/about" element={ <Availableproducts  data={datainfo} star={star} starfill={starfill}/> } />
        </Routes>
    
    </div>
    </div>
</>
  );
}

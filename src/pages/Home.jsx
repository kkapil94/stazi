import React, { useContext, useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";
import cars from "../cars.json";
import { context } from "../App";
import { useParams } from "react-router-dom";

export default function Home() {
  const {search,page,setPage} = useContext(context)
  const carsArray = () => (
    cars.filter((car)=>(search.toLowerCase()==''?car:car.name.toLowerCase().includes(search)))
  )
  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-3 justify-items-center space-y-4">
          {(carsArray().length>6?carsArray().slice((page - 1) * 6, page * 6):carsArray()).map((car) => (
            <CarCard car={car} key={car.id}/>
          ))}
        </div>
      </div>
     { Math.ceil(carsArray().length/6)>1&&<Pagination
        totalCars={cars.length}
        page={page}
        setPage={(page) => setPage(page)}
      />}
    </>
  );
}

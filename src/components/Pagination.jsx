import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Pagination({totalCars, setPage}) {
    const navigate = useNavigate();
    const {page}  = useParams()
    console.log(page);
  return (
    <>
    <div className="p-4">
        <div className="rounded-xl flex  items-center justify-between shadow-md h-16 p-4 border-[1px] border-solid border-slate-100">
            <div>
                <span>{`${Math.ceil(totalCars/6)==page?totalCars:page*6} from ${totalCars}`}</span>
            </div>
           <div className="flex space-x-4">
                <button className="w-6 h-6 rounded-lg bg-blue-50 p-1 disabled:opacity-50" disabled={page==1&&true} onClick={()=>{navigate(`/page/${page-1}`);setPage(page-1)}}><img className="w-[.85rem]" src="/back.svg" alt="" /></button>
                {[...Array(Math.ceil(totalCars/6))].map((_,i)=>(
                    <button key={i} onClick={()=>{navigate(`/page/${i+1}`);setPage(i+1)}} className="w-6 h-6 rounded-lg bg-blue-50 text-sm text-slate-600 font-semibold">{i+1}</button>
                ))}
                <button className="w-6 h-6 rounded-lg bg-blue-50 p-1 disabled:opacity-50" disabled={Math.ceil(totalCars/6)==page&&true} onClick={()=>{navigate(`/page/${parseInt(page,10)+1}`);setPage(parseInt(page,10)+1)}}><img className="w-[.85rem]" src="/next.svg" alt="" /></button>
            </div>
        </div>
    </div>
      
    </>
  );
}

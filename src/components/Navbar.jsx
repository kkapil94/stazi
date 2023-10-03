import React, { useContext, useState } from 'react'
import { context } from '../App'

export default function Navbar() {
    const {search,setSearch} = useContext(context)
  return (
    <>
        <div className='p-4 '>
            <nav className='rounded-xl flex items-center shadow-md h-16 p-4 border-[1px] border-solid border-slate-100'>
                <div className='flex items-center space-x-8'>
                    <form className='flex ' onSubmit={(e)=>e.preventDefault()}>
                        <input className='bg-blue-50 h-8 rounded-l-2xl outline-none p-4' type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        <button type='submit' className='bg-blue-50 rounded-r-3xl pr-2'><img src="/search.svg" alt="" /></button>
                    </form>
                    <div className='flex space-x-4'>
                        <span className='flex'>Relevance <img src="/more.svg" alt="" /></span>
                        <span className='flex'>All Brands <img src="/more.svg" alt="" /></span>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

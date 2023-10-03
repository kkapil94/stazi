import React from 'react'

export default function CarCard({car}) {
    const {images,name,launch_year,seating_capacity,fuel_type,mileage,transmission_type,price} = car
  return (
    <>
        <div className='w-80 border-solid border-[1px] border-slate-400 rounded-lg bg-blue-50'>
            <div className='p-2'>
                <img className='rounded-xl w-full' src={images} alt="" />
            </div>
            <div className='p-4 pb-2'>
                <div className='flex justify-between'>
                    <span className='text-slate-600 font-semibold'>{name}</span>
                    <span className='border-solid border-[1px] border-slate-4300 rounded-xl w-12 text-sm text-center text-slate-600 font-semibold'>{launch_year}</span>
                </div>
                <div className='flex flex-wrap mt-4 mb-1 h-16'>
                    <span className='w-6/12 text-slate-600 font-medium text-sm'><img className='inline w-5' src="/group.svg" alt="" />{seating_capacity}people</span>
                    <span className='w-6/12 text-slate-600 font-medium text-sm'><img className='inline w-5' src="/gas.svg" alt="" /> {fuel_type}</span>
                    <span className='w-6/12 text-slate-600 font-medium text-sm'><img className='inline w-5' src="/meter.svg" alt="" /> {mileage}/L</span>
                    <span className='w-6/12 text-slate-600 font-medium text-sm'><img className='inline w-5' src="/steer.svg" alt="" /> {transmission_type}</span>
                </div>
                <div className='h-[1px] w-full bg-slate-200 mb-2'></div>
                <div className='flex justify-between p-2'>
                    <span>{price}/month </span>
                    <div className='flex w-28 justify-between'>
                        <div className='rounded-lg w-6 flex justify-center bg-blue-100 hover:cursor-pointer'>
                            <img className='w-4' src="/save.svg" alt="" />
                        </div>
                        <button className='rounded-lg w-20 text-xs bg-blue-600 text-white '>Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import PropertyCard from '../components/PropertyCard'
import { property } from '../components/export'


const Properties = () => {
  return (
    <section className='lg:px-[150px] py-20 mb-20 px-10 '>
    <div className='flex flex-col gap-3'> 
      <div className='flex flex-col items-start gap-4'>
        <p className='text-red-500 text-2xl '>PROPERTIES</p>
        <h1 className='text-4xl font-semibold max-w-[400px]'>Explore The Latest Properties Available</h1>
      </div>
      <div className=' grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
          {property.map((prop) =>(
            <PropertyCard imgURL={prop.images} address={prop.address} name={prop.name} owner={prop.owner} price={prop.price} about={prop.about} bed={prop.bed} area={prop.area} bath={prop.bath} {...property} />
          ))}
      </div>
      
    </div>
    </section>
  )
}

export default Properties

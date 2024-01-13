import React from 'react'
import Cards from './Cards'
import JsonData from '@/Data'
let edlServices=JsonData.Services


function Services() {
  return (
    <div className='py-3 h-[100vh] max-sm:h-auto'>
        <div className='mt-[6rem]'>

        <h2 className='text-5xl font-bold py-2 text-center'>Igniting Digital Brilliance</h2>
        <p className='text-center text-slate-500'>Igniting brilliance in every digital endeavor. Innovate with us.</p>
        </div>
        <div className='card flex flex-wrap m-4 justify-center items-center'>
            {
                edlServices.map((item)=>(<Cards btnProps="py-2 px-3 rounded-xl bg-orange-500 active:bg-orange-400 transition duration-200 text-white" btnName="Hire Us" icon={item.icon} title={item.title} desc={item.desc} />))

            }

          
          
        </div>

      </div>
  )
}

export default Services
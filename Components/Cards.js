import React from 'react'


function Cards(props) {
    let {icon,title,desc}=props
  return (
    <>
    <div className='min-h-[15rem]  bg-slate-100 shadow-2xl rounded-xl p-4 sm:w-full md:w-1/4 ' >
        <div className='mx-auto]'>{icon}
</div>
        <div >
            <h2 className='text-2xl'>{title}</h2>
            <p className='text-sm py-2'>{desc}</p>
        </div>


    </div>
    </>
  )
}


export default Cards
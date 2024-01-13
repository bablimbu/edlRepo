import React from 'react'


function Cards(props) {
    let {icon,title,desc,btnProps,btnName}=props
  return (
    <>
    <div className=' bg-slate-100 shadow-2xl rounded-xl p-4 sm:w-full md:w-1/4 w-full my-2 mx-2' >
        <div className='mx-auto]'>{icon}
</div>
        <div className='' >
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-sm py-2 text-slate-600    '>{desc}</p>
        
        <div className=''>
<button className={`${btnProps} mt-4`}>{btnName} </button>

        </div>
        </div>
        
    



    </div>
    </>
  )
}


export default Cards
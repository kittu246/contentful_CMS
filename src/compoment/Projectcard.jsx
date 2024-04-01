import React from 'react'

const Projectcard = ({project}) => {

    const {url,img,title} = project;

    console.log(img)
  return (
    <a href={url} target='_blank' className='h-80 w-96 flex flex-col gap:8 hover:scale-105 ' >
        <img src={img} alt='projectSnapsort' className='  object-cover h-full w-full ' />
        <div className='bg-slate-300 p-2'>
        <h5 className=' font-medium  capitalize text-center'>{title}</h5>
        </div>
        
        
    </a>
  )
}

export default Projectcard
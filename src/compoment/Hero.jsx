import React from 'react'
import heroImage from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='m-8'>
        <div className='px-8 flex gap-8 items-center'>
            <div className='flex-1 '>
                <h1 className='capitalize font-bold text-4xl py-8 text-center'>Contentful CMS</h1>
                <p className='text-gray-500 text-justify'>
                     Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. At sequi soluta itaque   
                     laudantium dignissimos dicta maiores sint 
                     impedit ratione deleniti perspiciatis consequatur 
                     possimus modi magnam temporibus, reiciendis molestiae 
                     eius vel dolores veritatis necessitatibus tenetur labore 
                     nemo? Sapiente officiis veritatis ut laborum pariatur!
                </p>

            </div>
            <div className='flex-1 h-60'>
                <img  className='h-full w-full object-contain' src={heroImage} alt='women with server'/>


            </div>

        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image'

export const Testimonial = () => {
  return (
    <div>
        <div className='container pt-16 pb-16 grid-cols-2'>
            <h2 className='font-medium text-2xl pb-4 '>Testimonials</h2>
                <div className="grid lg:grid-cols-[300px , 1fr] gap-4">
                    <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0 ">
                        <div className="text-center flex flex-col items-center gap-1">
                            <Image 
                            className="rounded-full inline-block"
                            src = "/user.jpg"
                            width={80}
                            height={80}
                            alt="user" 
                            />
                            <h2 className="text-gray-500 font-black text-[30px]">Elsa Doe</h2>
                            <p>CEO & FOUNDER</p>
                            <Image 
                            className="rounded-full inline-block"
                            src = "/user.jpg"
                            width={30}
                            height={30}
                            alt="quotes" 
                            />
                            <p className="max-w-[200px] text-gray-500 "> Lorem ipsum dolor sit amet 
                            consectetur adipisici</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

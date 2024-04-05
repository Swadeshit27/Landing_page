import React from 'react'
import { MdExpandLess } from 'react-icons/md'
import Img1 from "../../assets/card-img-1.jpeg"

const Stories: React.FC = () => {
    return (
        <>
            <div className='w-full max-w-sm max-sm:mx-auto h-full border shadow-md rounded-lg overflow-hidden'>
                <div className='w-full h-48 bg-gray-50'>
                    <img src={Img1} alt="image-card" />
                </div>
                <div className='p-4'>
                    <p className='text-blue-600 uppercase text-sm mb-2'>Customer Story</p>
                    <h1 className='text-gray-900 line-clamp-3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto dicta corrupti. Magni minima repudiandae rem inventore tenetur. Iusto sapiente saepe vitae eveniet!</h1>
                    <button className='text-blue-600 flex items-center'>
                        Read now
                        <MdExpandLess size={20} className=' rotate-90' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Stories 

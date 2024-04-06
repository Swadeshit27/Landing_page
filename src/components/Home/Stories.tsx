import React from 'react'
import { MdExpandLess } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Stories: React.FC<StoriesType> = ({ path, title, subtitle, imgSrc }) => {
    return (
        <>
            <div className='w-full max-w-sm max-sm:mx-auto h-full border shadow-md rounded-lg overflow-hidden'>
                <div className='w-full h-auto'>
                    <img src={imgSrc} alt="image-card" className='w-full h-auto object-contain' />
                </div>
                <div className='p-4'>
                    <p className='text-blue-600 uppercase text-sm mb-2'>{subtitle}</p>
                    <h1 className='text-gray-900 mb-4'>{title}</h1>
                    <Link to={path}>
                        <button className='text-blue-600 flex items-center'>
                            Read now
                            <MdExpandLess size={20} className=' rotate-90' />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Stories 

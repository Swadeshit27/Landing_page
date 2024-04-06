import React from 'react'

type props = {
    percentage: string;
    title: string;
}

const Features: React.FC<props> = ({ percentage, title }) => {
    return (
        <>
            <div className='p-4 md:p-8 w-full min-h-32 mlg:h-60 flex flex-col max-sm:border-b sm:border-r border-gray-300'>
                <h1 className='text-3xl sm:text-4xl mlg:text-5xl font-bold text-gray-950 mb-4 '>{percentage}</h1>
                <p className=' mlg:text-lg text-gray-600 mlg:leading-loose'>{title}</p>
            </div>
        </>
    )
}

export default Features 

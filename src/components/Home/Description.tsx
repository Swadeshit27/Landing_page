import React from 'react'

type props = {
    imgSrc: string;
    subtitle?: string;
    title: string;
    details: string;
    isRevers?: boolean;
    className?: string;
}

const Description: React.FC<props> = ({ imgSrc, subtitle, title, details, className, isRevers = false }) => {
    return (
        <section className='w-full h-auto py-6 md:py-8 max-w-screen-xl mx-auto px-4 sm:px-8 grid sm:grid-cols-2 gap-x-8 lg:gap-x-16 place-items-center'>
            {
                isRevers && <div className='max-sm:order-1'>
                    <img src={imgSrc} alt="body-image" className={`${className} w-full xs:w-3/4 sm:w-full mx-auto max-sm:mb-4 h-auto object-contain `} />
                </div>
            }
            <div className='max-sm:order-2'>
                <p className=' uppercase text-sm text-blue-600'>{subtitle}</p>
                <h1 className='text-xl lg:text-2xl font-semibold text-gray-950 my-2.5 lg:my-4'>{title}</h1>
                <p className='text-sm lg:text-base text-gray-600'>{details}</p>
            </div>
            {
                !isRevers &&
                <div className='max-sm:order-1'>
                    <img src={imgSrc} alt="body-image" className={className} />
                </div>
            }
        </section>
    )
}

export default Description 

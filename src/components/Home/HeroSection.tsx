import React from 'react'
import Header from "../../assets/header.png"

const HeroSection: React.FC = () => {
    return (
        <section className='w-full h-auto bg-[#180054]'>
            <div className='w-full h-full max-w-screen-xl mx-auto px-4 sm:px-8 py-8 md:py-16 flex items-center justify-between max-md:flex-col '>
                <div className='md:w-2/5 max-md:order-2 '>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-snug xl:leading-tight font-bold text-white mb-3 sm:mb-6' >Secure connections, empowered teams</h1>
                    <p className='sm:text-lg text-[#d4d4d4]'>Bring your teams together in a centrally-managed ecosystem with complete oversight and visibility</p>
                    <button className='btn w-48 mt-6'>Contact sales</button>
                </div>
                <div className='md:w-1/2 max-md:order-1 max-md:mb-8 '>
                    <img src={Header}alt="header" className='' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection 

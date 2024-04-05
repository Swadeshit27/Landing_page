import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import Apple from "../assets/appstore.png"
import Google from "../assets/google-play.png"
import { FooterItems } from '../utils/FooterItems'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <section className='w-full min-h-80'>
            <footer className='w-full max-w-screen-xl p-4 sm:p-8 mx-auto h-full flex max-sm:flex-col justify-between'>
                <div className='sm:w-[35%] lg:w-[30%] max-sm:grid grid-cols-2 gap-x-8 place-items-center'>
                    <div>
                        <div className=' text-2xl sm:text-3xl md:text-4xl font-bold sm:space-y-2 mb-2 sm:mb-4'>
                            <h1>Easy</h1>
                            <h1 className=' text-blue-500'>ahead</h1>
                        </div>
                        <p className='text-gray-600 max-sm:text-sm'>We take the work out of connecting with others so you can accomplish more.</p>
                    </div>
                    <div>
                        <div>
                            <select className='w-full border py-2 px-4 rounded-md border-gray-400 mt-6' >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                        <div className=' sm:w-4/5 grid grid-cols-2 gap-x-4 my-6'>
                            <img src={Apple} alt="apple" className=' cursor-pointer' />
                            <img src={Google} alt="google" className=' cursor-pointer' />
                        </div>
                        <div className='text-gray-950 text-xl flex items-center space-x-4'>
                            <FaTwitter cursor={'pointer'} />
                            <FaFacebookF cursor={'pointer'} />
                            <FaInstagram cursor={'pointer'} />
                            <FaLinkedinIn cursor={'pointer'} />
                            <FaYoutube cursor={'pointer'} />
                        </div>
                    </div>
                </div>
                <div className=' lg:w-3/5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-sm:mt-8'>
                    {
                        FooterItems.map(item => (
                            <div key={item.title}>
                                <h1 className='sm:text-lg font-semibold text-gray-950 mb-2' >{item.title}</h1>
                                <ul className=''>
                                    {item.items.map(ele => (
                                        <li className='text-xs sm:text-sm text-gray-600 mb-2' key={ele.name} >
                                            <Link to={ele.path}>
                                                {ele.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </footer>
            <div className='w-full max-w-screen-xl mx-auto p-4 sm:p-8 pt-0 text-gray-600 flex  max-xs:flex-col items-center justify-between text-xs sm:text-sm'>
                <p className='max-xs:order-2'>Copyright Calendly 2022</p>
                <div className='flex items-center  xs:space-x-2 max-xs:order-1 max-xs:mb-3'>
                    <Link to={'/'}>Privacy</Link>
                    <span className='mx-2'>/</span>
                    <Link to={'/'}>Terms and Conditions</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer 

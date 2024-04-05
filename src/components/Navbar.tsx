import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { navItems } from '../utils/NavItems'
import { MdExpandLess, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'


const Navbar: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <section className='w-full h-20 bg-white text-gray-700 border-b'>
            <nav className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between'>
                <Link to={'/'}>
                    <img src={Logo} alt="logo" className='w-32 xs:w-44 cursor-pointer object-contain' />
                </Link>
                <ul className=' hidden lg:flex items-center justify-center space-x-6 font-medium'>
                    {
                        navItems.map(item => (
                            <Link to={item.path} key={item.name} >
                                <li className='flex items-center space-x-2 cursor-pointer'>
                                    {item.name}
                                    {item?.dropdown && <MdExpandLess size={20} className=' rotate-180' />}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <div className='space-x-6 font-medium flex items-center'>
                    <button className='max-xl:hidden'>Login</button>
                    <button className='btn max-xs:hidden'>Get started</button>
                    <button className='text-3xl text-gray-800 lg:hidden' onClick={() => setShow(true)}>
                        <MdMenu />
                    </button>
                </div>
                {show && <div className='lg:hidden w-full h-screen fixed top-0 left-0 bg-[#0000008c] z-[999]'>
                    <div className='w-full max-w-sm h-full bg-white z-[999] '>
                        <div className='px-8 py-4 flex items-center justify-between'>
                            <img src={Logo} alt="logo" className='w-44 cursor-pointer object-contain' />
                            <button className='text-2xl text-gray-800' onClick={() => setShow(false)} >
                                <RxCross1 />
                            </button>
                        </div>
                        <div className='p-8 max-w-xs'>
                            <ul className='w-full flex flex-col space-y-2 text-lg font-medium'>
                                {
                                    navItems.map(item => (
                                        <Link to={item.path} key={item.name} >
                                            <li className='flex items-center justify-between space-x-2 cursor-pointer'>
                                                {item.name}
                                                {item?.dropdown && <MdExpandLess size={20} className=' rotate-90' />}
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <div className=' px-8 space-x-8 font-medium flex items-center justify-center'>
                                <button className='xs:btn xs:w-32'>Login</button>
                                <button className='btn xs:hidden'>Get started</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </nav>
        </section>
    )
}

export default Navbar

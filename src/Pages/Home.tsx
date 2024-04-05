import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Description from '../components/Home/Description'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img3.png"
import Stories from '../components/Home/Stories'

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <section className='w-full h-auto px-4 sm:px-8 py-8 md:py-16 '>
                <div className='sm:w-3/4 lg:w-1/2 mx-auto'>
                    <h1 className='header'>Work faster, smarter and more securely</h1>
                    <p className='text-gray-600 text-center max-xs:text-sm'>sales, Customer Success, Support, Recruiting  and Marketing teams rely on scheduling platforms to save time and quickly connect with customers</p>
                </div>
            </section>
            <section className='w-full h-auto py-8 md:py-16 bg-blue-50'>
                <div className='w-full max-w-screen-xl px-4 sm:px-8 mx-auto grid sm:grid-cols-3'>
                    <div className='p-4 md:p-8 w-full min-h-32 mlg:h-60 flex flex-col max-sm:border-b sm:border-r border-gray-300'>
                        <h1 className='text-3xl sm:text-4xl mlg:text-5xl font-bold text-gray-950 mb-4 '>75%</h1>
                        <p className=' mlg:text-lg text-gray-600 mlg:leading-loose'>reduction in time to schedule customer success calls</p>
                    </div>
                    <div className='p-4 md:p-8 w-full min-h-32 mlg:h-60 flex flex-col max-sm:border-b sm:border-r border-gray-300'>
                        <h1 className='text-3xl sm:text-4xl mlg:text-5xl font-bold text-gray-950 mb-4 '>75%</h1>
                        <p className=' mlg:text-lg text-gray-600 mlg:leading-loose'>reduction in time to schedule customer success calls</p>
                    </div>
                    <div className='p-4 md:p-8 w-full min-h-32 mlg:h-60 flex flex-col  border-gray-300'>
                        <h1 className='text-3xl sm:text-4xl mlg:text-5xl font-bold text-gray-950 mb-4 '>75%</h1>
                        <p className=' mlg:text-lg text-gray-600 mlg:leading-loose'>reduction in time to schedule customer success calls</p>
                    </div>
                </div>
            </section>
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
            />
            <div className='bg-gray-50'>
                <Description
                    title='Retail control as your team scales'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                    imgSrc={Img2}
                    isRevers={true}
                    className='w-full h-[25rem] object-contain'
                />
            </div>
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
            />
            <section className='w-full max-w-xl px-4 sm:px-8 mx-auto py-8 md:py-16 flex flex-col items-center'>
                <p className='subpara'>Calendly features</p>
                <h1 className='header'>Favorite Security Features</h1>
                <p className='para'>Here's a closer look at some of the security features It admins enjoy with Calendly</p>
                <div className='mt-6 space-x-6'>
                    <button className='btn xs:w-40 sm:w-44'>Start for free</button>
                    <button className='btn xs:w-40 sm:w-44 bg-white border-2 border-gray-950 text-black'>Learn more</button>
                </div>
            </section>
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
                isRevers={true}
            />
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
            />
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
                isRevers={true}
            />
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
            />
            <section className='w-full max-w-screen-xl px-4 sm:px-8 mx-auto py-8 md:py-16'>
                <div className='w-full max-w-xl mx-auto mb-12'>
                    <p className='subpara'>Success stories</p>
                    <h1 className='header'>Do more of what you do best</h1>
                    <p className='para'>Eliminate scheduling hassles and interruptions so your organization accomplishes more.</p>
                </div>
                <div className='w-full min-h-[23rem] grid sm:grid-cols-2 mlg:grid-cols-3 gap-8'>
                    <Stories />
                    <Stories />
                    <Stories />
                </div>
            </section>
            <section className='w-full h-auto bg-blue-950 px-4 sm:px-8 py-8 md:py-16 mb-8 md:mb-16'>
                <div className='w-full max-w-xl mx-auto flex flex-col items-center'>
                    <h1 className='text-3xl xs:text-4xl lg:text-5xl leading-tight text-center font-bold text-white mb-3 sm:mb-6' >Secure connections, empowered teams</h1>
                    <p className='max-xs:text-sm sm:text-lg font-light text-[#d4d4d4] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos veniam fuga. Aliquam deserunt autem esse vel laborum voluptas, atque quos est exercitationem ipsum temporibus iste in cupiditate aut doloribus?</p>
                    <button className='btn bg-transparent text-white border-2 border-white  w-48 mt-8'>Talk with sales</button>
                </div>
            </section>
        </>
    )
}

export default Home 

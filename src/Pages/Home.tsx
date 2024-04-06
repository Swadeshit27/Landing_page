import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Description from '../components/Home/Description'
import Stories from '../components/Home/Stories'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img3.png"
import Img3 from "../assets/home-img2.jpeg"
import Img4 from "../assets/home-img-3.jpeg"
import Img5 from "../assets/home-img-4.jpeg"
import Img6 from "../assets/home-img-5.jpeg"
import Img7 from "../assets/home-img-6.jpeg"
import { StoriesList } from '../utils/Stories'
import Features from '../components/Home/Features'

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <section className='w-full h-auto px-4 sm:px-8 py-8 md:py-16 '>
                <div className='w-full max-w-xl mx-auto'>
                    <h1 className='header'>Work faster, smarter and more securely</h1>
                    <p className='text-gray-600 text-center max-xs:text-sm'>sales, Customer Success, Support, Recruiting  and Marketing teams rely on scheduling platforms to save time and quickly connect with customers</p>
                </div>
            </section>
            <section className='w-full h-auto py-8 md:py-16 bg-blue-50'>
                <div className='w-full max-w-screen-xl px-4 sm:px-8 mx-auto grid sm:grid-cols-3'>
                    <Features percentage='75%' title='reduction in time to schedule customer success calls'/>
                    <Features percentage='200%' title='increase in connections between sales and customer leads'/>
                    <Features percentage='200%' title='more customer onboarded per month'/>
                </div>
            </section>
            <Description
                title='Retail control as your team scales'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img1}
            />
            <div className='bg-gray-50'>
                <Description
                    title='Automate IT workflows to accomplish more'
                    details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                    imgSrc={Img2}
                    isRevers={true}
                    className='w-full h-[25rem] object-contain'
                />
            </div>
            <Description
                title='Get more value from your existing technology'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img3}
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
                subtitle='user pII data deletion'
                title='Maintain GDPR compliances'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img4}
                isRevers={true}
            />
            <Description
                subtitle='user groups'
                title='Save time with group admins'
                details='Delegate specific team members with group admin privileges to manage users, processes and other account settings.' 
                imgSrc={Img5}
            />
            <Description
                subtitle='single sing-on(sso)'
                title='Reduce risk with secure authentication'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img6}
                isRevers={true}
            />
            <Description
                subtitle='scim provisioning '
                title='Manage user access at scale'
                details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nostrum tenetur? Omnis magni rem aut quis eius maiores beatae quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, enim!'
                imgSrc={Img7}
            />
            <section className='w-full max-w-screen-xl px-4 sm:px-8 mx-auto py-8 md:py-16'>
                <div className='w-full max-w-xl mx-auto mb-12'>
                    <p className='subpara'>Success stories</p>
                    <h1 className='header'>Do more of what you do best</h1>
                    <p className='para'>Eliminate scheduling hassles and interruptions so your organization accomplishes more.</p>
                </div>
                <div className='w-full min-h-[23rem] grid sm:grid-cols-2 mlg:grid-cols-3 gap-8'>
                    {
                        StoriesList.map(item=><Stories {...item} key={item.id} />)
                   }
                </div>
            </section>
            <section className='w-full h-auto bg-blue-950 px-4 sm:px-8 py-8 md:py-16 mb-8 md:mb-16'>
                <div className='w-full max-w-4xl mx-auto flex flex-col items-center'>
                    <h1 className='text-3xl xs:text-4xl lg:text-5xl leading-tight text-center font-bold text-white mb-3 sm:mb-6' >Secure connections, empowered teams</h1>
                    <p className='max-xs:text-sm sm:text-lg font-light text-[#d4d4d4] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos veniam fuga. Aliquam deserunt autem esse vel laborum voluptas, atque quos est exercitationem ipsum temporibus iste in cupiditate aut doloribus?</p>
                    <button className='btn bg-transparent text-white border-2 border-white  w-48 mt-8'>Talk with sales</button>
                </div>
            </section>
        </>
    )
}

export default Home 

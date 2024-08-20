import React from 'react'
import Link from "next/link";

const Services = () => {
    return (
        <div>
            <div className="">
                <div className="max-w-4xl mx-auto mt-20">
                    <div class="grid grid-cols-3 text-center">
                        <div class="col-span-2">
                            <h2 className='text-3xl font-bold' >PLANNING</h2>
                            <p className='p-10'>Our planning services craft tailored business roadmaps through market research and financial modeling, guiding startups and pivoting businesses for sustainable growth. Partner with us to turn your ideas into a strategically sound plan.</p>
                            <div className='text-center'>
                                <Link href='/main/planning' className='bg-gray-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full btn'>know more</Link>
                            </div>
                        </div>
                        <div class="">
                            <img src="https://institute.careerguide.com/wp-content/uploads/2020/10/3f7d8dedfca501015a14b977312b3df0.gif" alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mt-40">
                    <div class="grid grid-cols-3 text-center">
                        <div class="">
                            <img src="https://cdn.dribbble.com/users/1079204/screenshots/15874903/media/e3e62a6b0761d382cc079cb3f38e4287.gif" alt="" />
                        </div>
                        <div class="col-span-2">
                            <h2 className='text-3xl font-bold'>LAUNCHING</h2>
                            <p className='p-10'>Our launching services propel your business forward, offering expert guidance on locations, marketing, and funding. Partner with us for a seamless and impactful launch, navigating the early stages of your business journey with confidence.</p>
                            <div className="text-center">
                                <Link href='/main/launching' className='bg-gray-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full btn'>know more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mt-40 mb-20">
                    <div class="grid grid-cols-3 text-center">
                        <div class="col-span-2">
                            <h2 className='text-3xl font-bold'>MANAGING</h2>
                            <p className='p-10'>Our managing services drive ongoing success for your business. From seamless operations to strategic growth planning, we provide comprehensive support. Partner with us for efficient management that ensures your business not only survives but thrives.</p>
                            <div className="text-center">
                                <Link href='/main/managing' className='bg-gray-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full btn'>know more</Link>
                            </div>
                        </div>
                        <div class="">
                            <img src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/media/b0b5dddc53e15f8eb666502c9c3cb5d4.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services

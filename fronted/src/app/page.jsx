import React from 'react'
import Link from "next/link";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://specials-images.forbesimg.com/imageserve/5fbbdde049a0953101504db0/0x0.jpg?cropX1=0&cropX2=2000&cropY1=116&cropY2=1242)' }}>
                <div className="hero-overlay backdrop-blur-sm h-screen">
                    <div className="hero-content text-center text-white">
                        <div className="w-full w-96 d-flex content-center">
                            <h1 className="mb-2 text-7xl font-bold my-40">Welcome to</h1>
                            <h1 className="mb-8 text-8xl font-bold">Business <span className='mb-8 text-8xl text-black font-bold'>Incubators</span></h1>
                            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                            <Link href="Services" className="btn w-40  text-white ">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="">
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7 text-black">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Everything you need to deploy your app
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                                pulvinar et feugiat blandit at. In mi viverra elit nunc.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-16">
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                                                <feature.icon className="h-6 w-6 text-white bg-black" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div> */}
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="rounded-lg shadow  m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Flowbite
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">
                                    Licensing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>


        </div>
    )
}

export default Home

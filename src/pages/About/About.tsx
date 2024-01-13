import { motion } from 'framer-motion'

import Person from "@/components/constants/Person/Person"

import { Link } from 'react-router-dom'

function About() {
    return (
        <section className="hero hero-content bg-base-200 ">
            <div className=" flex flex-col lg:flex-row gap-4 ">
                <div>
                    <Person />
                </div>

                <motion.feTurbulence
                    initial={ { y: 400 } }
                    animate={ { y: 0 } }
                    transition={ { type: "spring", duration: 1.8 } }
                    className='card card-bordered dark:border-slate-200 px-10 py-2 space-y-6'>
                    <h1 className='text-3xl font-bold '>About me</h1>
                    <p>
                        The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
                    </p>
                    <h2 className='text-2xl font-bold'>
                        Something else here
                    </h2>
                    <p>
                        Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
                    </p>
                    <br />
                    <p>
                        Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <button className="btn w-fit">
                        <Link to={ '/contact' }>Get in touch</Link>
                    </button>
                </motion.feTurbulence>
            </div>
        </section>
    )
}

export default About
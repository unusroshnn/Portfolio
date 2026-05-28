import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/blog.jpg.png"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg.png"
import P2 from "../assets/p2.jpg.png"
import P3 from "../assets/p3.jpg.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex items-center justify-center'>
    <div className="w-full sm:w-1/2 flex-col justify-center">
        <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hi! I Am</h2>

        <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>
            Unus C
        </h2>

        <img
            src={BlogProfileImage}
            className='w-60 block sm:hidden'
            alt="Unus profile"
        />

        <p className='py-2'>
            A passionate Frontend Developer who loves building modern,
            responsive, and user-friendly websites. I create clean and
            attractive web experiences using React, Tailwind CSS,
            JavaScript, and modern web technologies.
        </p>

        <button className='button-style mt-2'>
            Hire Me
        </button>
    </div>

    <div className='justify-center hidden sm:block'>
        <img
            src={BlogProfileImage}
            className='w-60 md:w-96'
            alt="Unus profile"
        />
    </div>
</div>

<div className='flex justify-evenly py-6'>
    <img src={HTML} alt="HTML" style={{ width: "50px" }} />
    <img src={CSS} alt="CSS" style={{ width: "50px" }} />
    <img src={JS} alt="JavaScript" style={{ width: "50px" }} />
    <img src={REACTICON} alt="React" style={{ width: "50px" }} />
    <img src={DB} alt="Database" style={{ width: "50px" }} />
    <img src={NODE} alt="NodeJS" style={{ width: "50px" }} />
</div>

<div>
    <h2 className='text-center text-5xl my-14 font-bold'>
        Checkout My Live <span className='text-orange-400'>Projects</span> Here
    </h2>

    <div className='flex justify-around my-5 flex-col sm:flex-row'>
        <img
            src={P1}
            className='w-64 border rounded-md cursor-pointer'
            alt="BulkMail Project"
        />

        <img
            src={P2}
            className='w-64 border rounded-md cursor-pointer'
            alt="Netflix Clone"
        />

        <img
            src={P3}
            className='w-64 border rounded-md cursor-pointer'
            alt="Udemy Clone"
        />
    </div>
</div>
            <Footer />
        </div>
    )
}

export default Home
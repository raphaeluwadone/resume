import React, {useState} from 'react'
import Sidebar from '../components/sidebar/Index'
import Navbar from '../components/navbar/Index'
import HeroSection from '../components/HeroSection/Index'
import About from '../components/About/Index'
import Tools from '../components/toolsSection/Index'
import Projects from '../components/Projects/Index'
import Footer from '../components/Footer/Index'


function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <About />
            <Tools />
            <Projects />
            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import Header from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Industries from '../components/Home/Industries'
import About from '../components/Home/About'
import Footer from '../Footer'
import Transform from '../Transform'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Industries />
            <About />
            <Transform />
            <Footer />        
            
        </div>
    )
}

export default Home

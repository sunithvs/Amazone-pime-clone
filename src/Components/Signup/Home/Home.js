import React from 'react'
import './Home.css'

import Header from '../Header/Header';
 import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
//  import Signup from '../Singin and signup/Signup'
function Home() {
    return (
        <div className='home' >
            <Header/>
        <Hero/>
        <Footer/>
        </div>
    )
}

export default Home

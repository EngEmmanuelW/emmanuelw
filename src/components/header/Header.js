import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
/*import Typical from 'react-typical'*/
import { Typewriter } from 'react-simple-typewriter'

import { BsCreditCard2Front } from 'react-icons/bs'
import { BsArrowDownSquare } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container header__container">
                    <h3 className='head__text'> <span className='myworld'>WELCOME TO MY WORLD</span></h3>
                    <h1 className='head__text'>Hi, I'm <span className='head__text--1'>Emmanuel Weredwong</span></h1>
                    <h5 className='typicalh5 text-light '>
                        {""}
                        <br /> {/*<Typical
                            loop={Infinity}
                            steps={[
                                "Frontend Developer", 1000,
                                "Enthusiastic Dev", 1000,
                                "Cross Platform Dev", 1000,
                                "ReactJs Dev", 1000,
                                "Professional Coder", 1000,
                                "Responsive Web Designer", 1000,
                                "Software Developer", 1000,
                            ]}
                        />*/}
                        <Typewriter
                            words={['Frontend Developer', 'Enthusiastic Dev', 'Cross Platform Dev', 'ReactJs Dev', 'Professional Coder', 'Responsive Web Designer', 'Software Developer']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /* onLoopDone={handleDone}
                         onType={handleType}*/
                        />

                    </h5>
                    <CTA />
                    <HeaderSocials />

                    <div className="me">
                        <img src={ME} className='img1' alt="me" />
                    </div>
                    <a href="#contact" className='scroll__down'><BsArrowDownSquare /></a>
                </div>
            </header>
        </>
    )
}

export default Header
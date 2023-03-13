import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'


const Footer = () => {
    return (
        <>
            <footer>
                <a href="#" className='footer__logo'>WE</a>
                <ul className='permalinks'>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    {/*<a href="#services">Services</a>*/}
                    <a href="#portfolio">Portfolio</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact Me</a>
                </ul>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/?stype=lo&jlou=AfeaSJTeEqokx9Y29aqas1KvLSxLMKwfCLU6kZLBaoY2oAX7lji0PrCSEuFXim4hynv39cQ14DPC9J3B1KSm-KWL3_E0ML5zMeDHmpXkZGOOqA&smuh=7410&lh=Ac_6D8xjHbE2F5a6dxo" target='_blank'><FaFacebookF /></a>
                    <a href="https://www.instagram.com/" target='_blank'><FiInstagram /></a>
                    <a href="https://twitter.com/" target='_blank'><IoLogoTwitter /></a>
                    <a href="https://www.linkedin.com/feed/https://linkedin.com" target='_blank'><BsLinkedin /></a>
                    <a href="https://github.com/ " target='_blank'><FaGithub /></a>
                    <a href="https://dribbble.com/" target='_blank'><FiDribbble /></a>
                </div>
                <div className="footer__copyright">
                    <small> &copy;2023 Weredwong Emmanuel. All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}

export default Footer
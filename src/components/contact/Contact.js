import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';


const Contact = () => {

    return (
        <>
            <section id='contact' className='contact'>
                <h5 className='small_pm'>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className='contact__option'>
                            <MdOutlineEmail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>emmanuelw2224@gmail.com</h5>
                            <a href="mailto:emmanuelw2224@gmail.com" target='_blank'>Send a Message</a>
                        </article>
                        <article className='contact__option'>
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messager</h4>
                            <h5>Emma W</h5>
                            <a href="https://m.me/emmalb" target='_blank'>Send a Message</a>
                        </article>
                        <article className='contact__option'>
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>+256-784294428</h5>
                            <a href="https://api.whatsapp.com/send?phone+256784294428" target='_blank'>Let's Chart</a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
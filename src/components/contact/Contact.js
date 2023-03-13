import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset()

        emailjs.sendForm('service_cr545ak', 'template_48kdhay', form.current, 'kkQ1LWWOppo7enSDf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
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
                    {/*END OF CONTACT OPTIONS*/}
                    <form ref={form} onSubmit={sendEmail}>
                        <h5 className='reminder'>Let's Keep In Touch!</h5>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send it!</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
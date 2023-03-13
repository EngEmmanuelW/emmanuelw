import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <>
            <section id='experience' className='experience'>
                <h5>What Skills I Have</h5>
                <h2>Experience</h2>
                <div className=" container experience__container">
                    <div className=" experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>HTML</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>CSS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>JavaScript</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>TailwindCSS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>Bootstrap</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>ReactJS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    {/*END OF FRONT END*/}
                    <div className=" experience__backend">
                        <h3>More Tech Packs</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>SASS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>NPM Script</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>Responsive Web Design</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>Git & Github</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div><h4>NodeJS</h4>
                                    <small className='text-light'>Beginner</small>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience
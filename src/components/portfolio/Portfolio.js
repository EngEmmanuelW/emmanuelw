import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

{/*THE ARRAY*/ }

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Bank Application',
        github: 'https://github.com/EngEmmanuelW/Bank_App',
        demo: 'https://bankapp-emma.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Banking Site ',
        github: 'https://github.com/EngEmmanuelW/Banking_Website',
        demo: 'https://banksitee.netlify.app/'
    },

    {
        id: 3,
        image: IMG3,
        title: 'Work-Out Map',
        github: 'https://github.com/EngEmmanuelW/Food_hub',
        demo: 'https://work-outmap.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Hotel-Site',
        github: 'https://github.com/EngEmmanuelW/Tourist_Site',
        demo: 'https://hotel-siteemma.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Nature Tourist Site',
        github: 'https://github.com/EngEmmanuelW/Nature_Tourist_Site',
        demo: 'https://tourist-site-emma.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Guess My Number',
        github: 'https://github.com/EngEmmanuelW/Guess_My_Number',
        demo: 'https://guessmynumberemma.netlify.app/'
    },
]

const Portfolio = () => {
    return (
        <>
            <section id='portfolio' className='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Projects</h2>
                <div className="container portfolio__container">
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <article key={id} className='portfolio__item'>
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className='btn' target='_blank'>Github</a>
                                        <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                                    </div>
                                </article>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Portfolio
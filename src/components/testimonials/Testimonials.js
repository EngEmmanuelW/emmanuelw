import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [{
    avatar: AVTR1,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni cupiditate tempora! Numquam architecto velit animi similique debitis. Reprehenderit ipsum .'
}

    ,
{
    avatar: AVTR2,
    name: 'Tyalor Greg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni cupiditate tempora! Numquam architecto velit animi similique debitis. Reprehenderit ipsum .'
}

    ,
{
    avatar: AVTR3,
    name: 'Macdonald',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni cupiditate tempora! Numquam architecto velit animi similique debitis. Reprehenderit ipsum .'
}

    ,
{
    avatar: AVTR4,
    name: 'Andy Browswith',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni cupiditate tempora! Numquam architecto velit animi similique debitis. Reprehenderit ipsum .'
},
]


const Testimonials = () => {
    return (
        <>
            <section id='testimonials' className='testimonials'>
                <h5>Review from Engineers</h5>
                <h2>Testimonials</h2>
                <Swiper className="container testimonials__container "
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                >
                    {
                        data.map(({ avatar, name, review }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    className='testimonial' > <div className="client__avatar" > <img src={avatar} />
                                    </div>
                                    <h5> {name}</h5>
                                    <small className='client__review' > {review}</small>
                                </SwiperSlide>)
                        })
                    }
                </Swiper>
            </section>
        </>
    )
}

export default Testimonials
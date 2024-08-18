import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import data from "./slider.json"
import { sliderSettings } from './common'
const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="padding innerwidth r-container">
            <div className="r-head flexcolStart">
                <span className='orangeText'>Best Choice</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButton/>
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="flexcolStart r-card">
                            <img src={card.imageUrl} alt="" />
                        <span className='secondaryText r-price'>
                            <span>{card.price}</span>
                        </span>

                        <span className='primaryText'>{card.name}</span>
                        <span className='primaryText'>{card.description}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}


export default Residencies

const SliderButton = () => {
    const swiper = useSwiper();
    return(
        <div className='r-button'>
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
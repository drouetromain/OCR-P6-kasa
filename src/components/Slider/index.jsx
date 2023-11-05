import React, { useState } from "react"
import PreviousArrow from '../../assets/arrow-left.svg'
import NextArrow from '../../assets/arrow-right.svg'
import '../../assets/style.scss'

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }
  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }
  const totalPages = data.length;
  if (totalPages === 1) {
    return <div className="carousel">
    {data.map((pictures, index) => {
      return <img src={pictures} alt="" key={index} className={ slide === index ? "slide" : "slide slide-hidden" } />
    })}
  </div> 
  }
  return <div className="carousel">
    <img src={PreviousArrow} alt= "Reculer" className="arrow arrow-left" onClick={previousSlide} />
    {data.map((pictures, index) => {
      return <img src={pictures} alt="" key={index} className={ slide === index ? "slide" : "slide slide-hidden" } />
    })}
    <img src={NextArrow} alt= "Reculer" className="arrow arrow-right" onClick={nextSlide}/>
    <span className="paginations">
      {
        
        data.map((_, index) => {
        const page = index + 1;
        const totalPages = data.length;
        if (totalPages === 1) {
            return "";  
        }
        return <span key={index} className={slide === index ? "pagination" : "pagination pagination-inactive"}>{ page }/{totalPages}</span>
      })}
    </span>
  </div>
};
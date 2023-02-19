import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";
import './slider.css'


function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div  className={className}
    onClick={onClick}>
    </div>
  );
}


function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow:false,
    nextArrow: <SampleNextArrow  className="slick-next"/>,
      prevArrow: <SamplePrevArrow  className="slick-prev"/>
  };

  const cardComponents = props.items.map((item, index) => (
    <div key={index} className="card-wrapper">
      <Card
        imgSrc={item.imgSrc}
        title={item.title}
        price={item.price}
        colorVariants={item.colorVariants}
      />
    </div>
  ));

  return (
    <div className="slider-container">
      <div className="slider">
      <h1> Item</h1>
      <Slider {...settings}>{cardComponents}</Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;

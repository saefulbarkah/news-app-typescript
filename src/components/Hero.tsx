import React from "react";
import { Carousel } from "antd";
const Hero = () => {
  return (
    <>
      <Carousel autoplay>
        <div>
          <div className="hero">
            <div className="hero-content">
              <div className="hero-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis illum consequatur, debitis quis consectetur ducimus
                voluptates quibusdam? Exercitationem illum amet cum porro id
                dolorum, fugit nesciunt laboriosam? Autem, suscipit molestiae.
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus reprehenderit dignissimos accusamus libero, odit ex
                quam numquam consectetur, non rem sint! Similique officia
                cupiditate distinctio perspiciatis fugit aliquid accusamus
                inventore.
              </div>
              <div className="hero-info">
                <span>saeful barkah</span>
                <span>|</span>
                <span>29-06-2003</span>
              </div>
            </div>
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="hero-image"
            />
          </div>
        </div>
        <div>
          <div className="hero">
            <div className="hero-content">
              <div className="hero-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis illum consequatur, debitis quis consectetur ducimus
                voluptates quibusdam? Exercitationem illum amet cum porro id
                dolorum, fugit nesciunt laboriosam? Autem, suscipit molestiae.
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus reprehenderit dignissimos accusamus libero, odit ex
                quam numquam consectetur, non rem sint! Similique officia
                cupiditate distinctio perspiciatis fugit aliquid accusamus
                inventore.
              </div>
              <div className="hero-info">
                <span>saeful barkah</span>
                <span>|</span>
                <span>29-06-2003</span>
              </div>
            </div>
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="hero-image"
            />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;

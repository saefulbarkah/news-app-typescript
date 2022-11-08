import React from "react";

interface heroProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const Hero = (props: heroProps) => {
  return (
    <>
      <div>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="hero-info">
              <span>{props.author}</span>
              <span>|</span>
              <span>{props.date}</span>
            </div>
          </div>
          <img src={props.image} alt="" className="hero-image" />
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { Avatar } from "antd";
import { Carousel } from "antd";
import Link from "../components/Link";
import ListNews from "../components/ListNews";
import RightMenu from "../components/RightMenu";
const News = () => {
  return (
    <>
      <Carousel autoplay>
        <Hero
          title={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia nam fugit obcaecati? Voluptates, ea iste eligendi officiis consequatur, accusamus qui cupiditate necessitatibus at labore a nihil, soluta quaerat doloribus?`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia nam fugit obcaecati? Voluptates, ea iste eligendi officiis consequatur, accusamus qui cupiditate necessitatibus at labore a nihil, soluta quaerat doloribus?`}
          author={"saeful barkah"}
          date={"20-06-2003"}
          image={"https://picsum.photos/1920/1080"}
        />
        <Hero
          title={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia nam fugit obcaecati? Voluptates, ea iste eligendi officiis consequatur, accusamus qui cupiditate necessitatibus at labore a nihil, soluta quaerat doloribus?`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia nam fugit obcaecati? Voluptates, ea iste eligendi officiis consequatur, accusamus qui cupiditate necessitatibus at labore a nihil, soluta quaerat doloribus?`}
          author={"saeful barkah"}
          date={"20-06-2003"}
          image={"https://picsum.photos/1920/1080"}
        />
      </Carousel>

      <section>
        <div className="site-layout">
          <Title title="Latest News" />
          <div className="layout-content">
            {/* Latest news */}
            <div className="left-content">
              <ListNews
                author={"Saeful Barkah"}
                title={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus quisquam quidem quibusdam ipsum omnis vero accusantium
                tempora architecto, aspernatur perspiciatis, soluta nam! Error,
                hic. Accusantium officiis modi neque tempora ut!`}
                avatar={"https://joeschmoe.io/api/v1/random"}
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus quisquam quidem quibusdam ipsum omnis vero accusantium
                tempora architecto, aspernatur perspiciatis, soluta nam! Error,
                hic. Accusantium officiis modi neque tempora ut!`}
                published={"20-30-2003"}
                image={"https://picsum.photos/1920/1080"}
                categories={"Computer"}
                url={"news-details"}
              />
            </div>

            {/* right categories */}
            <div className="right-content">
              <RightMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;

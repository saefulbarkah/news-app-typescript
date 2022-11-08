import React from "react";
import { Avatar } from "antd";

const NewsDetail = () => {
  return (
    <>
      <section className="news-details">
        <div className="site-layout">
          <div className="article">
            <div className="author-article">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <span>Saeful Barkah</span>
            </div>
            <div className="title-article">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde cum
              fugiat commodi obcaecati voluptas non, quisquam illum, saepe
              consequatur, ad animi adipisci eum fuga cumque accusantium a neque
              cupiditate ipsa.
            </div>
            <div className="description-artilce">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ducimus vero animi mollitia quos sapiente quas, maiores minus
            </div>
            <div className="image-article">
              <img src="https://picsum.photos/1920/1080" alt="" />
            </div>
            <div className="content-article">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                hic quisquam voluptatem doloribus optio, aliquid nihil, suscipit
                pariatur cumque beatae expedita vero ipsa ipsam facere
                laboriosam cupiditate excepturi quaerat debitis.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                voluptate beatae? Inventore dignissimos error ad itaque
                veritatis unde doloremque accusamus, maiores suscipit est
                consequatur mollitia incidunt animi optio, nam odio.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ut doloribus unde velit, sequi dignissimos sapiente,
                expedita nesciunt error non similique exercitationem laboriosam
                atque nam iusto odit modi vero eligendi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;

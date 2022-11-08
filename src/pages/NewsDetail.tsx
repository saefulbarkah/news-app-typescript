import React from "react";
import { Avatar } from "antd";

const NewsDetail = () => {
  return (
    <>
      <section className="news-details">
        <div className="site-layout">
          <div className="layout-content">
            <div className="article">
              <div className="image-article">
                <img
                  src="https://picsum.photos/1920/1080"
                  alt=""
                  className="img-n"
                />
              </div>
              <div className="news-author">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <div className="news-published">
                  <span>Saeful Barkah</span>
                  <span className="date-news">Jul 26, 2016</span>
                </div>
              </div>
              <div className="news-title">Lorem ?</div>
              <div className="content-article">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit hic quisquam voluptatem doloribus optio, aliquid
                  nihil, suscipit pariatur cumque beatae expedita vero ipsa
                  ipsam facere laboriosam cupiditate excepturi quaerat debitis.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  voluptate beatae? Inventore dignissimos error ad itaque
                  veritatis unde doloremque accusamus, maiores suscipit est
                  consequatur mollitia incidunt animi optio, nam odio.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ut doloribus unde velit, sequi dignissimos
                  sapiente, expedita nesciunt error non similique exercitationem
                  laboriosam atque nam iusto odit modi vero eligendi.
                </p>
              </div>
            </div>
            <div className="other-news">
              <div className="n-content">
                <div className="content-n">
                  <div className="author-n">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <div className="news-published">
                      <span>Saeful Barkah</span>
                      <span className="date-news">Jul 26, 2016</span>
                    </div>
                  </div>
                  <div className="title-n">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam nam commodi amet aliquam dolorum iure sed! Nisi
                    laudantium asperiores excepturi, unde cum enim accusantium
                    quibusdam ipsam voluptate consequatur, beatae voluptates.
                  </div>
                </div>
                <div className="image-n">
                  <div className="image-article">
                    <img
                      src="https://picsum.photos/1920/1080"
                      alt=""
                      className="small"
                    />
                  </div>
                </div>
              </div>
              <div className="n-content">
                <div className="content-n">
                  <div className="author-n">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <div className="news-published">
                      <span>Saeful Barkah</span>
                      <span className="date-news">Jul 26, 2016</span>
                    </div>
                  </div>
                  <div className="title-n">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam nam commodi amet aliquam dolorum iure sed! Nisi
                    laudantium asperiores excepturi, unde cum enim accusantium
                    quibusdam ipsam voluptate consequatur, beatae voluptates.
                  </div>
                </div>
                <div className="image-n">
                  <div className="image-article">
                    <img
                      src="https://picsum.photos/1920/1080"
                      alt=""
                      className="small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;

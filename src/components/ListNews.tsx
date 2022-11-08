import { Avatar } from "antd";
import React from "react";
import Link from "./Link";
interface propsNews {
  author: string;
  title: string;
  avatar: string;
  description: string;
  published: string;
  image: string;
  categories: string;
  url: string;
}
const ListNews = (props: propsNews) => {
  return (
    <>
      <div className="news">
        <div className="content-article">
          <div className="author-article">
            <Avatar src={props.avatar} />
            <span>Saeful Barkah</span>
          </div>
          <div className="title-article">
            <Link name={props.title} url={props.url} className={"title-link"} />
          </div>
          <div className="description-article">{props.description}</div>
          <div className="published-at">
            <span>{props.published}</span>
            <span className="badge">{props.categories}</span>
          </div>
        </div>
        <div className="image-article">
          <img src={props.image} className="img-news" alt="" />
        </div>
      </div>
    </>
  );
};

export default ListNews;

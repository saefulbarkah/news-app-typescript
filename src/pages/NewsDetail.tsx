import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { revert, TITLECASE_TRANSFORMER } from "url-slug";
import urlSlug from "url-slug";
import Link from "../components/Link";

type getParams = {
  title: string;
};

const getFulldate = (value: any) => {
  const date = new Date(value);
  let year = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return year;
};

const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const [getTitle, setTitle] = useState();
  const param = useParams() as any;

  const handleTitle = () => {
    const title = revert(param.title, {
      separator: "-",
      transformer: false,
    }) as any;
    setTitle(title);
  };

  // fetch all article
  useEffect(() => {
    const fetchApi = async () => {
      const api_key = "276b79c365744ddfbeb9f8cd606e39b3";
      const api_url = `https://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${api_key}`;
      await axios
        .get(api_url)
        .then((res) => {
          const data = res.data;
          setArticle(data.articles);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApi();
  }, []);

  // fetch article by title in params url
  useEffect(() => {
    const fetchByTitle = async () => {
      const api_key = "276b79c365744ddfbeb9f8cd606e39b3";
      const api_url = `https://newsapi.org/v2/top-headlines?q=${getTitle}&country=id&apiKey=${api_key}`;
      await axios
        .get(api_url)
        .then((res) => {
          const data = res.data;
          setNews(data.articles);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchByTitle();
    console.log(getTitle);
  }, [getTitle]);
  return (
    <>
      <section className="news-details">
        <div className="site-layout">
          <div className="layout-content">
            <div className="article">
              {news.map((item, index) => (
                <>
                  <div className="image-article">
                    <img src={item["urlToImage"]} alt="" className="img-n" />
                  </div>
                  <div className="news-author">
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <div className="news-published">
                      <span>{item["author"]}</span>
                      <span className="date-news">
                        {getFulldate(item["publishedAt"])}
                      </span>
                    </div>
                  </div>
                  <div className="news-title">{item["title"]}</div>
                  <div className="content-article">{`${item["content"]}`}</div>
                </>
              ))}
            </div>
            <div className="other-news">
              {article.map((item, index) => (
                <div className="n-content">
                  <div className="content-n">
                    <div className="author-n">
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      <div className="news-published">
                        <span>{item["author"]}</span>
                        <span className="date-news">
                          {getFulldate(item["publishedAt"])}
                        </span>
                      </div>
                    </div>
                    <div className="title-n" onClick={() => handleTitle()}>
                      <Link
                        url={`/news-details/title=${urlSlug(item["title"])}`}
                        className={"title-link"}
                        name={item["title"]}
                      />
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;

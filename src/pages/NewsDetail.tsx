import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import urlSlug from "url-slug";
import { revert, TITLECASE_TRANSFORMER } from "url-slug";

const getFulldate = (value: any) => {
  const date = new Date(value);
  let year = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return year;
};

const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const { title } = useParams() as any;
  const [getTitle, setTitle] = useState(
    revert(title, {
      separator: "-",
    }) as any
  );

  const handleArticle = () => {
    const newTitle = revert(title, {
      separator: "-",
      transformer: TITLECASE_TRANSFORMER,
    }) as any;
    setTitle(newTitle);
  };
  // fetch all article
  useEffect(() => {
    const fetchApi = async () => {
      const api_key = "0591150fb14a482192b94f0e60ccede3";
      const api_url = `https://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${api_key}`;
      await axios
        .get(api_url)
        .then((res) => {
          const data = res.data;
          setArticle(data.articles);
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
      const newTitle = revert(title, {
        separator: "-",
      }) as any;
      setTitle(newTitle);
      const api_key = "0591150fb14a482192b94f0e60ccede3";
      const api_url = `https://newsapi.org/v2/top-headlines?q=${getTitle}&country=id&apiKey=${api_key}`;
      await axios
        .get(api_url)
        .then((res) => {
          const data = res.data;
          setNews(data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchByTitle();
  }, [getTitle]);
  return (
    <>
      <section className="news-details">
        <div className="site-layout">
          <div className="layout-content">
            <div className="article">
              {news.map((item, index) => (
                <React.Fragment key={index}>
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
                </React.Fragment>
              ))}
            </div>
            <div className="other-news">
              {article.map((item, index) => (
                <div className="n-content" key={index}>
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
                    <div className="title-n">
                      <NavLink
                        to={`/news-details/${urlSlug(item["title"])}`}
                        className={"title-link"}
                        onClick={() => handleArticle()}
                      >
                        {item["title"]}
                      </NavLink>
                    </div>
                  </div>
                  <div className="image-n">
                    <div className="image-article">
                      <img src={item["urlToImage"]} alt="" className="small" />
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

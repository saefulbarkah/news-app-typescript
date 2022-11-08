import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { Carousel } from "antd";
import axios from "axios";
import ListNews from "../components/ListNews";
import RightMenu from "../components/RightMenu";
import InfiniteScroll from "react-infinite-scroll-component";
import urlSlug from "url-slug";
const News = () => {
  const [news, setNews] = useState([]);
  const [newsHero, setNewsHero] = useState([]);
  const [paginate, setPaginate] = useState(5);

  const getFulldate = (value: any) => {
    const date = new Date(value);
    let year = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return year;
  };
  const fetchMoreData = () => {
    setTimeout(() => {
      setPaginate(paginate + 5);
    }, 1500);
  };
  // hero list API
  useEffect(() => {
    const fetchApiHero = async () => {
      const api_key = "276b79c365744ddfbeb9f8cd606e39b3";
      const api_url = `https://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=8&apiKey=${api_key}`;
      await axios
        .get(api_url)
        .then((res) => {
          const data = res.data;
          setNewsHero(data.articles);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchApiHero();
  }, []);

  // news list API
  useEffect(() => {
    const fetchApi = async () => {
      const api_key = "276b79c365744ddfbeb9f8cd606e39b3";
      const api_url = `https://newsapi.org/v2/top-headlines?country=id&pageSize=${paginate}&apiKey=${api_key}`;
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
    fetchApi();
    console.log(paginate);
  }, [paginate]);

  return (
    <>
      <Carousel autoplay>
        {newsHero.map((item, i) => (
          <Hero
            key={i}
            title={item["title"]}
            description={item["description"]}
            author={item["author"]}
            date={`${getFulldate(item["publishedAt"])}`}
            image={item["urlToImage"]}
          />
        ))}
      </Carousel>

      <section>
        <div className="site-layout">
          <div className="layout-content">
            {/* Latest news */}
            <div className="left-content">
              <Title title="Latest News" />
              <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {news.map((item, index) => (
                  <ListNews
                    author={item["author"]}
                    title={item["title"]}
                    avatar={"https://joeschmoe.io/api/v1/random"}
                    description={item["description"]}
                    published={`${getFulldate(item["publishedAt"])}`}
                    image={item["urlToImage"]}
                    categories={item["source"]["name"]}
                    url={`news-details/title=${urlSlug(item["title"])}`}
                  />
                ))}
              </InfiniteScroll>
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

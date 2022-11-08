import { Layout } from "antd";
import "./App.css";
import News from "./pages/News";
import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsDetail from "./pages/NewsDetail";
const { Header, Content, Footer } = Layout;

function App() {
  const [blurNav, setBlurNav] = useState(false);

  // blur effect on navbar
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setBlurNav(true);
      }
      if (window.pageYOffset === 0) {
        setBlurNav(false);
      }
    };
    console.log(blurNav);
  }, [blurNav]);
  return (
    <>
      <Layout>
        {/* header */}
        <Header className={`header ${blurNav ? "blur" : ""}`}>
          <nav className="navbar">
            <div className="logo">News</div>
            <ul className="nav-list">
              <NavLink to="" className="nav-item btn-nav">
                Reading Now
              </NavLink>
            </ul>
          </nav>
        </Header>

        {/* content */}
        <Content>
          {/* SPA */}
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news-details" element={<NewsDetail />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </Content>

        {/* footer */}
        <Footer style={{ textAlign: "center" }}>News APP</Footer>
      </Layout>
    </>
  );
}

export default App;

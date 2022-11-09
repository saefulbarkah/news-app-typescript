import { Layout } from "antd";
import "./App.css";
import News from "./pages/News";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "./pages/NewsDetail";
import Navbar from "./components/Navbar";
const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        {/* header */}
        <Navbar />
        {/* content */}
        <Content>
          {/* SPA */}
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news-details/:title" element={<NewsDetail />} />
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

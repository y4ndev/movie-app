import React from "react";
import axios from "axios";
import { _Header } from "./components/Header";
import { _Search } from "./components/Search";
import { Layout, Menu, theme, Input, Radio } from "antd";
import { Catalog } from "./components/Catalog";
import { IData } from "./types/data";
import { Sidebar } from "./components/Sidebar/Sidebar";

const { Header, Content, Footer, Sider } = Layout;

const genresArr = [
  "Боевики",
  "Военные",
  "Детективы",
  "Документальные",
  "Драмы",
  "Исторические",
  "Комедии",
  "Криминал",
  "Мелодрамы",
  "Мультфильмы",
  "Приключения",
  "Семейные",
  "Триллеры",
  "Ужасы",
  "Фантастика",
  "Фэнтези",
];

const App: React.FC = () => {
  const [data, setData] = React.useState<IData[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    console.log("fetching");
    axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data.films);
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
  console.log(data);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <_Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ margin: "0 22px 0" }}>
            <div style={{ padding: 24, minHeight: "700px", background: colorBgContainer }}>
              <Radio.Group
                size="large"
                defaultValue="a"
                buttonStyle="solid"
                style={{
                  marginBottom: 15,
                  display: "inline-flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {genresArr.map((item: string) => (
                  <Radio.Button style={{ marginBottom: 10, borderRadius: 0 }} value={item}>
                    {item}
                  </Radio.Button>
                ))}
              </Radio.Group>
              <Catalog setCurrent={setCurrentPage} page={currentPage} movies={data} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

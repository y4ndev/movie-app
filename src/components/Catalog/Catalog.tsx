import React from "react";
import type { PaginationProps } from "antd";
import { CSSTransition } from "react-transition-group";
import { Card, Spin, Row, Col, Typography, Pagination } from "antd";
import { IData } from "../../types/data";

const { Text, Link } = Typography;

interface ICatalog {
  movies: IData[];
  page: number;
  setCurrent: (page: number) => void;
  loading: boolean;
}

const Catalog: React.FC<ICatalog> = ({ movies, page, setCurrent, loading }) => {
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <>
      <Row gutter={[10, 10]}>
        {movies.map((item: IData) => (
          <Col key={item.filmId} lg={{ span: 6 }} md={{ span: 6 }} xs={24}>
            <Card
              hoverable
              style={{ maxWidth: 320, textAlign: "center", overflow: "hidden" }}
              cover={
                <CSSTransition
                  style={{ height: 440 }}
                  in={loading}
                  classNames="my-node"
                  timeout={500}
                  unmountOnExit
                >
                  <img
                    alt="example"
                    src={item.posterUrl}
                    style={{
                      height: 440,
                      objectFit: "cover",
                    }}
                  />
                </CSSTransition>
              }
            >
              <CSSTransition in={loading} classNames="my-node" timeout={500} unmountOnExit>
                <Text className="text" style={{ display: "block" }} type="secondary">
                  <Link> {item.nameRu}</Link>
                </Text>
              </CSSTransition>
            </Card>
          </Col>
        ))}
        <Pagination style={{ margin: "0 auto" }} current={page} onChange={onChange} total={50} />
      </Row>
    </>
  );
};

export { Catalog };

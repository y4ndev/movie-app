import React from "react";
import type { PaginationProps } from "antd";
import { Card, Image, Row, Col, Typography, Pagination } from "antd";
import { IData } from "../../types/data";

const { Text, Link } = Typography;

interface ICatalog {
  movies: IData[];
  page: number;
  setCurrent: (page: number) => void;
}

const Catalog: React.FC<ICatalog> = ({ movies, page, setCurrent }) => {
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <>
      <Row gutter={[10, 10]}>
        {movies.map((item: IData) => (
          <Col key={item.filmId} md={{ span: 6 }} xs={24}>
            <Card style={{ textAlign: "center" }}>
              {" "}
              <Image height={400} src={item.posterUrl} />
              <Text type="secondary">
                <Link> {item.nameRu}</Link>
              </Text>
            </Card>
          </Col>
        ))}
        <Pagination style={{ margin: "0 auto" }} current={page} onChange={onChange} total={50} />
      </Row>
    </>
  );
};

export { Catalog };

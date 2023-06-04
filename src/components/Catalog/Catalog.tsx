import React from "react";
import { setCurrentPage } from "../../store/slices/filterSlice";
import type { PaginationProps } from "antd";
import { CSSTransition } from "react-transition-group";
import { Card, Row, Col, Typography, Pagination } from "antd";
import { IData } from "../../types/data";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const { Text, Link } = Typography;

interface ICatalog {
  movies: IData[];
  loading: boolean;
}

const Catalog: React.FC<ICatalog> = ({ movies, loading }) => {
  const { currentPage } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <>
      <Row gutter={[10, 10]}>
        {movies.map((item: IData, index) => (
          <Col key={index} lg={{ span: 6 }} md={{ span: 6 }} xs={24}>
            <Card
              hoverable
              style={{ maxWidth: 320, textAlign: "center", overflow: "hidden" }}
              cover={
                <CSSTransition
                  style={{ height: 440 }}
                  in={loading}
                  classNames="my-node"
                  timeout={700}
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
              <CSSTransition in={loading} classNames="my-node" timeout={700} unmountOnExit>
                <Text className="text" style={{ display: "block" }} type="secondary">
                  <Link> {item.nameRu}</Link>
                </Text>
              </CSSTransition>
            </Card>
          </Col>
        ))}
        <Pagination
          style={{ margin: "0 auto" }}
          current={currentPage}
          onChange={onChange}
          total={50}
        />
      </Row>
    </>
  );
};

export { Catalog };

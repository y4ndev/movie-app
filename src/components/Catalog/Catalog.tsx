import React, { useState } from "react";
import { HeartTwoTone } from "@ant-design/icons";
import { setCurrentPage } from "../../store/slices/filterSlice";
import { setItemLikes } from "../../store/slices/dataSlice";
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
  const { likedMovies } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setCurrentPage(page));
  };

  console.log(movies);

  return (
    <>
      <Row gutter={[10, 10]}>
        {movies.map((item: IData, index) => (
          <Col key={index} lg={{ span: 6 }} md={{ span: 6 }} xs={24}>
            <Card
              className="card"
              hoverable
              style={{
                maxWidth: 320,
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
              }}
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
              <HeartTwoTone
                onClick={() => dispatch(setItemLikes({ id: item.filmId || item.kinopoiskId }))}
                twoToneColor={
                  likedMovies[(item.filmId || item.kinopoiskId) ?? ""] ? "#eb2f96" : "#ffffff"
                }
                style={{
                  position: "absolute",
                  top: 7,
                  right: 7,
                  fontSize: 24,
                  transition: "fill 3s",
                }}
              />
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

import React from "react";
import { Card, Image, Row, Col } from "antd";
import { IData } from "../../types/data";

const Catalog: React.FC<{ movies: IData[] }> = ({ movies }) => {
  return (
    <>
      <Row gutter={[10, 10]}>
        {movies.map((item: IData) => (
          <Col md={{ span: 6 }} xs={24}>
            <Card>
              {" "}
              <Image height={400} src={item.posterUrl} />
              <div style={{ textAlign: "center" }}>{item.nameRu}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export { Catalog };

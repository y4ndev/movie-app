import React from "react";
import { genresArr } from "../../App";
import { Radio } from "antd";

interface ISort {
  setFilter: (filter: string) => void;
}

const Sort: React.FC<ISort> = ({ setFilter }) => {
  return (
    <>
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
        {genresArr.genres.map(({ genre, id }: { genre: string; id: number }, index) => (
          <Radio.Button
            onClick={() => setFilter(`${index + 1}`)}
            key={id}
            style={{ marginBottom: 10, borderRadius: 0 }}
            value={genre}
          >
            {genre}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};

export { Sort };

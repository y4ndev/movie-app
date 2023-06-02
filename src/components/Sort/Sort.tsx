import React from "react";
import { setCategoryId } from "../../store/slices/filterSlice";
import { genresArr } from "../../App";
import { Radio } from "antd";
import { useAppDispatch } from "../../store/hook";

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
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
            onClick={() => dispatch(setCategoryId(`${index + 1}`))}
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

import React from "react";
import { useParams } from "react-router-dom";

const Cardpage: React.FC = () => {
  console.log(useParams());
  return <div>Cardpage</div>;
};

export { Cardpage };

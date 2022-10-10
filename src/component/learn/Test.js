import React from "react";
import { useParams } from "react-router-dom";
import gold from "./gold.json";
const Test = () => {
  const { _id } = useParams();
  return (
    <>
      <div>
        <p>{_id}</p>
        {gold.map((gold) => {
          return (
            <div key={gold.id}>
              Mr {gold.id} thanks for {gold.work}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Test;

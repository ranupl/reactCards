import React from "react";
import Card from "./components/Card";
import data from "../src/data.json";

function App() {
  const length = data.length;

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>
            Our Process After You <span>Depart</span>
          </h1>
        </div>
        <div className="showCards">
          <div className="cards">
            {data.map((item, index) => {
              return (
                <Card key={index} data={item} index={index} length={length} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

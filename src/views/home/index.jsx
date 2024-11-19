import request from "@/services";
import React, { memo, useEffect, useState } from "react";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    request.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h3>{highScore.subtitle}</h3>
      <ul>
        {highScore?.list?.map((item, index) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;

import Indicator from "@/base-ui/indicator";
import { Button } from "antd";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo((props) => {
  const names = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqr",
    "stu",
    "vwx",
    "yzz",
    "zzz",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const toggleClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    if (newIndex > names.length - 1) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="control">
        <Button onClick={() => toggleClickHandle(false)}>上一个</Button>
        <Button onClick={() => toggleClickHandle(true)}>下一个</Button>
      </div>
      <div className="list">
        <Indicator selectIndex={currentIndex}>
          {names.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;

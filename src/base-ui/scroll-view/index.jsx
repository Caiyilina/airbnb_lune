import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollViewWrapper } from "./style";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ScrollView = memo((props) => {
  const { children } = props;

  // 定义内部的状态
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const [posIndex, setPosIndex] = useState(0);

  const totalDistanceRef = useRef(0);

  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollContent = scrollContentRef.current;
    const scrollWidth = scrollContent.scrollWidth; // 滚动区域的宽度
    const clientWidth = scrollContent.clientWidth; // 可见区域的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [children]);

  const leftClickHandle = () => {
    controlClickHandle(false);
  };

  const rightClickHandle = () => {
    controlClickHandle(true);
  };
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];

    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style = `transform:translateX(-${newElOffsetLeft}px)`;
    console.log("newElOffsetLeft-0", newElOffsetLeft, totalDistanceRef.current);

    setPosIndex(newIndex);
    setShowLeft(newIndex > 0);
    setShowRight(totalDistanceRef.current > newElOffsetLeft);
  };

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <Button
          className="control left"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={leftClickHandle}
        />
      )}
      {showRight && (
        <Button
          className="control right"
          shape="circle"
          icon={<RightOutlined />}
          onClick={rightClickHandle}
        />
      )}
      {/* 插槽 */}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;

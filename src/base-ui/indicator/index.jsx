import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    // 1、获取当前选中的元素
    const selectEl = contentRef.current.children[selectIndex];
    const itemOffset = selectEl.offsetLeft;
    const itemWidth = selectEl.offsetWidth;

    // 2、content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    console.log(itemOffset, itemWidth, contentWidth);

    // 3、获取需要移动的距离
    let distance = itemOffset + itemWidth * 0.5 - contentWidth * 0.5;

    distance < 0 && (distance = 0);
    if (distance > contentScroll - contentWidth) {
      distance = contentScroll - contentWidth;
    }

    console.log("3、获取需要移动的距离", distance);
    // 4、移动
    contentRef.current.style.transform = `translateX(-${distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;

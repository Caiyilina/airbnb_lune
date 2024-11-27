import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { PictureWrapper } from "./style";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const PictureBrowser = memo((props) => {
  const { pictureUrls = [], closeClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);

  // 图片浏览器不需要滚动
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeBtnClickHandle = () => {
    closeClick && closeClick();
  };
  const controlBtnHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    newIndex < 0 && (newIndex = pictureUrls.length - 1);
    newIndex > pictureUrls.length - 1 && (newIndex = 0);
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  };
  return (
    <PictureWrapper isNext={isNext}>
      {/* 顶部  关闭按钮*/}
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <CloseOutlined />
        </div>
      </div>
      {/* 中间轮播图 */}
      <div className="slider">
        <span
          className="control left"
          onClick={() => {
            controlBtnHandle(false);
          }}
        >
          <LeftOutlined />
        </span>
        <span
          className="control right"
          onClick={() => {
            controlBtnHandle(true);
          }}
        >
          <RightOutlined />
        </span>
        <div className="picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              timeout={200}
              classNames="pic"
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      {/* 顶部指示器 */}
      <div className="preview"></div>

      {pictureUrls?.length}
    </PictureWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;

import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { PictureWrapper } from "./style";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls = [], closeClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [showList, setShowList] = useState(true);
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
  const bottomItemClickHandle = (index) => {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };
  return (
    <PictureWrapper isNext={isNext} showList={showList}>
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
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment 图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>

      {pictureUrls?.length}
    </PictureWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;

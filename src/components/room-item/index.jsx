import React, { memo, useRef, useState } from "react";
import PropTypes from "prop-types";
import RoomWrapper from "./style";
import { Carousel, Rate } from "antd";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();

  /** 事件处理的逻辑 */
  function controlClickHandle(isNext = true, event) {
    // 上一个面板/下一个面板
    isNext ? sliderRef.current.next() : sliderRef.current.prev();

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止事件冒泡
    event.stopPropagation();
  }
  const itemClickHandle = () => {
    itemClick && itemClick(itemData);
  };

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {/* 自定义indicator */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={index}>
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item, index) => {
          return (
            <div className="cover" key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <RoomWrapper
      itemWidth={itemWidth}
      descColor={itemData?.verify_info?.text_color || "#39576a"}
    >
      <div className="inner" onClick={(e) => itemClickHandle()}>
        {itemData?.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name" title={itemData?.name}>
          {itemData.name}
        </div>
        <div className="price">{itemData?.price_format}/晚</div>
        <div className="bottom">
          <Rate
            allowHalf
            disabled
            defaultValue={itemData?.star_rating ?? 5}
            style={{
              fontSize: "12px",
              color: itemData?.star_rating_color || "#00848a",
            }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          <span className="extra">{itemData?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.prototype = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;

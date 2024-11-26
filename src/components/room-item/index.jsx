import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomWrapper from "./style";
import { Carousel, Rate } from "antd";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomWrapper
      itemWidth={itemWidth}
      descColor={itemData?.verify_info?.text_color || "#39576a"}
    >
      <div className="inner">
        {itemData?.picture_urls ? (
          <div className="swiper">
            <Carousel arrows dots={true}>
              {itemData?.picture_urls?.map((item, index) => {
                return (
                  <div className="cover" key={index}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}
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

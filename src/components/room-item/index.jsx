import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomWrapper from "./style";
import { Rate } from "antd";

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <RoomWrapper descColor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
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
};

export default RoomItem;

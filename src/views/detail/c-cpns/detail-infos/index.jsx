import PropTypes from "prop-types";
import React, { memo } from "react";
import { DetailInfosWrapper } from "./style";
import { useSelector } from "react-redux";

import { StarFilled } from "@ant-design/icons";

const DetailInfos = memo((props) => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return (
    <DetailInfosWrapper>
      <div className="desc">
        {detailInfo?.verify_info?.messages?.join(" · ")}{" "}
      </div>
      <div className="bottom">
        <span>
          <StarFilled />
        </span>
        <span> {detailInfo?.star_rating ?? 5}</span>
        <span>·</span>
        <span className="count">{detailInfo?.reviews_count}条评价</span>
      </div>
      <div className="price">{detailInfo?.price_format}/晚 </div>
    </DetailInfosWrapper>
  );
});

DetailInfos.propTypes = {};

export default DetailInfos;

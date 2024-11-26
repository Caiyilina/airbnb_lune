import React, { memo } from "react";
import { useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailInfos from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return (
    <DetailWrapper>
      <div className="title">
        <h2>{detailInfo.name}</h2>
        <div className="opt"></div>
      </div>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;

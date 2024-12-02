import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailInfos from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, []);
  return (
    <DetailWrapper>
      <AppHeader></AppHeader>
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

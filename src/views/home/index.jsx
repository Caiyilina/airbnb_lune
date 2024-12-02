import React, { memo, useEffect } from "react";
import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchMultiHomeDataAction } from "@/store/modules/home";

import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "@/utils/common";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // 派发异步事件 发起进行的网络请求
    dispatch(fetchMultiHomeDataAction());

    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, []);

  return (
    <HomeWrapper>
      <AppHeader></AppHeader>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 你可能想去 */}
        {isEmptyObject(longForInfo) && (
          <HomeLongFor infoData={longForInfo}></HomeLongFor>
        )}

        {/* 折扣数据 */}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
        {/* 高性价比房源 */}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        )}
        {/* 高评分数据 */}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        )}
        {isEmptyObject(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;

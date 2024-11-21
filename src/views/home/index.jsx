import React, { memo, useEffect } from "react";
import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  fetchHomeDataAction,
  fetchMultiHomeDataAction,
} from "@/store/modules/home";

import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "@/utils/common";

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );

  const dispatch = useDispatch();
  useEffect(() => {
    // 派发异步事件 发起进行的网络请求
    // dispatch(fetchHomeDataAction());
    dispatch(fetchMultiHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 折扣数据 */}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
        {/* 高性价比房源 */}

        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        {/* 高评分数据 */}
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  );
});

export default Home;

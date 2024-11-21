import React, { memo, useEffect } from "react";
import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";

import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({ goodPriceInfo: state.home.goodPriceInfo }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // 派发异步事件 发起进行的网络请求
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="good-price">
          <SectionHeader
            title={goodPriceInfo?.title}
            subtitle={goodPriceInfo?.subtitle}
          ></SectionHeader>

          <SectionRooms
            roomList={goodPriceInfo?.list?.slice(0, 8) || []}
          ></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;

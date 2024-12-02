import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(() => {
  // 发送网络请求 获取数据'
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, []);

  return (
    <EntireWrapper>
      <AppHeader></AppHeader>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;

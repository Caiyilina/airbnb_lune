import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { Spin } from "antd";

const EntireRooms = memo((props) => {
  // 从redux获取roomList
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem itemWidth="20%" itemData={item} key={item._id}></RoomItem>
          );
        })}
      </div>
      {isLoading && (
        <div className="cover">
          <Spin />
        </div>
      )}
    </EntireRoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;

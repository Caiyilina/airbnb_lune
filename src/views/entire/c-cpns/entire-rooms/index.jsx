import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      console.log("itemClickHandle", item);
      dispatch(changeDetailInfoAction(item));
      navigate(`/detail/${item._id}`);
    },
    [navigate]
  );

  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemClick={itemClickHandle}
              itemWidth="20%"
              itemData={item}
              key={item._id}
            ></RoomItem>
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

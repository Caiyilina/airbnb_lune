import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import SectionWrapper from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <SectionWrapper>
      {roomList &&
        roomList?.map((item) => {
          return <RoomItem itemData={item} key={item.id}></RoomItem>;
        })}
    </SectionWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;

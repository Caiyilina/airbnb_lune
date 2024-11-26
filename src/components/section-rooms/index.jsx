import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import SectionWrapper from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionWrapper>
      {roomList &&
        roomList?.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth={itemWidth}
              key={item.id}
            ></RoomItem>
          );
        })}
    </SectionWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;

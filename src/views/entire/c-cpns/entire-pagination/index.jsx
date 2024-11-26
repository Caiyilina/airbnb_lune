import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo((props) => {
  const dispatch = useDispatch();
  const { totalCount, currentPage, roomList, pageSize } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      pageSize: state.entire.pageSize,
    })
  );
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  // 事件处理
  const pageChangeHandler = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(fetchRoomListAction(page - 1));
  };
  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            defaultCurrent={currentPage + 1}
            defaultPageSize={pageSize}
            total={totalCount}
            showSizeChanger={false}
            onChange={pageChangeHandler}
          />
          <div className="desc">
            第{startCount}-{endCount}个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;

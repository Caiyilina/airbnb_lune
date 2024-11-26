import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constant";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAl_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction =
  (page = 0) =>
  async (dispatch, getState) => {
    // 1、修改当前页码
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoadingAction(true));
    const pageSize = getState().entire.pageSize;
    const offset = page * pageSize;
    const result = await getEntireRoomList(offset, pageSize);
    dispatch(changeIsLoadingAction(false));

    const list = result.list;
    const totalCount = result.totalCount;

    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
  };

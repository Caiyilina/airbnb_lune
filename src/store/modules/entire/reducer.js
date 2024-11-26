import * as actionTypes from "./constant";

const initialState = {
  currentPage: 0, //当前页码
  roomList: [], //房间列表
  totalCount: 0, //房间总数
  pageSize: 20, //每页显示的房间数
  isLoading: false, //是否正在加载
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case actionTypes.CHANGE_ROOM_LIST:
      return {
        ...state,
        roomList: action.roomList,
      };
    case actionTypes.CHANGE_TOTAl_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case actionTypes.CHANGE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
export default reducer;

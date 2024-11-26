import request from "../request";

/**
 * @description: 获取整个房源列表
 * @param {number} [offset=0] - 偏移量
 * @param {number} [size=20] - 一页的数量
 * @return {Promise} - axios的promise对象
 */
export function getEntireRoomList(offset = 0, size = 20) {
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}

import request from "../request";

// 获取高性价比房源
export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}

// 获取高评分房源
export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore",
  });
}
// 获取折扣数据
export function getHomeDiscountData() {
  return request.get({
    url: "/home/discount",
  });
}

// 获取热门推荐城市
export function getHomeHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest",
  });
}

// 获取向往城市数据
export function getHomeLongforData() {
  return request.get({
    url: "/home/longfor",
  });
}

/**
 * 获取plus房源
 * @function getHomePlusData
 * @return {Promise}
 */
export function getHomePlusData() {
  return request.get({
    url: "/home/plus",
  });
}

import styled from "styled-components";

const RoomWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "descColor" || prop !== "itemWidth",
})`
  box-sizing: border-box;
  flex-shrink: 0; // 防止缩小
  width: ${(props) => props?.itemWidth || "25%"};
  /* width: 25%; */
  padding: 8px;
  margin: 8px 0;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0; //撑起高度 解决图片高度不一致问题
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    /* color: #39576a; */
    color: ${(props) => props.descColor || "#39576a"};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: PingFangSC-Regular, PingFang SC;
    cursor: pointer;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.textColor.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    /* 评分星星间距 */
    .ant-rate-star {
      margin-right: 1px;
    }
  }
`;
export default RoomWrapper;

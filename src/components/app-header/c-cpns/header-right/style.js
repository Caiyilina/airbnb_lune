import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-weight: 600;
  color: ${(props) => props.theme.textColor.primaryColor};
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    box-sizing: content-box;
    span {
      cursor: pointer;
      padding: 15px 10px;
      border-radius: 10px;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
  .profile {
    width: 77px;
    height: 42px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 20px;
    color: ${(props) => props.theme.textColor.primaryColor};
    /* 混入样式字符串 */
    ${(props) => props.theme.mixin.boxShadow}
    position: relative;
    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      height: 200px;
      height: auto;
      background-color: #fff;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.18);
      border-radius: 10px;
      color: #666;
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f7f7f7;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;

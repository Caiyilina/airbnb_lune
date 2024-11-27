import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .top {
    position: relative;
    height: 86px;
    width: 100%;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
    }
  }

  .slider {
    width: 100%;
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .left {
      left: 20px;
    }
    .right {
      right: 20px;
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none; // 禁止选中
      }
    }
  }
  width: 100%;
  .preview {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .info {
    }
  }

  /* 动画 */
  .pic-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .pic-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 0.3s ease;
  }
  .pic-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .pic-exit-active {
    transform: translateX(${(props) => (props.isNext ? "-100%" : "100%")});
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

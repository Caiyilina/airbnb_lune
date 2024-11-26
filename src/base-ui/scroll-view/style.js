import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  width: 100%;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    display: flex;
    transition: transform 0.3s ease;
  }

  position: relative;
  .control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
  .left {
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }
  .right {
    right: 0;
    transform: translateY(-50%) translateX(50%);
  }
`;

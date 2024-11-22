import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  .inner {
    padding: 8px;
    position: relative;

    overflow: hidden;
    .item-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }
  }
  .cover {
    width: 100%;
    border-radius: 8px;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .bg-cover {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0;
    border-radius: 8px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

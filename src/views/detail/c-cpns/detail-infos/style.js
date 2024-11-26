import styled from "styled-components";

export const DetailInfosWrapper = styled.div`
  margin: 20px 0;
  .desc {
    font-size: 20px;
    font-weight: 500;
  }
  .price {
    font-weight: 700;
    margin: 20px 0;
    font-size: 30px;
  }
  .bottom {
    margin: 10px 0;
    display: flex;
    align-items: center;
    span:nth-child(1) {
      margin-right: 2px;
    }
    span:nth-child(3) {
      margin: 0 5px;
      font-weight: 700;
    }
    span:nth-child(4) {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";
export const EntirePaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .desc {
      margin-top: 16px;
    }
  }

  .ant-pagination-item-link {
    font-size: 14px !important;
    border-radius: 50% !important;
  }
  .ant-pagination-item {
    border-radius: 50% !important;
  }
  .ant-pagination-item-active {
    background-color: #222124;
    border-color: #222124;

    a {
      color: #fff;
    }
  }
`;

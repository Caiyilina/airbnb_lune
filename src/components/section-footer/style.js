import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};

    .text {
      margin-right: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

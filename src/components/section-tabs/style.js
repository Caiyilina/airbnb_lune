import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;

  .tab-item {
    background-color: #fff;
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    border: 0.5px solid #d8d8d8;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }
    &.active {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;
export default TabsWrapper;

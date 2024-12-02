import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color: red;
  display: flex;
  align-items: center;
  /* color: var(--primary-color); */
  color: ${(props) => props.theme.color.primaryColor};
  color: ${(props) =>
    props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
  .logo {
    cursor: pointer;
    margin-left: 20px;
  }
`;

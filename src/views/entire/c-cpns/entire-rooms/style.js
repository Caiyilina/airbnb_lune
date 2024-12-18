import styled from "styled-components";
export const EntireRoomsWrapper = styled.div`
  padding: 40px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  position: relative;
  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

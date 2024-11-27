import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`
  /* position: absolute;
  top: 80px; */
  position: relative;
  > .pictures {
    display: flex;
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .left,
  .right {
    width: 49.5%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;

    .item {
      width: 49%;
      height: 49%;

      box-sizing: border-box;
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    min-width: 48px;
    width: auto;
    padding: 6px 15px;
    font-size: 14px;
    font-weight: 800;
    line-height: 22px;
    border-radius: 4px;
    border: 1px solid transparent;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background: rgb(255, 255, 255);
      border-color: transparent;
      color: rgb(72, 72, 72);
    }
    &:focus {
      box-shadow: rgb(0 0 0 / 50%) 0 0 0 1px, rgb(255 255 255 / 70%) 0 0 0 5px;
      outline: none;
      transition: box-shadow 0.2s ease 0s;
    }
    &:active {
      background: rgb(226, 226, 226);
      border-color: transparent;
      color: rgb(72, 72, 72);
    }
  }
`;

import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";
const BannerWrapper = styled.div`
  height: 529px;
  /* background: url(${coverImg}) center center; */
  background: url(${require("@/assets/img/cover_01.jpeg")}) center center;
  background-size: cover;
`;
export default BannerWrapper;

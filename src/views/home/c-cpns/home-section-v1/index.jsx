import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionV1Wrapper from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>

      <SectionRooms
        itemWidth="25%"
        roomList={infoData?.list?.slice(0, 8) || []}
      ></SectionRooms>

      <SectionFooter></SectionFooter>
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;

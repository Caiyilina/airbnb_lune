import PropTypes from "prop-types";
import React, { memo, useCallback, useEffect, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData?.dest_list)[0];
  const [name, setName] = useState(initialName);

  const tabNames = infoData?.dest_address?.map((item) => item.name);
  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  //   会渲染两次，因为useEffect会触发两次
  //   useEffect(() => {
  //     setName(infoData?.dest_address?.[0].name);
  //   }, [infoData]);
  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms
        itemWidth="33.33%"
        roomList={infoData?.dest_list?.[name] || []}
      ></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;

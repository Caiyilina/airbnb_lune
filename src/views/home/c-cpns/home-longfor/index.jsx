import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongFor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData?.title}
        subtitle={infoData?.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData?.list?.map((item, index) => {
            return <LongforItem key={index} itemData={item}></LongforItem>;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongFor;

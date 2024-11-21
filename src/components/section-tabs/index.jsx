import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import TabsWrapper from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemClickHandle = (index, item) => {
    setCurrentIndex(index);
    // 发送选中事件
    tabClick(index, item);
  };
  return (
    <TabsWrapper>
      {tabNames.map((item, index) => {
        return (
          <div
            className={classNames("tab-item", {
              active: index === currentIndex,
            })}
            onClick={(e) => itemClickHandle(index, item)}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
};

export default SectionTabs;

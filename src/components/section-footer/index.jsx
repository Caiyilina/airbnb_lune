import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();
  let showMessage = "显示全部";
  if (name) {
    showMessage = `显示更多${name}房源`;
  }

  const moreClickHandle = () => {
    console.log("moreClickHandle");
    // TODO 带参数
    // 跳转详情页
    navigate({
      pathname: "/entire",
    });
  };
  return (
    <SectionFooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info" onClick={(e) => moreClickHandle()}>
        <span className="text">{showMessage}</span>
        <span className="icon">
          <IconMoreArrow />
        </span>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;

import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  // 路由对象
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <LeftWrapper>
      <div className="logo" onClick={() => goHome()}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;

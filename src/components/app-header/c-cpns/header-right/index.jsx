import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用
  useEffect(() => {
    const windowHandleClick = () => {
      setShowPanel(false);
    };
    // 监听点击事件
    document.addEventListener("click", windowHandleClick, true);
    // 组件销毁时，移除监听
    return () => {
      document.removeEventListener("click", windowHandleClick);
    };
  }, []);
  const profileClickHandle = () => {
    setShowPanel(true);
  };
  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <span>
          <IconProfileMenu />
        </span>
        <span>
          <IconProfileAvatar />
        </span>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;

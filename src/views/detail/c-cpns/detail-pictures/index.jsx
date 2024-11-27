import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DetailPicturesWrapper } from "./style";
import { useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo((props) => {
  const [showPictureBrowser, setShowPictureBrowser] = useState(false);
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={() => setShowPictureBrowser(true)}>
        显示照片
      </div>
      {showPictureBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo?.picture_urls}
          closeClick={(e) => setShowPictureBrowser(false)}
        ></PictureBrowser>
      )}
    </DetailPicturesWrapper>
  );
});

DetailPictures.propTypes = {};

export default DetailPictures;

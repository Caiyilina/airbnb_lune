import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "src/assets/data/filter_data.json";

const EntireFilter = memo((props) => {
  return (
    <EntireFilterWrapper>
      {filterData.map((item, index) => {
        return (
          <div className="item" key={index}>
            {item}
          </div>
        );
      })}
    </EntireFilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;

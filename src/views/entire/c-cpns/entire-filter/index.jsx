import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "src/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = React.useState([]);
  const itemClickHandle = (item) => {
    console.log(item);
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
      setSelectItems(newItems);
    } else {
      setSelectItems([...selectItems, item]);
    }
  };
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;

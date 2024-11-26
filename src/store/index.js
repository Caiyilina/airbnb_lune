import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./modules/home"; // RTK的reducer
import EntireReducer from "./modules/entire"; //普通的reducer
import detailReducer from "./modules/detail";

const store = configureStore({
  reducer: {
    home: HomeReducer,
    entire: EntireReducer,
    detail: detailReducer,
  },
});

export default store;

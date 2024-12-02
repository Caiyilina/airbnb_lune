import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./modules/home"; // RTK的reducer
import EntireReducer from "./modules/entire"; //普通的reducer
import detailReducer from "./modules/detail";
import mainReducer from "./modules/main";

const store = configureStore({
  reducer: {
    home: HomeReducer,
    entire: EntireReducer,
    detail: detailReducer,
    main: mainReducer,
  },
});

export default store;

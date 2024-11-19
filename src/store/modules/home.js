import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: [],
  },
  reducers: {},
});

// 导出actions
export const {} = homeSlice.actions;
// 导出reducer
export default homeSlice.reducer;

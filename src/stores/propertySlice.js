import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    list: [],
    loading: false,
    pagesCount: 0,
    detail: null,
    bounds: {},
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },

    hideLoading: (state) => {
      state.loading = false;
    },

    getProperties: (state, action) => {
      state.list = action.payload["data"];
      state.bounds = action.payload["bounds"];
      state.pagesCount = action.payload["pages"];
    },

    getPropertyDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getProperties, getPropertyDetail, showLoading, hideLoading } =
  propertySlice.actions;
export default propertySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    list: [],
    loading: false,
    detail: null,
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
    },

    getPropertyDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getProperties, getPropertyDetail, showLoading, hideLoading } =
  propertySlice.actions;
export default propertySlice.reducer;

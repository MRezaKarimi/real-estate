import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getProperties = createAsyncThunk(
  "property/getProperties",
  async ({ page, priceFrom, priceTo }, { rejectWithValue }) => {
    try {
      const response = await API.get("/property", {
        params: { offset: page, limit: 10, priceFrom, priceTo },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPropertyById = createAsyncThunk(
  "property/getPropertyById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get(`/property/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRecentProperties = createAsyncThunk(
  "property/getRecentProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/property/recent");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertyList: [],
    recentProperties: [],
    propertyDetail: null,
    loading: false,
    error: "",
    pagesCount: 0,
    mapBounds: {},
  },
  extraReducers: {
    [getProperties.pending]: (state, action) => {
      state.loading = true;
    },
    [getProperties.fulfilled]: (state, action) => {
      state.loading = false;
      state.propertyList = action.payload["data"];
      state.mapBounds = action.payload["mapBounds"];
      state.pagesCount = action.payload["pages"];
    },
    [getProperties.rejected]: (state, action) => {
      state.loading = false;
    },
    [getRecentProperties.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecentProperties.fulfilled]: (state, action) => {
      state.loading = false;
      state.recentProperties = action.payload;
    },
    [getRecentProperties.rejected]: (state, action) => {
      state.loading = false;
    },
    [getPropertyById.pending]: (state, action) => {
      state.loading = true;
    },
    [getPropertyById.fulfilled]: (state, action) => {
      state.loading = false;
      state.propertyDetail = action.payload;
    },
    [getPropertyById.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default propertySlice.reducer;

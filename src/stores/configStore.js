import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "../middlewares/apiMiddleware";
import propertyReducer from "./propertyStore";

export default configureStore({
  reducer: {
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiMiddleware,
  ],
});

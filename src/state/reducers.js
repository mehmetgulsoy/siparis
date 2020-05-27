import { connectRouter } from "connected-react-router";
import { combineReducers } from "@reduxjs/toolkit";
import { ui_slice } from "./ui_slice";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ui: ui_slice.reducer,
  });
export default rootReducer;

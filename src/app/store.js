import { configureStore } from "@reduxjs/toolkit";
//Next, we need to import the reducer function from the
//  slice and add it to our store. By defining a field inside the reducer parameter,
// we tell the store to use this slice reducer function to handle all updates to that state.
import counterReducer from "../Slices/counterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

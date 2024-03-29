import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";
import rootReducer from "./reducer/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

// // if (process.env.NODE_ENV === "developement") {
// //   middleware.push(logger);
// }
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

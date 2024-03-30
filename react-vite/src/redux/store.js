import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import productReducer from "./product";
import reviewReducer from "./review";
import userReducer from "./users";
import cartReducer from "./cart";
import cartItemsReducer from "./cartItems";

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  products: productReducer,
  reviews: reviewReducer,
  carts: cartReducer,
  cartItems: cartItemsReducer
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

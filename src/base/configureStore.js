import { createStore } from "redux";
import reducer from "./reducer";

export function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
  /* eslint-enable */

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      // eslint-disable-next-line global-require
      const nextReducer = require("./reducer").default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;

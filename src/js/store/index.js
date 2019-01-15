// src/js/store/index.js

// ===============Redux Store================
// import {createStore} from "redux";
// import rootReducer from "../reducers/index";
//
// const store = createStore(rootReducer);
//
// export default store;


// ===============Redux Middleware================
// import {createStore, applyMiddleware} from "redux";
// import rootReducer from "../reducers/index";
// import {forbiddenWordsMiddleware} from "../middleware";
//
// const store = createStore(
//     rootReducer,
//     applyMiddleware(forbiddenWordsMiddleware)
// );
//
// export default store;


// ================Redux Dev Tools together with other middlewares=================
// import {createStore, applyMiddleware, compose} from "redux";
// import rootReducer from "../reducers/index";
// import {forbiddenWordsMiddleware} from "../middleware";
//
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer,
//     storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
// );
//
// export default store;



// ================== asynchronous actions in Redux with Redux Thunk ==================
// calling fetch from an action creator does not work.
// That’s because Redux is expecting objects as actions but we’re trying to return a Promise.
// With 'redux-thunk' we can overcome the problem and return functions from action creators.
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import {forbiddenWordsMiddleware} from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
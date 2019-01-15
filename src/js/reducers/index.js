// src/js/reducers/index.js

import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
};


// Using concat(), slice(), and …spread for arrays
// Using Object.assign() and …spread for objects

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;
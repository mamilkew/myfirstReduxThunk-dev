import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import index from "./js/index"


// ======================== Case 2 ===============================
import {Provider} from "react-redux";
import store from "./js/store/index";

const MyApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<MyApp/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

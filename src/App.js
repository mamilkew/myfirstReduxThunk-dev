import React from "react";
import List from "./js/components/List";
import Form from "./js/components/Form"

// const App = () => (
//     <List />
// );

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form/>
        </div>
    </div>
);

export default App;


// ======================== Initial App ===============================

// import React, {Component} from 'react';
// // import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             articles: [
//                 {title: "React Redux Tutorial for Beginners", id: 1},
//                 {title: "Redux e React: cos'è Redux e come usarlo con React", id: 2}
//             ]
//         };
//     }
//
//     render() {
//         const {articles} = this.state;
//         return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
//     }
// }
//
// export default App;

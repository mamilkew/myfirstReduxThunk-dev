import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {articles: state.articles};
};

// constructor to return render() ex. ({state_name}) => (HTML markup for render)
const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>{el.title}</li>))
        }
    </ul>
);
// connecting state.articles with the component render
const List = connect(mapStateToProps)(ConnectedList);

export default List;
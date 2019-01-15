import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions/index";


const mapStateToProps = (state) => {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

class PostAPI extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }

    render() {
        // return null;
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

const Post = connect(mapStateToProps, {getData})(PostAPI);
export default Post;
import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions/index";

//This way it can update the global state by dispatching the addArticle action.
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    // mapDispatchToProps connects Redux actions to React props. This way a connected component is able to dispatch actions.
    handleSubmit(event) {
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        // ===============Redux Middleware================
        // let's add a check for forbidden words

        // ===============Redux Middleware================
        this.props.addArticle({title, id});  // props can use because of constructor ?????
        this.setState({title: ""});
    }

    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}

// connecting state of addArticle with the component render
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
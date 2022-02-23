import React, { Component } from 'react';
export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onItemAdded || (() => { });
        cb(label);
    };

    clearInput = (e) => {
        this.setState({ label: '' });
    };

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>

                <input type="text"
                    className="form-control new-todo-label"
                    value={this.state.label}
                    onChange={this.onLabelChange}
                    placeholder="New List" />

                <button type="submit"
                    className="btn btn-outline-secondary btn-outline-success">
                    <i className="fa fa-check"></i></button>
                <button type="button" onClick={(e) => this.clearInput(e)}
                    className="btn btn-outline-secondary btn-outline-danger"><i className="fa fa-times"></i></button>
            </form>
        );
    }
}

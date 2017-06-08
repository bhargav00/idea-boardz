import React from 'react';
import Draggable from 'react-draggable';
export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true
        };
        this.remove = this
            .remove
            .bind(this);
        this.save = this
            .save
            .bind(this);
        this.edit = this
            .edit
            .bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    }
    remove() {
        this
            .props
            .removeFromBoard(this.props.id);
    }
    save() {
        this
            .props
            .updateNote(this.refs.newText.value, this.props.id)
        this.setState({editing: false});
    }
    edit() {
        this.setState({editing: true});
    }
    componentDidUpdate() {
        if (this.state.editing) {
            this
                .refs
                .newText
                .focus()
            this
                .refs
                .newText
                .select()
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children || this.state !== nextState
    }
    render() {
        return (
            <Draggable>{this.state.editing == true
                    ? <div className="col s12 m6 ">
                            <div className="noteContainer card blue-grey darken-1">
                                <div className="noteText card-content white-text">
                                    <textarea
                                        id="textarea1"
                                        className="materialize-textarea"
                                        ref="newText"
                                        defaultValue={this.props.children}></textarea>
                                </div>
                                <div className="card-action">
                                    <button onClick={this.save} className="waves-effect waves-light btn">Save</button>
                                    <button
                                        onClick={this.remove}
                                        className="waves-effect waves-light btn red darken-1">Remove</button>
                                </div>
                            </div>
                        </div>
                    : <div className="col s12 m6">
                        <div className="noteContainer card blue-grey darken-1">
                            <div className="noteText card-content white-text">
                                <span className="card-title">{this.props.children}</span>
                            </div>
                            <div className="card-action">
                                <button onClick={this.edit} className="waves-effect waves-light btn">Edit</button>
                                <button
                                    onClick={this.remove}
                                    className="waves-effect waves-light btn red darken-1">Remove</button>
                            </div>
                        </div>
                    </div>}
            </Draggable>
        )
    }

}
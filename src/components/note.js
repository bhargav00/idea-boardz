import React from 'react';

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
    remove() {
        this
            .props
            .removeFromBoard(this.props.index);
    }
    save() {
        this.setState({editing: false});
    }
    edit() {
        this.setState({editing: true});
    }
    render() {
        return (this.state.editing == true
            ? <div className="col s12 m6">
                    <div className="noteContainer card blue-grey darken-1">
                        <div className="noteText card-content white-text">
                            <div>
                                <label htmlFor="textarea1">Note</label>
                                <textarea
                                    id="textarea1"
                                    className="materialize-textarea"
                                    ref="newText"
                                    defaultValue={this.props.children}></textarea>
                            </div>
                        </div>
                        <div className="card-action">
                            <button onClick={this.save} className="waves-effect waves-light btn">Save</button>
                            <button
                                onClick={this.remove}
                                className="waves-effect waves-light btn red darken-4">Remove</button>
                        </div>
                    </div>
                </div>
            : <div className="col s12 m6">
                <div className="noteContainer card blue-grey darken-1">
                    <div className="noteText card-content white-text">
                        <span className="card-title">{this.props.children}</span>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn">Edit</button>
                        <button
                            onClick={this.remove}
                            className="waves-effect waves-light btn red darken-4">Remove</button>
                    </div>
                </div>
            </div>)
    }

}
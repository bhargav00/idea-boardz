import React from 'react';
import Note from './note';
export default class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.remove = this
            .remove
            .bind(this);
        this.updateNote = this
            .updateNote
            .bind(this);
    }
    add(text) {
        // store notes array into variable
        var arr = this.state.notes;
        // push new note into array
        arr.push(text);
        // update array
        this.setState({notes: arr});
    }
    remove(i) {
        // store notes array into variable
        var arr = this.state.notes;
        // splice out item passed in
        arr.splice(i, 1);
        // set new array equal to the updated array
        this.setState({notes: arr});
    }
    updateNote(newText, i) {
        // store notes array into variable
        var arr = this.state.notes;
        // get reference to that specific array item
        arr[i] = newText;
        // set equal to the new text that the user typed in
        this.setState({notes: arr});
    }
    render() {
        return (
            <div className="col s4 add-note-container">
                <button
                    onClick={() => {
                    this.add("Add a new note!")
                }}
                    className="waves-effect waves-light btn-large new-note-btn">Add New Note</button>
                {this
                    .state
                    .notes
                    .map((item, i) => {
                        return (
                            <Note
                                key={i}
                                index={i}
                                removeFromBoard={this.remove}
                                updateNote={this.updateNote}>
                                {item}
                            </Note>
                        );
                    })}
            </div>

        )
    }

}
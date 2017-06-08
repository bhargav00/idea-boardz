import React from 'react';
import Note from './note';
export default class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
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
    eachNote(item, i) {
        return (
            <Note key={i} index={i} >
                {item}
            </Note>
        );
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
                    .map(this.eachNote)}
            </div>

        )
    }

}
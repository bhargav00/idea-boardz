import React from 'react';
import Note from './note';

export default class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.add = this
            .add
            .bind(this);
        this.remove = this
            .remove
            .bind(this);
        this.updateNote = this
            .updateNote
            .bind(this);
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    add(text) {
        // push new note into array
        var notes = [
            ...this.state.notes, {
                id: this.nextId(),
                note: text
            }
        ]
        // update array
        this.setState({notes})
    }
    remove(i) {
        var notes = this
            .state
            .notes
            .filter(note => note.id !== i)
        this.setState({notes})
    }
    updateNote(newText, i) {
        var notes = this
            .state
            .notes
            .map(note => (note.id !== i)
                ? note
                : {
                    ...note,
                    note: newText
                })
        this.setState({notes})
    }
    render() {
        return (
            <div className="col s4 note-container">
                <h5>{this.props.title}</h5>
                <button
                    onClick={() => {
                    this.add("Add a new note!")
                }}
                    className="waves-effect waves-light btn-large new-note-btn">Add New Note</button>
                <div className="board">
                    {this
                        .state
                        .notes
                        .map((item, i) => {
                            return (
                                <Note
                                    key={item.id}
                                    id={item.id}
                                    removeFromBoard={this.remove}
                                    updateNote={this.updateNote}>
                                    {item.note}
                                </Note>
                            );
                        })}
                </div>
            </div>

        )
    }

}
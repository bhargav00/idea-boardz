import React from 'react';

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
    render() {
        return (
            <div className="col s4 add-note-container">
                <button onClick={()=>{this.add("Add a new note!")}} className="waves-effect waves-light btn-large new-note-btn">Add New Note</button>
            </div>
        )
    }

}
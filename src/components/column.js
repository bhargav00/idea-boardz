import React from 'react';

export default class Column extends React.Component {
    render() {
        return (
                <div className="col s4 add-note-container">
                    <button className="waves-effect waves-light btn-large new-note-btn">Add New Note</button>
                </div>
        )
    }

}
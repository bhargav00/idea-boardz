import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <div className="col s12 m6">
                <div className="noteContainer card blue-grey darken-1">
                    <div className="noteText card-content white-text">
                        <div class="input-field col s6">
                            <label for="textarea1">Note</label>
                            <textarea id="textarea1" className="materialize-textarea" ref="newText"></textarea>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="waves-effect waves-light btn">Save</button>
                        <button className="waves-effect waves-light btn red darken-4">Remove</button>
                    </div>
                </div>
            </div>
        )
    }

}
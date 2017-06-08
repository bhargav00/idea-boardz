import React from 'react';
import Column from './column';
import '../css/main.css'
export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="row">
               <Column title="Things that went well"/>
               <Column title="Improvements"/>
               <Column title="Action items"/>
            </div>
        )
    }

}
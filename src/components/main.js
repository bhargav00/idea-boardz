import React from 'react';
import Column from './column';
export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="row">
               <Column/>
               <Column/>
               <Column/>
            </div>
        )
    }

}
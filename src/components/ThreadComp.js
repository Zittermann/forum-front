import React, {Component} from 'react';

function ThreadComp(props) {

    const { thread } = props;

    return (
        <div>
            <h3>{ thread.subject }</h3>
            <p>{ thread.content }</p>
        </div>
    );
}

export default ThreadComp;
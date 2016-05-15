import React from 'react';
import Intents from '../actions/default-action';
import IntentsTwo from '../actions/test-action';

const Root = props => {

    return (
        <div><h1>Hey Ho {props.counter}</h1>
            <button onClick={Intents.defaultAction}>click me</button>
            <button onClick={IntentsTwo.testAction}>click me too</button>
            <p>{props.name}</p>
        </div>  
    );
}


export default Root;
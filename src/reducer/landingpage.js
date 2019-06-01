import {combineReducers} from 'redux';
import React from 'react';
import Popup from "reactjs-popup";
import '../style/landingpage.css';

let randomWords = require('random-words');
const initialize = (<div>
    <button id="buttons"> {randomWords()} </button>
    <button id="buttons"> {randomWords()} </button>
    <button id="buttons"> {randomWords()} </button>
    <button id="buttons"> {randomWords()} </button>
    <div>
    </div>
</div>);

const counterReducer = (count = initialize, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return (
            <div>
                {count}
                <Popup trigger={<button id="buttons"> {action.payload}</button>}>
                    <a href={"http://www.dictionary.com/browse/" + action.payload}>
                        <div>{action.payload}</div>
                    </a>
                </Popup>
            </div>);
    }
    return count;
};


export default combineReducers({
    count: counterReducer,
});

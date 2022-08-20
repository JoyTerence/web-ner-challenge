import React from 'react';

import Highlighter from './highlighter';

const Editor = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <span style={{fontSize:"20px"}}>Enter your text below:</span>
                {/* <Highlighter text="the quick brown fox jumps over the lazy dog" highlight="fox the"/> */}
                <Highlighter {...props}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Editor
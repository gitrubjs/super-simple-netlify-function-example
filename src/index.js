import React from 'react';
import Fileupload from './Fileupload';
import {render} from 'react-dom';

function App(){
    return(
        <div>
            <Fileupload/>
        </div>
    )
}

render(<App/>, document.getElementById('*'));
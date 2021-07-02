import React from 'react';
import '../syles/index.scss';
import  butter from '../images/butter.png'

const App  = () => {
    return <div class="main">
        <img src={butter} alt="butter" className="butter"/>
    </div>
}

export default App;
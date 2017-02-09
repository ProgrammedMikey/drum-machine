import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import DrumMachine from './DrumMachine'
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
class ParentDrum extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* change code below this line */ }
                <DrumMachine />

                { /* change code above this line */ }
            </div>
        );
    }
};

ReactDOM.render(<ParentDrum /> , document.getElementById('root'));
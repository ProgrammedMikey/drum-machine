import React, { Component } from 'react';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ""
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        // console.log(event.keyCode);
        // event.preventDefault()
        const audio = event.keyCode ?
            document.querySelector(`audio[data-key="${event.keyCode}"]`) :
            document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
        audio.currentTime = 0;
        audio.play();
        var tr = audio.parentNode;
        var parentId = tr.getAttribute('id')
        // console.log(parentId);
        this.setState({
            display: parentId
        })
    }
    handleOnClick = (e) => {
        // e.preventDefault()
        var el = e.target.children[0]
        // console.log(el)
        el.currentTime = 0;
        el.play();

        var tr = el.parentNode;
        var parentId = tr.getAttribute('id')
        // console.log(parentId);
        this.setState({
            display: parentId
        })
    }

    render() {
        return (
            <div id="drum-machine" className="outer-container">
                <div id="display"> {this.state.display} </div>

                    <div className="drum-pad" id="clap" onClick={this.handleOnClick}> <audio className="clip" data-key="81" id="Q" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/clap.wav"/>Q</div>
                    <div className="drum-pad" id="hihat" onClick={this.handleOnClick}><audio className="clip" data-key="87" id="W" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/hihat.wav"/>W</div>
                    <div className="drum-pad" id="kick" onClick={this.handleOnClick}> <audio className="clip" data-key="69" id="E" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/kick.wav"/>E</div>
                    <div className="drum-pad" id="openhat" onClick={this.handleOnClick}><audio className="clip" data-key="65" id="A" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/openhat.wav"/>A</div>
                    <div className="drum-pad" id="boom" onClick={this.handleOnClick}> <audio className="clip" data-key="83" id="S" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/boom.wav"/>S</div>
                    <div className="drum-pad" id="ride" onClick={this.handleOnClick}><audio className="clip" data-key="68" id="D" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/ride.wav"/>D</div>
                    <div className="drum-pad" id="snare" onClick={this.handleOnClick}> <audio className="clip" data-key="90" id="Z" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/snare.wav"/>Z</div>
                    <div className="drum-pad" id="tom" onClick={this.handleOnClick}> <audio className="clip" data-key="88" id="X" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/tom.wav"/>X</div>
                    <div className="drum-pad" id="tink" onClick={this.handleOnClick}> <audio className="clip" data-key="67" id="C" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/561634/tink.wav"/>C</div>


            </div>
        );
    };
}

export default DrumMachine;
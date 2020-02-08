import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import { ReactMic }from 'react-mic';

const App = () => {
    const [state, updateState] = useState({record: true});
    const startRecording = () => {
        updateState({
            ...state,
            record: true
        });
    }

    const stopRecording = () => {
        updateState({
            ...state,
            record: false
        });
    };

    const onData = (recordedBlob: Blob): void => {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    const onStop = (recordedBlob: Blob): void => {
        console.log('recordedBlob is: ', recordedBlob);
    }
    return (
        <>
            <div className="App">
                <ReactMic
                    record={state.record}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"/>
                <button onClick={startRecording} type="button">Start</button>
                <button onClick={stopRecording} type="button">Stop</button>
            </div>
        </>
    );
}

export default App;

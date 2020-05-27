import React from 'react';
import Sidebar from './Sidebar'
import MusicControls from './MusicControls'

function App() {
  return (
    <div className="outerWrap">
        <div className="App">
            <Sidebar />
            <MusicControls />
        </div>
    </div>
  );
}

export default App;

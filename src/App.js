import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import MakeSubject from './MakeSubject';
import ExportPoints from './ExportPoints';

function App() {
  

  return (
    <>
    <div className="App">
        <h1 className='Title'>系所属点数シュミレータ</h1>
        <MakeSubject />
        
    </div>

    </>

  );
}

export default App;

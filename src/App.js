import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

document.body.style.backgroundColor = '#E6E6E6';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'White';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#E6E6E6';
      document.body.style.color = 'Black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils by Ibtesam" mode={mode} toggleMode ={toggleMode}/>
      <div className="container">
        <TextForm Heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;

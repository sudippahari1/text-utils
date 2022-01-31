import React, {useState} from 'react';
import Navbar from './components/Navbar'
import './App.css';
// import UseState from './components/UseState';
// import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextUtil';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
    return (
      <div className="App">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <UseState/> */}
        {/* <About/> */}
        <TextForm />
        <Alert alert={alert} />
      </div>
    );
  }

  export default App

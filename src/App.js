import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from "./components/Alert";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(function(){
      setAlert(null);
    }, 2000)
  }


  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enable', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Dark Mode Disable', 'warning');
    }
  }


  return (
    <>

      <Router>

          <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

          <Switch>

            <Route exact path="/">
              <div className="container my-3">
                <Alert alert={alert}/>    
              </div>

              <TextForm />
            </Route>

            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

          </Switch>

      </Router>
    

    </>
  );
}

export default App;

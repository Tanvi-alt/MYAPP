
import About from './components/About';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() 
{
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }
  const removeBackgroundClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
   removeBackgroundClasses();
   console.log(cls);
    document.body.classList.add('bg-'+cls)

    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode enabled","success");
      // document.title = "TextUtils-Dark";
      // setInterval(()=> {
      //   document.title = "TextUtils-Dark";
      // }, 1500);
      // setInterval(()=> {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
      // document.title = "TextUtils-Light";
    }

    textColor();
  }

  const textColor = () => {
    if(mode2 === 'dark'){
      setMode2('light');
    }
    else if(mode2 === 'pink'){
      setMode2('dark');
    }
    else{
      setMode2('dark');
    }
  }

  const pinkMode = ()=>{
    if(mode === "light")
    {
      setMode("pink");
      document.body.style.backgroundColor ="pink";
      showAlert("Pink mode enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    }
    textColor();
  }
  return (
    <>
  <Router>
<Navbar title="Utility" tis="about" mode={mode} toggleMode={toggleMode} pinkMode={pinkMode}/>
<Alert alert={alert}/>
<div className="container mp-3">
 

<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- word counter, character counter" mode={mode} textColor = {textColor}/>}/>
          {/* <TextForm showAlert={showAlert} heading="Enter text" mode={mode} textColor = {textColor}/> */}
</Routes>

</div>
</Router>
 </>);
    
}
// so basically if u want to route ro exact component then use keyword  exact before path cuz
// users/ ==== component 1
// users/homw/ ==== component 2
export default App;

// switch component doesnt exist so use routes intstead but syntax of swiytch use routes to enclose
// and use route like this   <Route exact path="/about" element={<About />}/>


//commit
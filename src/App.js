
import {useState} from 'react'
import AppID from 'ibmcloud-appid-js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Child from './Child'
import LoginButton from './Components/LoginButton'
import Interface from './Components/Interface'
import Greeting from './Components/Greeting'

function App() {
  const [message,setMessage] = useState("");
  const [input,setInput] = useState("");//string 
  const [result, setResult] = useState(0);
  const [operator,setOperator] = useState("");
  return (
    <Router>
      <LoginButton />
      <Switch>
        <Route exact path='/' component={Greeting} />
        <Route path='/app' render={()=><Interface input={input} setInput={setInput}
      result={result} setResult={setResult} 
      operator={operator} setOperator={setOperator} />} />
      </Switch>
      
      {/* <h1>{message}</h1>
      <Child setMessage={setMessage} /> */}
    </Router>
  );
}

export default App;

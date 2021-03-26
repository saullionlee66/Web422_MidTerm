import React from 'react';
import '../App.css';
import AppID from 'ibmcloud-appid-js';

function App() {
  const appID = React.useMemo(() => {
    return new AppID()
  }, []);

  const [errorState, setErrorState] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  (async () => {
    try {
      await appID.init({
        clientId: "36a2fe71-2bc1-4003-b93d-7b0788f60466",
        discoveryEndpoint:"https://us-south.appid.cloud.ibm.com/oauth/v4/fdee549c-fdc6-4540-9ba0-7e0c77ecdb55"
      });
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  })();

  const [welcomeDisplayState, setWelcomeDisplayState] = React.useState(false);
  const [loginButtonDisplayState, setLoginButtonDisplayState] = React.useState(true);
  const [userName, setUserName] = React.useState('');

  const loginAction = async () => {
    try {
      const tokens = await appID.signin();
      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);
      setUserName(tokens.idTokenPayload.name);
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {welcomeDisplayState && <div> Welcome {userName}! You are now authenticated.</div>}
        {loginButtonDisplayState &&
        <button
            style={{fontSize: '24px', backgroundColor: 'skyblue', border: 'none'}}
            id='login'
            onClick={loginAction}>Login
        </button>
        }
        {errorState && <div style={{color: 'red'}}>{errorMessage}</div>}
      </header>
    </div>
  );
}

export default App;

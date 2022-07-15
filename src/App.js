import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { onMessageListener, requestForToken } from './firebase';
import logo from './logo.svg';

function App() {
  requestForToken();

  onMessageListener()
    .then((payload) => {
      console.log(payload)
    })
    .catch((err) => console.log('failed: ', err));


  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

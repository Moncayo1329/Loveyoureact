import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="40px"/>
        </header>
        <h1>Fun facts about React </h1>
        <ol>
       <li>Was first realaed in 2013</li>
       <li>Was originally create by Jordan Walke</li>
       <li>Has well over 100K starts on Github</li>
       <li>Is maintained by Facebook</li>
       <li>Powers thousand of enterprise apps, incluiding mobile apps</li>
        </ol>
        <footer>
     <small>@ 2011 Mike  development. All rights reserved</small>
       
        </footer>
     
    </div>
  );
}


export default App;


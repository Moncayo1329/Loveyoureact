import logo from './logo.svg';
import './App.css';
import  Footer  from './footer';
import List from './List';



 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="40px"/>
        </header>
        <List />
        <Footer />
        
    </div>
  )
}

export default  App ;




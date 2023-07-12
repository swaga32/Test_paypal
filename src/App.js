// import logo from './logo.svg';
//Why is this app.js not a jsx file?
import './CSS/App.css';

import {NavBar} from './components/NavBar/NavBar';
import {Body} from './components/Body/Body';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

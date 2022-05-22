import './App.css';
import Login from './components/login';
// import Dashboard from './components/dashboard';
// import BuyStocks from './components/temporary folder/buyStocks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wireframe from './components/dashboard';

const API_URL = 'http://localhost:3000/Login'


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/wireframe">
            <Wireframe/>
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/buy">
            <BuyStocks/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

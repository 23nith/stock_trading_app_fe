import './App.css';
import Login from './components/login';
// import Dashboard from './components/dashboard';
// import BuyStocks from './components/temporary folder/buyStocks';
// import Wireframe from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/dashboard/menu';
import { useState } from 'react';
import Contentarea from './components/dashboard/contentarea';
import Portfolio from './components/dashboard/portfolio';
import History from './components/dashboard/history';
import Discover from './components/dashboard/discover';
import UserManagement from './components/dashboard/userManagement';

const API_URL = 'http://localhost:3000/Login'


function App() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <Router>
      <div className="App">
        {showLogin && <Login setShowLogin={setShowLogin}/>}
        {!showLogin && <div className='flex border-black border-2 h-screen'>
          <Menu setShowLogin={setShowLogin}/>
          <Switch>
            <Route exact path="/front-end-stock-app/">
              <Contentarea/>
            </Route>
            <Route exact path="/front-end-stock-app/portfolio">
              <Portfolio/>
            </Route>
            <Route exact path="/front-end-stock-app/discover">
              <Discover/>
            </Route>
            <Route exact path="/front-end-stock-app/history">
              <History/>
            </Route>
            <Route exact path="/front-end-stock-app/management">
              <UserManagement/>
            </Route>
          </Switch>
        </div>}
      </div>
    </Router>
  );
}

export default App;

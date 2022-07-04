import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/dashboard/menu';
import { useState } from 'react';
import Contentarea from './components/dashboard/contentarea';
import Portfolio from './components/dashboard/portfolio';
import History from './components/dashboard/history';
import Discover from './components/dashboard/discover';
import UserManagement from './components/dashboard/userManagement';
import TopTenContextProvider from './contexts/TopTenContext';
import TransactionsContextProvider from './contexts/TransactionsContext';
import StocksContextProvider from './contexts/StocksContext';
import GraphContextProvider from './contexts/GraphContext';
import UserContextProvider from './contexts/UserContext';
import TradersContextProvider from './contexts/TradersContext';
import SignUp from './components/signup';

const API_URL = 'https://stock-trading-app-be.herokuapp.com/Login'

function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    // <Router>
      <TopTenContextProvider>
        <TransactionsContextProvider>
          <StocksContextProvider>
            <GraphContextProvider>
              <UserContextProvider>
                <TradersContextProvider>
                  <div className="App">
                    {showLogin && <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Login
                        {...props}
                        setShowLogin={setShowLogin}
                        setShowSignUp={setShowSignUp}
                      />
                    )}
                  />}
                    {showSignUp && (
                      <Route
                        exact
                        path="/"
                        render={(props) => (
                          <SignUp
                            {...props}
                            setShowLogin={setShowLogin}
                            setShowSignUp={setShowSignUp}
                          />
                        )}
                      />
                    )}
                    {(!showLogin && !showSignUp) && <div className='flex border-black border-2 h-screen'>
                      <Menu setShowLogin={setShowLogin}/>
                        <Route exact path="/" component={Contentarea} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/discover" component={Discover} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/management" component={UserManagement} />
                    </div>}
                  </div>
                </TradersContextProvider>
              </UserContextProvider>
            </GraphContextProvider>
          </StocksContextProvider>
        </TransactionsContextProvider>
      </TopTenContextProvider>
    // </Router>
  );
}

export default App;

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

function App() {
   return (
      <Router>
         <div className="App">
            <Topbar />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route path="/home">
                  <Redirect to="/" />
               </Route>
               <Route path="/dashboard">
                  <Dashboard />
               </Route>

               {/* Redirects as the below Pages don't exist */}
               <Route path="/school">
                  <Redirect to="/" />
               </Route>
               <Route path="/businessCenter">
                  <Redirect to="/" />
               </Route>
               <Route path="/person">
                  <Redirect to="/" />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;

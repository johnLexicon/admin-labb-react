import {Switch, Route} from 'react-router-dom';
import './App.css';
import Users from './views/Users';
import CreateUser from './views/CreateUser';
import SignIn from './views/SignIn';
import Home from './views/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/users" exact><Users/></Route>
        <Route path="/create" exact><CreateUser/></Route>
        <Route path="/signin" exact><SignIn/></Route>
      </Switch>
    </div>
  );
}

export default App;

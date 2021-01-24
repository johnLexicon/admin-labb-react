import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAdminAction} from './actions/adminActions';
import {Switch, Route, Redirect} from 'react-router-dom';
import firebase from './firebase';
import './App.css';
import Users from './views/Users';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import NavBar from './components/Navbar';

function App() {
  const dispatch = useDispatch()
  const {admin} = useSelector(state => state.adminReducer)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(fbUser => {
      dispatch(setAdminAction(fbUser))
    })
  }, [dispatch])

  return (
    <div style={{height: '100vh'}}>
      <NavBar/>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/users" exact><Users/></Route>
          <Route path="/create" exact>{admin ? <CreateUser/> : <Redirect to="/" />}</Route>
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Total from './components/total';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import NewMovie from './components/newMovie';


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies" component={Total} />
          <Route path="/rentals" render={() => <h2>Rentals</h2>} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" render={() => <h2>Not found</h2>} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
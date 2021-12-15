import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/" />
      </Switch>
    </div>

  );
}


import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../about/About';
import Header from '../header/Header';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import style from './App.css';

export default function App() {
  return (
    <div className={style.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>

  );
}


// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// == Import
import HeaderPage from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import About from 'src/components/About';
import Project from 'src/components/Project';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <HeaderPage />
    <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/project"
        exact
      >
        <Project />
      </Route>
      <Route
        path="/about"
        exact
      >
        <About />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;

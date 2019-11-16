import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Artwork from './components/Artwork';
import Index from './components/Index';

const App: React.FC = () => (
    <div className="container">
      <Switch>
        <Route path="/artwork" component={Artwork}/>
        <Route path="/" component={Index}/>
        <Redirect to="/" />;
      </Switch>
    </div>
)

export default App;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import logo from './static/logo.jpg';
import './static/App.scss';
import Artwork from './components/Artwork';
import Metamask from './components/Metamask';
import Index from './components/Index';

const App: React.FC = () => (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        <Route path="/artwork" component={Artwork}/>
        <Route path="/metamask" component={Metamask}/>
        <Route path="/" component={Index}/>
        <Redirect to="/" />;
      </Switch>
    </div>
)

export default App;

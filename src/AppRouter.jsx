import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//Page comoponentes
import Navbar from './components/navbar/navbar';
import Home from './view/home/home'
import MainView from './view/mainView/mainView';
import Info from './view/info/info'
import Details from './view/details/details'
//import Footer from './components/footer/footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
            <Route exact path="/home" component={ Home } />
            <Route exact path="/" component={ MainView } />
            <Route exact path="/info" component={ Info }/>
            <Route exact path="/details/:tag" component= { Details }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

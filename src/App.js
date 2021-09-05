import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Switch>
            <Route exact path="/"> <News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"> <News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"> <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/healthscience"> <News setProgress={setProgress} key="healthscience" pageSize={pageSize} country="in" category="healthscience" /></Route>
            <Route exact path="/sports"> <News setProgress={setProgress} key="" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"> <News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            <Route exact path="/science"> <News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" /></Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
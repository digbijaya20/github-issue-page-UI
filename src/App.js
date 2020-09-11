import React from 'react';
import './App.css';
import Issues from "./components/Issues";
import { Switch, Route } from "react-router-dom";
import NewIssue from './components/newIssue';
function App() {
  return (
    <Switch>
      <Route path='/newissue' component={ NewIssue}/>
      
      <Route path='/' component={Issues}/>
    </Switch>
  );
}

export default App;

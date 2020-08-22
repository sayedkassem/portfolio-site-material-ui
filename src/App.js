import React from 'react';
import Home from'./components/index'
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from 'react-router-dom';
import './App.css';
import Resume from './components/Resume'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Route  exact path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        
        </CssBaseline>
    </div>
  );
}

export default App;

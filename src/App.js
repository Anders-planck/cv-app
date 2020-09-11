import React from 'react';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Knowledges from './pages/Knowledges'
import NotFound from './pages/NotFound'
import Portfoglio from './pages/Portfoglio'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Competences"  component={Knowledges}/>
              <Route path="/PortFoglio"  component={Portfoglio}/>
              <Route path="/Contact"  component={Contact}/>
              <Route  component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

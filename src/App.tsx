import React, { lazy, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Details = lazy(()=>import('./Component/Details'));
const Home = lazy(()=>import('./Component/Home'));


const App:React.FC=()=> {
  return (
    <div className="App" data-testid="app">
         <Suspense fallback={<p>loading...</p>}>

         <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
          </Switch>
         </BrowserRouter>
         </Suspense>
    </div>
  );
}

export default App;

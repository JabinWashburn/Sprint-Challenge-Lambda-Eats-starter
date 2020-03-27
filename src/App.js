import React from "react"
import Home from './Home'
import {BrowserRouter as Route} from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <Route exact path ='/'>
        <Home/>
      </Route>
    </div>
  );
};
export default App;

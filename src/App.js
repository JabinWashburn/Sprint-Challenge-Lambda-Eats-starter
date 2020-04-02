import React from "react"
import Home from './Home'
import Form from './Form'
import {Route} from 'react-router-dom'
import { Link } from "react-router-dom"


export default function App (){
  return (
    <div className='App'>
      <Route exact path ='/'>
        <Home/>
      </Route>
      <Route path ='/Form'>
        <Form/>
      </Route>
    </div>
  );
};

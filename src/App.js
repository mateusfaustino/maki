import { createContext, useState, useEffect } from 'react'
import {Home} from './pages/home'
import {NewPet} from './pages/new-pet/index'
import { Deck } from './pages/deck'
import { Study } from './pages/study'
import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {AuthContextProvider} from './contexts/AuthContext'
import Navbar from './components/styleguide/molecules/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <AuthContextProvider>
        <Switch id='switchTag'>
          <Route path='/' exact component={Home}/>
          <Route path='/deck/:id'  component={Deck}/>
          <Route path='/study/:id'  component={Study}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

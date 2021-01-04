import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Navigator from './components/Navigation'
import Detail from './routes/Detail'

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigator />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/movie/:id' exact component={Detail} />
      </HashRouter>
    </>
  )
}

export default App

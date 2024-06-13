import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NewApp from './components/NewApp'
import Request from './components/Request'
const App = () => {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<NewApp/>}/>
        <Route path='/allrequests' element={<Request/>}/>
    </Routes>
      
    </Router>
  )
}

export default App

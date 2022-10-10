import './App.css'
import Create from './components/create/create'
import Read from './components/read/read'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/update/update'

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3 style={{ marginBottom: "20px" }}>React Crud Operations</h3>
          <p><a href="https://63408007d1fcddf69cb9d256.mockapi.io/CRUD">(https://63408007d1fcddf69cb9d256.mockapi.io/CRUD)</a></p>
        </div>

        <div>
          <Route exact path='/' component={Create} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
        
      </div>
    </Router>
  )
}

export default App

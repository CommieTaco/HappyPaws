import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './components/Users';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={(
            <>
              <Landing/>
            </>
          )} />

          <Route path='/users' element={(
            <Users/>
          )}/>
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;

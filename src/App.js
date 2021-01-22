import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Create from './views/Create';
import Edit from './views/Edit';
import Detail from './views/Detail';
import Index from './views/Index';

function App() {
  return (
    <div className="App">
        <Router>
          <Index path='/' />
          <Detail path='/:id'/>
          <Edit path='/edit/:id'/>
          <Create path='/create' />
        </Router>
    </div>
  );
}

export default App;

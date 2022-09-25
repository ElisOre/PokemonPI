import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Vistas/Home/Home';
import DetailsPoke from './Components/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/details/:id' component={DetailsPoke} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

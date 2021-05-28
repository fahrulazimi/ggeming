import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Result from './pages/ResultPage'
import SingleResult from './pages/SingleResult'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage}>
        </Route>
        <Route path="/result" component={(props) => <Result {...props} />}></Route>
        {/* <Route path="/result" exact component={Result}></Route> */}
        <Route path="/singleresult/:id" component={(props) => <SingleResult {...props} />}>
        </Route>
        {/* <Route path="/singleresult" component={SingleResult}>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

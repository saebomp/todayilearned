import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'
import UseInput from './components/UseInput'
import UseTab from './components/UseTab'
import UseEffect from './components/UseEffect'
import LocalStorage from './components/LocalStorage'
import UseTitle from './components/UseTitle'
import UseClick from './components/UseClick'
import UseFadein from './components/UseFadein'
import Count from './components/Count'
import ProgressSteps from './components/ProgressSteps'
import Async from './components/Async'
import Todolist from './components/Todo/Todolist'
import Filter from './components/Filter'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route exact path="/useInput" component={UseInput} />
        <Route exact path="/useTab" component={UseTab} />
        <Route exact path="/useEffect" component={UseEffect} />
        <Route exact path="/localStorage" component={LocalStorage} />
        <Route exact path="/useTitle" component={UseTitle} />
        <Route exact path="/useClick" component={UseClick} />
        <Route exact path="/useFadein" component={UseFadein} />
        <Route exact path="/count" component={Count} />
        <Route exact path="/progressSteps" component={ProgressSteps} />
        <Route exact path="/async" component={Async} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/filter" component={Filter} />
      </div>
    </Router>
  );
}

const Home = () => (
  <Nav />
)
export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'
import UseInput from './components/UseInput'
import UseTab from './components/UseTab'
import UseEffect from './components/UseEffect'
import LocalStorage from './components/LocalStorage'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={Home} />
        <Route exact path="/useInput" component={UseInput} />
        <Route exact path="/useTab" component={UseTab} />
        <Route exact path="/useEffect" component={UseEffect} />
        <Route exact path="/localStorage" component={LocalStorage} />
      </div>
    </Router>
  );
}

const Home = () => (
  <Nav />
)
export default App;

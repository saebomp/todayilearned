import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Nav from './Nav'
import UseInput from './components/UseInput'
import UseTab from './components/UseTab'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title">
          <span className="back"><IoIosArrowDropleftCircle /></span>
          What I Learned
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/useInput" component={UseInput} />
        <Route exact path="/useTab" component={UseTab} />
      </div>
    </Router>
  );
}

const Home = () => (
  <Nav />
)
export default App;

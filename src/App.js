import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'
import LocalStorage from './components/LocalStorage'
import Count from './components/Count'
import ProgressSteps from './components/ProgressSteps'
import Async from './components/Async'
import Todolist from './components/Todo/Todolist'
import Filter from './components/Filter'
import Bind from './components/Bind'
import Props from './components/Props'
import Formwave from './components/Formwave'
import SetTimeOut from './components/SetTimeOut'
import ToggleClassName from './components/ToggleClassName'
import Flexbox from './components/Flexbox'
import CenterElement from './components/CenterElement'
import DarkMode from './components/DarkMode/DarkMode'
import MobileNavigation from './components/MobileNavigation'
import Drawing from './components/Drawing'
import StickyNavigation from './components/StickyNavigation'
import Form from './components/Form'
import Crud from './components/Crud'
import CrudHooks from './components/CrudHooks'
import Calculator from './components/Calculator/Calculator'
import Menu from './components/Menu'
import Crudprops from './components/Crud/Crudprops'
import Form_state from './components/Form_state'
import Crud2 from './components/Crud2/Crud2'
import Crudprops2 from './components/Crud2/Crudprops2'
import Crudhooks2 from './components/Crud2/Crudhooks2'
import Crudhooks3 from './components/Crud2/Crudhooks3'
import Crud3 from './components/Crud2/Crud3'



function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route exact path="/localStorage" component={LocalStorage} />
        <Route exact path="/count" component={Count} />
        <Route exact path="/progressSteps" component={ProgressSteps} />
        <Route exact path="/async" component={Async} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/filter" component={Filter} />
        <Route exact path="/bind" component={Bind} />
        <Route exact path="/props" component={Props} />
        <Route exact path="/formwave" component={Formwave} />
        <Route exact path="/setTimeOut" component={SetTimeOut} />
        <Route exact path="/toggleClassName" component={ToggleClassName} />
        <Route exact path="/flexbox" component={Flexbox} />
        <Route exact path="/centerElement" component={CenterElement} />
        <Route exact path="/darkMode" component={DarkMode} />
        <Route exact path="/mobileNavigation" component={MobileNavigation} />
        <Route exact path="/drawing" component={Drawing} />
        <Route exact path="/stickyNavigation" component={StickyNavigation} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/crud" component={Crud} />
        <Route exact path="/crudhooks" component={CrudHooks} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/Crudprops" component={Crudprops} />
        <Route exact path="/form_state" component={Form_state} />
        <Route exact path="/crud2" component={Crud2} />
        <Route exact path="/crudprops2" component={Crudprops2} />
        <Route exact path="/crudhooks2" component={Crudhooks2} />
        <Route exact path="/crudhooks3" component={Crudhooks3} />
        <Route exact path="/crud3" component={Crud3} />
      </div>
    </Router>
  );
}

const Home = () => (
  <Nav />
)
export default App;

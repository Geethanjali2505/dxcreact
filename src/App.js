import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
 
function App() {
  return (
    <div className="App">
    <h1 className = {styles.success}>success</h1>
    <h1 className = 'error'>error</h1>
      <Inline/>
      <Stylesheet  enabled = {true}/>
       <NameList/>
       <ClassClick/>
    <FunctionClick/>
       <Counter/>
       <ParentComponent/>
       <UserGreeting/>
       
    <Message/>
    
    <Greet name = "virat"  college = "IIT">
      <p> this is children property</p>
    </Greet>

    <Greet name = "kohli" college = "Oxford">
      <button>click me</button>
    </Greet>
    <Greet />

    <Welcome name ="virat" alias = "kohli"/>
    <EventBind/>
    </div>
  );
}

export default App;
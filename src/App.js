import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
 



function App() {
  return (
    <div className="App">
       <ClassClick/>
    <FunctionClick/>
       <Counter/>
       <ParentComponent/>
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
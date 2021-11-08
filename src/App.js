import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
 

function App() {
  return (
    <div className="App">
    <Greet name = "geethanjali"  college = "IIT">
      <p> this is children property</p>
    </Greet>
    <Greet name = "charvakula" college = "Oxford"/>
    

    <Welcome/>

    </div>
  );
}

export default App;
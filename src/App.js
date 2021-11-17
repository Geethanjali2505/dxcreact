import './App.css';
import PortalDemo from './components/Portal/PortalDemo';

import FrParentInput from './components/refs/FrParentInput';


function App() {
  return (
    <div className="App">
    <FrParentInput/>
    <PortalDemo/>
    </div>
  );
}

export default App;
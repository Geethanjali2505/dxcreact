import logo from './logo.svg';
import './App.css';
import DataFetching from './components/useeffecthook/DataFetching';
import ComponentA from './components/contexthook/ComponentA';
import React from 'react';


export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {'anjali'} >
        <ComponentA/>
     </UserContext.Provider>
    </div>
  );
}

export default App;
import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDataEffect from './components/fetchDataEffect';
import ComponentOne from './components/ComponentOne';
import { UserProvider } from './Contexts/UserContext';

export const Data = createContext();

function App() {
  const name = 'John Doe';

  return (
    <UserProvider>
    <Data.Provider value={name}>
      <FetchDataEffect/>
      <ComponentOne/>
    </Data.Provider>
    </UserProvider>
  )
}

export default App



import { Outlet } from 'react-router-dom'
import Header from './components/constants/Header/Header'

function App() {
  return (
  
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App

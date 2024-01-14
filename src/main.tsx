import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements , Route } from 'react-router-dom'
import {  Users, } from 'lucide-react'
import About from './pages/About/About.tsx'
import Contact from './pages/Contact/Contact.tsx'
import Home from './pages/Home/Home.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={ <App /> }>
      <Route path='/' element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='users' element={ <Users /> } />
      <Route path='contact' element={ <Contact /> } />
      {/* <Route path='*' element={ <NoMatch /> } /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  
<React.StrictMode>
  <RouterProvider router={router}/>
    
  </React.StrictMode>
  </ThemeProvider >
  )

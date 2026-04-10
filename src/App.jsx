import './App.css'
import './components/Home.css'
import './components/Paste.css'
import './components/Navbar.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import Paste from './components/Paste'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div className='homeNav'>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: 
      <div className='homeNav'>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: 
      <div className='homeNav'>
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
)
function App() {

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

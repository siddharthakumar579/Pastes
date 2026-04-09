import './App.css'
import './components/Home.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import Createpaste from './components/Createpaste'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: 
      <div>
        <Navbar />
        <Createpaste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: 
      <div>
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

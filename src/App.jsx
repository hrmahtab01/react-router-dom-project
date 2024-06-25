import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Skill from './Skill'
import Resume from './Resume'
import Root from './Root'
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'
import Home from './Home'

let router =createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/Skill' element={<Skill/>}></Route>
    <Route path='/resume' element={<Resume/>}></Route>

  </Route>
)
);




function App() {

  return <RouterProvider router={router}/>
  

}

export default App

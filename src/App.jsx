import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Clients from './pages/Clients'
import EditClient from './pages/EditClient'
import NewClient from './pages/NewClient'
import SeeClient from './pages/SeeClient'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout></Layout>}   >
          <Route index element={<Clients></Clients>} />
          <Route path='new' element={<NewClient></NewClient>}/>
          <Route path=':id' element={<SeeClient></SeeClient>}/>
          <Route path='edit/:id' element={<EditClient></EditClient>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

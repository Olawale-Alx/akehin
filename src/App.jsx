import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spinner } from 'reactstrap'

const Home = lazy(() => import('../src/Pages/Home'))


import './App.css'


function App() {

  return (
    <Suspense fallback={<div className='position-absolute top-50 start-50 translate-middle'> <Spinner type='grow' className='bg-primary' /> </div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </Suspense>
    
  )
}

export default App

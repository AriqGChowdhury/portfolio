import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Nav />
        <main className='flex-1'>
          <Routes>
            <Route
              path='/'
              element={
                <Home />
              }
            />
            <Route
              path='/experience'
              element={
                <Experience />
              }
            />
            <Route
              path='/projects'
              element={
                <Projects />
              }
            />
            <Route
              path='/contact'
              element={
                <Contact />
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

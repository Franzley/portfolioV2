import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './js/views/Home'
import About from './js/views/About'
import Navbar from './js/components/Navbar'
import Footer from './js/components/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
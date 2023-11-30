import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './js/views/Home'
import About from './js/views/About'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './js/views/Home'
import About from './js/views/About'
import Projects from './js/views/Projects'
import Navbar from './js/components/Navbar'
import Footer from './js/components/Footer'
import { MyContext } from './js/components/AppContext'
import { useState } from 'react'

const App = () => {
    const [text, setText] = useState("");
    return (
        <MyContext.Provider value={{ text, setText }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects/:project" element={<Projects />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </MyContext.Provider>
    )
}

export default App
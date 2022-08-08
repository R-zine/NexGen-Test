import { useState } from 'react'
import './App.css'
import Background from './Backgroung'
import ContactFormMain from './ContactFormMain'

function App() {
    return (
        <div className="App">
            <ContactFormMain />
            <Background />
        </div>
    )
}

export default App

import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import React from 'react'
const KEY = 'ohg5Z0I2qocabN6TrIojwkyo48DXZa8B6e3aPsPX'

function App() {
    const [formSubmit, setFormSubmit] = React.useState(false)
    const [imageSrc, setImageSrc] = React.useState()

    function formAction(e) {
        e.preventDefault()
        setFormSubmit(true)
    }

    React.useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`).then(res => {
            setImageSrc(res.data.url)
            console.log('called')
        })
        setFormSubmit(false)
    }, [formSubmit])

    return (
        <div className="App">
            <form onSubmit={formAction}>
                <button type="submit">Generate</button>
            </form>
            <div>
                <img src={imageSrc} />
            </div>
        </div>
    )
}

export default App

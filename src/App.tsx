import { useState } from 'react'
import './App.css'

interface Weather {
  temp: number
  condition: string
  location: string
}

function App() {
  const [weather] = useState<Weather>({
    temp: 22,
    condition: 'Güneşli',
    location: 'İstanbul'
  })

  return (
    <div className="container">
      <h1 className="title">Hava Durumu</h1>
      <div className="weather-card">
        <div className="location">{weather.location}</div>
        <div className="temp">{weather.temp}°C</div>
        <div className="condition">{weather.condition}</div>
      </div>
    </div>
  )
}

export default App
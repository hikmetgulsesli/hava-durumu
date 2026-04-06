import { useState, useEffect } from 'react'
import './App.css'
import { ForecastList, type ForecastDay } from './components/ForecastList'

interface Weather {
  temp: number
  condition: string
  location: string
}

const FORECAST_DATA: ForecastDay[] = [
  { day: 'Pazartesi', high: 24, low: 16, icon: 'wb_sunny', condition: 'Güneşli' },
  { day: 'Salı', high: 22, low: 15, icon: 'cloud', condition: 'Parçalı Bulutlu' },
  { day: 'Çarşamba', high: 19, low: 14, icon: 'rainy', condition: 'Yağmurlu' },
  { day: 'Perşembe', high: 21, low: 14, icon: 'thunderstorm', condition: 'Fırtınalı' },
  { day: 'Cuma', high: 23, low: 15, icon: 'cloud', condition: 'Kapalı' },
]

function App() {
  const [weather] = useState<Weather>({
    temp: 22,
    condition: 'Güneşli',
    location: 'İstanbul'
  })

  const [forecast] = useState<ForecastDay[]>(FORECAST_DATA)

  useEffect(() => {
    const interval = setInterval(() => {
      // Real-time updates could go here
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <h1 className="title">Hava Durumu</h1>
      <div className="weather-card">
        <div className="location">{weather.location}</div>
        <div className="temp">{weather.temp}°C</div>
        <div className="condition">{weather.condition}</div>
      </div>
      <ForecastList forecasts={forecast} />
    </div>
  )
}

export default App

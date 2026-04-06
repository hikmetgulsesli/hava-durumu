import { useState } from 'react'
import { MapPin, Droplets, Wind } from 'lucide-react'
import './App.css'

interface Weather {
  location: string
  temp: number
  condition: string
  humidity: number
  wind: number
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [weather, setWeather] = useState<Weather>({
    location: 'İstanbul',
    temp: 24,
    condition: 'Parçalı Bulutlu',
    humidity: 65,
    wind: 12
  })
  const [loading, setLoading] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setLoading(true)
    // Simulate API call - in real implementation, would call weather API
    setTimeout(() => {
      setWeather(prev => ({
        ...prev,
        location: searchQuery,
        temp: Math.round(18 + Math.random() * 10),
        condition: ['Güneşli', 'Parçalı Bulutlu', 'Bulutlu', 'Yağmurlu'][Math.floor(Math.random() * 4)]
      }))
      setLoading(false)
    }, 500)
  }

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Şehir ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* Weather Card */}
      <div className="weather-card">
        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : (
          <>
            {/* Location */}
            <div className="location">
              <MapPin size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              {weather.location}
            </div>

            {/* Temperature */}
            <div className="temp-container">
              <span className="temp">{weather.temp}</span>
              <span className="temp-unit">°C</span>
            </div>

            {/* Condition */}
            <div className="condition">{weather.condition}</div>

            {/* Weather Details */}
            <div className="weather-details">
              <div className="detail-item">
                <div className="detail-label">Nem</div>
                <div className="detail-value">
                  <Droplets size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {weather.humidity}%
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Rüzgar</div>
                <div className="detail-value">
                  <Wind size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {weather.wind} km/s
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Hissedilen</div>
                <div className="detail-value">{weather.temp - 2}°</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App

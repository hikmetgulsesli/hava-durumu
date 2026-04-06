import './ForecastList.css'

export interface ForecastDay {
  day: string
  high: number
  low: number
  icon: string
  condition: string
}

interface ForecastListProps {
  forecasts: ForecastDay[]
}

function getWeatherIcon(condition: string): string {
  const lower = condition.toLowerCase()
  if (lower.includes('güneş') || lower.includes('gune') || lower.includes('clear')) return 'wb_sunny'
  if (lower.includes('bulut') || lower.includes('cloud')) return 'cloud'
  if (lower.includes('yağmur') || lower.includes('yagmur') || lower.includes('rain')) return 'rainy'
  if (lower.includes('kar') || lower.includes('snow')) return 'ac_unit'
  if (lower.includes('fırtına') || lower.includes('firtina') || lower.includes('storm')) return 'thunderstorm'
  if (lower.includes('sis') || lower.includes('fog')) return 'foggy'
  return 'cloud'
}

export function ForecastList({ forecasts }: ForecastListProps) {
  if (forecasts.length === 0) {
    return <div className="forecast-empty">5 günlük tahmin bulunamadı</div>
  }

  return (
    <div className="forecast-list">
      <h2 className="forecast-title">5 Günlük Tahmin</h2>
      <div className="forecast-grid">
        {forecasts.map((day, index) => (
          <div key={index} className="forecast-card">
            <span className="forecast-day">{day.day}</span>
            <span className="material-symbols-outlined forecast-icon">{getWeatherIcon(day.condition)}</span>
            <span className="forecast-high">{day.high}°</span>
            <span className="forecast-low">{day.low}°</span>
          </div>
        ))}
      </div>
    </div>
  )
}

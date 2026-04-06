import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ForecastList } from './ForecastList'

describe('ForecastList', () => {
  it('renders 5-day forecast', () => {
    const forecasts = [
      { day: 'Pazartesi', high: 24, low: 16, icon: 'wb_sunny', condition: 'Güneşli' },
      { day: 'Salı', high: 22, low: 15, icon: 'cloud', condition: 'Parçalı Bulutlu' },
      { day: 'Çarşamba', high: 19, low: 14, icon: 'rainy', condition: 'Yağmurlu' },
      { day: 'Perşembe', high: 21, low: 14, icon: 'thunderstorm', condition: 'Fırtınalı' },
      { day: 'Cuma', high: 23, low: 15, icon: 'cloud', condition: 'Kapalı' },
    ]
    render(<ForecastList forecasts={forecasts} />)
    expect(screen.getByText('Pazartesi')).toBeTruthy()
    expect(screen.getByText('Salı')).toBeTruthy()
    expect(screen.getByText('Çarşamba')).toBeTruthy()
    expect(screen.getByText('Perşembe')).toBeTruthy()
    expect(screen.getByText('Cuma')).toBeTruthy()
  })

  it('shows high and low temperatures', () => {
    const forecasts = [
      { day: 'Pazartesi', high: 24, low: 16, icon: 'wb_sunny', condition: 'Güneşli' },
    ]
    render(<ForecastList forecasts={forecasts} />)
    expect(screen.getByText('24°')).toBeTruthy()
    expect(screen.getByText('16°')).toBeTruthy()
  })

  it('shows empty state when no forecast', () => {
    render(<ForecastList forecasts={[]} />)
    expect(screen.getByText('5 günlük tahmin bulunamadı')).toBeTruthy()
  })
})

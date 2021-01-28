export type GeolocationDataType = {
  country: string
  town: string
}

export type FetchGeolocatonData = {
  results: {
    components: {
      country: string
      town: string
    }
  }[]
}

export type WeatherDataType = {
  temp_c: number | null
  icon: string | null
  text: string | null
  feelslike_c: number | null
  wind_kph: number | null
  humidity: number | null
}

export type FetchWeatherData = {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  current: {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
}

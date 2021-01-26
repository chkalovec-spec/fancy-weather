export type GeolocationDataType = {
  country: string
  town: string
}

export type fetchGeolocatonData = {
  results: {
    components: {
      country: string
      town: string
    }
  }[]
}

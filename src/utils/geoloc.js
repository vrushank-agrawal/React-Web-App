export const convertAddressFromGoogleToCodenekt = (data, details) => {
  let country = ''
  let city = ''
  details.address_components.forEach((comp) => {
    comp.types.forEach((type) => {
      if(type === 'country') {
        country = comp.long_name
      }
      if(type === 'locality') {
        city = comp.long_name
      }
    })
  })
  let newAddress={
    raw:details.formatted_address,
    country: {
      libelle: country
    },
    city: {
      libelle: city
    },
    long: details.geometry.location.lng,
    lat: details.geometry.location.lat,
  }
  return newAddress
}

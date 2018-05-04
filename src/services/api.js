const API_ROOT = 'https://2.vbb.transport.rest'

const callAPI = endpoint => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response => response.json())
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something really bad happened' })
    )
}

export const fetchLocation = ({ lat, lon }) => callAPI(`/stations/nearby?latitude=${lat}&longitude=${lon}`)

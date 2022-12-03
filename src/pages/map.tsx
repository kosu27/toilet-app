/* eslint-disable import/no-default-export */
/* eslint-disable react/jsx-handler-names */
import type { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map: FC = () => {
  const [viewState, setViewState] = useState({
    longitude: 130.7159,
    latitude: 33.5663,
    zoom: 15,
  })

  const sucessCallback = (position: any) => {
    setViewState((prevState) => {
      return {
        ...prevState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
    })
  }
  const errorCallback = (error: any) => {
    alert(error)
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback)
  }, [])

  return (
    <ReactMapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      style={{ width: '100vw', height: '100vh' }}
      {...viewState}
      onMove={(evt) => {
        return setViewState(evt.viewState)
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
    />
  )
}

export default Map

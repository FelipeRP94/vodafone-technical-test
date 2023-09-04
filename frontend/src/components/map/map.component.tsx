import {
  GoogleMap,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";
import { MapMarker, MapPosition } from "../../model/map.model";
import { useState } from "react";
import { MapMarkerComponent } from "./map-marker.component";

const containerStyle = {
  width: "100%",
  height: "500px",
  flex: 1,
};

// Málaga coordinates
const defaultCenter = {
  lat: 36.719444,
  lng: -4.42,
};

const defaultZoom = 11;

interface Props {
  markers?: MapMarker[];
  center?: MapPosition;
  zoom?: number;
  getClickPosition?: (position: MapPosition) => void;
}

export const Map = ({ markers, center, zoom, getClickPosition }: Props) => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [newMarker, setNewMarker] = useState<MapMarker | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });

  const handleOnClick = (event: any) => {
    const position = {
      lat: event.latLng?.lat() || 0,
      lng: event.latLng?.lng() || 0,
    };

    if (getClickPosition) {
      getClickPosition(position);
      setNewMarker({
        id: "new-marker",
        position,
        title: "New marker",
      });
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center || defaultCenter}
      zoom={zoom || defaultZoom}
      onClick={handleOnClick}
    >
      {newMarker && (
        <MapMarkerComponent
          marker={newMarker}
          isSelected={selectedMarker?.id === newMarker.id}
          setSelectedMarker={setSelectedMarker}
        />
      )}
      {markers && (
        <MarkerClusterer maxZoom={14} averageCenter={true}>
          {(clusterer) => (
            <div>
              {markers.map((marker) => (
                <MapMarkerComponent
                  clusterer={clusterer}
                  marker={marker}
                  isSelected={selectedMarker?.id === marker.id}
                  setSelectedMarker={setSelectedMarker}
                />
              ))}
            </div>
          )}
        </MarkerClusterer>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

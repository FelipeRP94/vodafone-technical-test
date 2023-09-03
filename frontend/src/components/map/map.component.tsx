import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { MapMarker, MapPosition } from "../../model/map.model";
import { useState } from "react";

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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center || defaultCenter}
      zoom={zoom || defaultZoom}
      onClick={(event) =>
        getClickPosition &&
        getClickPosition({
          lat: event.latLng?.lat() || 0,
          lng: event.latLng?.lng() || 0,
        })
      }
    >
      {markers && (
        <MarkerClusterer maxZoom={14} averageCenter={true}>
          {(clusterer) => (
            <div>
              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  label={marker.title}
                  onClick={marker.onClick}
                  onMouseOver={(_) => setSelectedMarker(marker)}
                  onMouseOut={(_) => setSelectedMarker(null)}
                  clusterer={clusterer}
                  icon={{
                    url: require("../../assets/img/marker-icon.png"),
                    scaledSize: new google.maps.Size(40, 40),
                    size: new google.maps.Size(40, 100),
                    origin: new google.maps.Point(0, 0),
                  }}
                >
                  {selectedMarker?.id === marker.id && marker.infoComponent && (
                    <InfoWindow
                      position={marker.position}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      {marker.infoComponent}
                    </InfoWindow>
                  )}
                </Marker>
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

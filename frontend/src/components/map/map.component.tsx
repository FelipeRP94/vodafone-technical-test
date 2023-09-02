import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { MapMarker } from "../../model/map.model";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Málaga coordinates
const center = {
  lat: 36.719444,
  lng: -4.42,
};

interface Props {
  markers?: MapMarker[];
}

export const Map = ({ markers }: Props) => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {markers && (
        <MarkerClusterer maxZoom={14} averageCenter={true}>
          {(clusterer) => (
            <div>
              {markers.map((marker) => (
                <Marker
                  key={marker.title}
                  position={{
                    lat: marker.latitude,
                    lng: marker.longitude,
                  }}
                  label={marker.title}
                  onClick={marker.onClick}
                  onMouseOver={(_) => setSelectedMarker(marker)}
                  onMouseOut={(_) => setSelectedMarker(null)}
                  clusterer={clusterer}
                  icon={{
                    url: require("../../assets/img/vodafone-logo.png"),
                    scaledSize: new google.maps.Size(65, 65),
                    origin: new google.maps.Point(0, -20),
                  }}
                >
                  {selectedMarker?.id === marker.id && (
                    <InfoWindow
                      position={{
                        lat: marker.latitude,
                        lng: marker.longitude,
                      }}
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

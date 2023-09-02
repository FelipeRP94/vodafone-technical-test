export interface MapMarker {
  id: string;
  latitude: number;
  longitude: number;
  title?: string;
  infoComponent?: JSX.Element;
  onClick?: () => void;
}

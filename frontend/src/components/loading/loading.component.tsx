import { CircularProgress } from "@mui/material/";
import { LoadingContainer } from "./loading.styles";

export const Loading = () => (
  <LoadingContainer>
    <CircularProgress size={50} />
    <p>Loading...</p>
  </LoadingContainer>
);

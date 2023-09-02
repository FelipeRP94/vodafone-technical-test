import { LoadingContainer, Spinner } from "./loading.styles";

export const Loading = () => (
  <LoadingContainer>
    <Spinner size={50} />
    <p>Loading...</p>
  </LoadingContainer>
);

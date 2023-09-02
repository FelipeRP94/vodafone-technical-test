import { CircularProgress } from "@mui/material";
import { styled } from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: 100px;
`;

export const Spinner = styled(CircularProgress)`
  color: var(--primary-color) !important;
`;

import Button from "@mui/material/Button";
import { styled } from "styled-components";

export const CreateDeviceButton = styled(Button)`
  margin: 10px 0 !important;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

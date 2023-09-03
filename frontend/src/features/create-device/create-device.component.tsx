import {
  CreateDeviceButton,
  Form,
  FormContainer,
} from "./create-device.styles";
import { Map } from "../../components/map/map.component";
import { TextInput } from "../../components/textInput/text-input.component";
import { useCreateDevice } from "./useCreateDevice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DialogContent } from "@mui/material";

export const CreateDevice = () => {
  const {
    setPositionFromMap,
    onSubmit,
    control,
    errors,
    toogleModal,
    modalOpen,
  } = useCreateDevice();

  return (
    <>
      <CreateDeviceButton variant="contained" onClick={toogleModal}>
        Create device
      </CreateDeviceButton>
      <Dialog onClose={toogleModal} open={modalOpen} maxWidth="lg" fullWidth>
        <DialogTitle>Create device</DialogTitle>
        <DialogContent>
          <FormContainer>
            <Form onSubmit={onSubmit}>
              <TextInput
                label="Name"
                control={control}
                name="name"
                errorMessage={errors.name?.message}
              />
              <TextInput
                label="Mobile number"
                control={control}
                name="mobileNumber"
                errorMessage={errors.mobileNumber?.message}
              />
              <Stack direction="row" spacing={2}>
                <TextInput
                  label="Latitude"
                  control={control}
                  name="latitude"
                  errorMessage={errors.latitude?.message}
                />
                <TextInput
                  label="Longitude"
                  control={control}
                  name="longitude"
                  errorMessage={errors.longitude?.message}
                />
              </Stack>
              <span>
                (You can set the latitude and longitude by clicking in the map.)
              </span>

              <Button type="submit" variant="contained">
                Save device
              </Button>
            </Form>
            <Map getClickPosition={setPositionFromMap} />
          </FormContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import TextField from "@mui/material/TextField";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  errorMessage?: string;
  label: string;
}

export const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  errorMessage,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <TextField
            label={label}
            variant="standard"
            error={!!errorMessage}
            fullWidth={true}
            {...field}
          />
          {errorMessage && (
            <FormHelperText error>{errorMessage}</FormHelperText>
          )}
        </>
      )}
    />
  );
};

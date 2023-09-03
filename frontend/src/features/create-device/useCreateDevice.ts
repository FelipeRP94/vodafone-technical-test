import { client } from "../../lib/apollo-client/apollo.config";
import { DeviceFormInput } from "../devices-list/device.model";
import { GET_DEVICES } from "../devices-list/useDevices";
import { gql, useMutation } from "@apollo/client";
import { MapPosition } from "../../model/map.model";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CREATE_DEVICE = gql`
  mutation Mutation($device: DeviceInput!) {
    createDevice(device: $device) {
      id
      name
      mobileNumber
      lastConnection
      latitude
      longitude
    }
  }
`;

const defaultDeviceForm = {
  name: "",
  mobileNumber: "",
  latitude: 0,
  longitude: 0,
};

export const useCreateDevice = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toogleModal = () => {
    setModalOpen(!modalOpen);
  };

  const schema = yup.object({
    name: yup.string().required("Name field is required"),
    latitude: yup.number().required("Latitude field is required"),
    longitude: yup.number().required("Longitude field is required"),
    mobileNumber: yup.string().required("Mobile number field is required"),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    getValues,
  } = useForm<DeviceFormInput>({
    resolver: yupResolver(schema),
    defaultValues: defaultDeviceForm,
  });

  const [createDevice] = useMutation(CREATE_DEVICE, {
    onCompleted: async ({ createDevice }) => {
      if (createDevice) {
        await client.refetchQueries({
          include: [GET_DEVICES],
        });
        toogleModal();
        reset(defaultDeviceForm);
        toast.success("Device created successfully");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = handleSubmit((data: DeviceFormInput) => {
    createDevice({
      variables: { device: { lastConnection: new Date(), ...data } },
    });
  });

  const setPositionFromMap = ({ lat, lng }: MapPosition) => {
    setValue("latitude", lat);
    setValue("longitude", lng);
  };

  return {
    errors,
    control,
    onSubmit,
    setPositionFromMap,
    toogleModal,
    modalOpen,
    getValues,
  };
};

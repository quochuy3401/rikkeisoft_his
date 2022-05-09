import * as Yup from "yup";

const patient = {
  patientId: "23812739812",
  name: "",
  dob: "",
  gender: "",
  ethnic: "",
  addressId: null,
  detailAddress: "",
  phoneNumber: "",
  relative: "",
  relationship: "",
  phoneNumRelative: "",
  addrRelative: "",
};

// chưa có trường đối tượng
const record = {
  recordId: "",
  doiTuong:"",
  insuranceCode: "",
  patientStatus: "",
  date: new Date().toISOString().split("T")[0], // examination day
  numberOrder: "",
  diagnosisType: "",
  clinicId: "",
  preHospital: "",
  disease: "",
  priority: 1,
  status: "",
};

export const initialValues = {
  ...patient,
  ...record,
};

export const patientSchema = Yup.object({
  name: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  ethnic: Yup.string().required("Required"),
  addressId: Yup.string().required("Required"),
});

export const recordSchema = Yup.object({
  // chua validate doi tuong
  patientStatus: Yup.string().required("Required"),
  diagnosisType: Yup.string().required("Required"),
  clinicId: Yup.string().required("Required"),
})
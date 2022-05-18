import * as Yup from "yup";

const patient = {
  patientId: "",
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
  doiTuong: "",
  insuranceCode: "",
  searchingInsurance: "",
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
  addressId: Yup.number().required("Required"),
});

export const recordSchema = Yup.object({
  // chua validate doi tuong
  patientStatus: Yup.string().required("Required"),
  diagnosisType: Yup.string().required("Required"),
  clinicId: Yup.number().required("Required"),
})


// disable fields
const newPatient = ["patientId", "recordId", "searchingInsurance"]

const searchingPatient = [
  "name",
  "dob",
  "gender",
  "ethnic",
  "addressId",
  "detailAddress",
  "phoneNumber",
  "relative",
  "relationship",
  "phoneNumRelative",
  "addrRelative",
  "clinicId",
  "preHospital",
  "disease",
  "diagnosisType",
  "patientStatus",
  "doiTuong",
  "insuranceCode"]

export const listMode = [
  { action: "create", disableButtons: ["create", "update", "delete", "print"], disableFields: [...newPatient] },
  { action: "show", disableButtons: ["submit", "cancel"], disableFields: [...newPatient, ...searchingPatient] },
  { action: "search", disableButtons: ["update", "delete", "submit", "cancel", "print"], disableFields: [...searchingPatient] },
  { action: "update", disableButtons: ["create", "update", "delete", "print"], disableFields: [...newPatient] },

]
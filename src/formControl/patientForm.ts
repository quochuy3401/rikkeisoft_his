import * as Yup from "yup";

const patient = {
  patientId: "",
  name: "",
  dob: "",
  gender: "",
  ethnic: "",
  addressId: "",
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

const validationPatientSchema = Yup.object({
  name: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  ethnic: Yup.string().required("Required"),
  addressId: Yup.string().required("Required"),

});

const validationRecordSchema = Yup.object({
  // chua validate doi tuong
  patientStatus: Yup.string().required("Required"),
  diagnosisType: Yup.string().required("Required"),
  clinicId: Yup.string().required("Required"),
})
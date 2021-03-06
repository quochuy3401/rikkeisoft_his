import { Formik, Form, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { TextField } from "../../share/TextField/TextField";
import { useNavigate } from "react-router-dom";
import "./PatientForm.css";
import {
  initialValues,
  patientSchema,
  listMode,
} from "../../formControl/patientFormController.ts";
import { SelectField } from "../../share/SelectField/SelectField";
import {
  fakeOptions,
  relationship,
  gender,
} from "../../formControl/patientFormOption";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "../../share/Button/CusButton";
import { ClinicInfo } from "../ClinicInfo/ClinicInfo";
import RightClickMenu from "../RightClickMenu/RightClickMenu";

export const PatientForm = () => {
  const formikRef = useRef();
  const [disableFields, setDisableFields] = useState([""]);
  const [disableButtons, setDisableButtons] = useState([""]);
  const [action, setAction] = useState("SEARCH");
  const navigate = useNavigate()

  const changeMode = (action) => {
    const mode = listMode.find((mode) => mode.action === action);
    setDisableButtons(mode.disableButtons);
    setDisableFields(mode.disableFields);
  };
  useEffect(() => {
    switch (action) {
      case "CREATE":
        formikRef.current?.resetForm();
        changeMode("create");
        break;
      case "UPDATE":
        changeMode("update");
        break;
      case "DELETE":
        console.log("doi api delete");
        break;
      case "SEARCH":
        formikRef.current?.resetForm();
        changeMode("search");
        break;
      case "PRINT":
        console.log(formikRef.current?.values);
        navigate('/queueCard');
        break;
      case "SUBMIT":
        console.log("doi api submit");
        changeMode("show");
        break;
      default:
        formikRef.current?.resetForm();
        changeMode("search");
    }
  }, [action]);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
        var form = event.target.form;
        var index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
      }
    });
  }, []);

  return (
    <Container fluid>
      
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={patientSchema}
        onSubmit={() => {
          setAction("SUBMIT");
        }}
      >
        {(formikProps) => {
          const handleCreate = () => {
            setAction("CREATE");
          };
          const handleUpdate = () => {
            setAction("UPDATE");
          };
          const handleDelete = () => {
            setAction("DELETE");
          };
          const handleCancel = () => {
            setAction("CANCEL");
          };
          const handlePrint = () => {
            setAction("PRINT");
          };

          return (
            <Form className="patient-form">
              {/* <div class="container-tab">
                <button type="button" class="btn-tab btn-welcome">Ti???p nh???n b???nh nh??n</button>
                <button type="button" class="btn-tab btn-list">Danh s??ch b???nh nh??n</button>
              </div> */}
              <Row style={{ marginTop: "0px" }}>
                {/* left-side */}
                <Col xl={8}>
                  <div className="left-side">
                  {/* <RightClickMenu/> */}
                    {/* h???  s??*/}
                    <div className="block shadow-fb">
                      <div className="category-title">H??? s??</div>
                      <Row>
                        <Col xl={3}>
                          <Field
                            name="patientId"
                            label="M?? BN"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="recordId"
                            label="S??? HS"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="searchingInsurance"
                            label="Th???"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="name"
                            label="T??n b???nh nh??n"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="dob"
                            label="Tu???i"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="gender"
                            label="Gi???i t??nh"
                            component={SelectField}
                            options={gender}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="ethnic"
                            label="D??n t???c"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="phoneNumber"
                            label="S??T"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="addressId"
                            label="?????a ch???"
                            component={SelectField}
                            options={fakeOptions}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="detailAddress"
                            label="?????a ch??? chi ti???t"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="relative"
                            label="Ng?????i th??n"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="relationship"
                            label="Quan h???"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="addrRelative"
                            label="?????a ch??? li??n h???"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* ?????i t?????ng b???nh nh??n */}
                    <div className="block shadow-fb">
                      <div className="category-title">Ti???p nh???n h??? s??</div>
                      <Row>
                        <Col xl={6}>
                          <Field
                            name="doiTuong"
                            label="?????i t?????ng"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="insuranceCode"
                            label="S??? th???"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* th??ng tin kh??m */}
                    <div className="block shadow-fb">
                      <div className="category-title">Th??ng tin kh??m</div>
                      <Row>
                        <Col xl={6}>
                          <Field
                            name="patientStatus"
                            label="T??nh tr???ng b???nh nh??n"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="date"
                            label="Ng??y"
                            component={TextField}
                            disabled="true"
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="numberOrder"
                            label="S??? phi???u"
                            component={TextField}
                            disabled="true"
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="diagnosisType"
                            label="Ki???u kh??m"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="clinicId"
                            label="Ph??ng"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* th??ng tin chuy???n tuy???n */}
                    <div className="block shadow-fb">
                      <div className="category-title">
                        Th??ng tin chuy???n tuy???n
                      </div>
                      <Row>
                        <Col xl={12}>
                          <Field
                            name="preHospital"
                            label="B???nh vi???n"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="disease"
                            label="B???nh"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                {/* right-side */}
                <Col xl={4}>
                  <div className="right-side block shadow-fb">
                    <div className="category-title">
                      Th??ng tin c??c ph??ng kh??m
                    </div>
                    <ClinicInfo/>
                  </div>
                </Col>
              </Row>
              {/* th??ng tin phi???u kh??m */}
              <div className="block shadow-fb application-info">
                <Row>
                  <Col xl={8}>
                    <div className="category-title">Th??ng tin phi???u kh??m</div>
                  </Col>
                  <Col xl={4}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>L???n kh??m trong tu???n</label>
                      </div>
                      <div>
                        <input type="text" disabled/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>L???n kh??m trong th??ng</label>
                      </div>
                      <div>
                        <input type="text" disabled/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>
                          <input type="checkbox" />
                          H???n kh??m l???i
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* button */}
              <div className="button-group">
                <Row>
                  <Col xl={8}>
                    <Row>
                      <Col xl={2}>
                        <CusButton
                          action="create"
                          content="Th??m"
                          handleClick={handleCreate}
                          type="button"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="update"
                          content="S???a"
                          handleClick={handleUpdate}
                          type="button"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="delete"
                          content="X??a"
                          type="button"
                          handleClick={handleDelete}
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="submit"
                          content="L??u"
                          type="submit"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="cancel"
                          content="H???y"
                          handleClick={handleCancel}
                          type="button"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="print"
                          content="In"
                          type="button"
                          handleClick={handlePrint}
                          disableButtons={disableButtons}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

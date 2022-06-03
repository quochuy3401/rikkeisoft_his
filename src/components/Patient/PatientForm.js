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
                <button type="button" class="btn-tab btn-welcome">Tiếp nhận bệnh nhân</button>
                <button type="button" class="btn-tab btn-list">Danh sách bệnh nhân</button>
              </div> */}
              <Row style={{ marginTop: "0px" }}>
                {/* left-side */}
                <Col xl={8}>
                  <div className="left-side">
                  {/* <RightClickMenu/> */}
                    {/* hồ  sơ*/}
                    <div className="block shadow-fb">
                      <div className="category-title">Hồ sơ</div>
                      <Row>
                        <Col xl={3}>
                          <Field
                            name="patientId"
                            label="Mã BN"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="recordId"
                            label="Số HS"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="searchingInsurance"
                            label="Thẻ"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="name"
                            label="Tên bệnh nhân"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="dob"
                            label="Tuổi"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="gender"
                            label="Giới tính"
                            component={SelectField}
                            options={gender}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="ethnic"
                            label="Dân tộc"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="phoneNumber"
                            label="SĐT"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="addressId"
                            label="Địa chỉ"
                            component={SelectField}
                            options={fakeOptions}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="detailAddress"
                            label="Địa chỉ chi tiết"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="relative"
                            label="Người thân"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="relationship"
                            label="Quan hệ"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="addrRelative"
                            label="Địa chỉ liên hệ"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* đối tượng bệnh nhân */}
                    <div className="block shadow-fb">
                      <div className="category-title">Tiếp nhận hồ sơ</div>
                      <Row>
                        <Col xl={6}>
                          <Field
                            name="doiTuong"
                            label="Đối tượng"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="insuranceCode"
                            label="Số thẻ"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* thông tin khám */}
                    <div className="block shadow-fb">
                      <div className="category-title">Thông tin khám</div>
                      <Row>
                        <Col xl={6}>
                          <Field
                            name="patientStatus"
                            label="Tình trạng bệnh nhân"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="date"
                            label="Ngày"
                            component={TextField}
                            disabled="true"
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="numberOrder"
                            label="Số phiếu"
                            component={TextField}
                            disabled="true"
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="diagnosisType"
                            label="Kiểu khám"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="clinicId"
                            label="Phòng"
                            component={SelectField}
                            options={relationship}
                            disableFields={disableFields}
                          />
                        </Col>
                      </Row>
                    </div>
                    {/* thông tin chuyển tuyến */}
                    <div className="block shadow-fb">
                      <div className="category-title">
                        Thông tin chuyển tuyến
                      </div>
                      <Row>
                        <Col xl={12}>
                          <Field
                            name="preHospital"
                            label="Bệnh viện"
                            component={TextField}
                            disableFields={disableFields}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="disease"
                            label="Bệnh"
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
                      Thông tin các phòng khám
                    </div>
                    <ClinicInfo/>
                  </div>
                </Col>
              </Row>
              {/* thông tin phiếu khám */}
              <div className="block shadow-fb application-info">
                <Row>
                  <Col xl={8}>
                    <div className="category-title">Thông tin phiếu khám</div>
                  </Col>
                  <Col xl={4}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>Lần khám trong tuần</label>
                      </div>
                      <div>
                        <input type="text" disabled/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>Lần khám trong tháng</label>
                      </div>
                      <div>
                        <input type="text" disabled/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>
                          <input type="checkbox" />
                          Hẹn khám lại
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
                          content="Thêm"
                          handleClick={handleCreate}
                          type="button"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="update"
                          content="Sửa"
                          handleClick={handleUpdate}
                          type="button"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="delete"
                          content="Xóa"
                          type="button"
                          handleClick={handleDelete}
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="submit"
                          content="Lưu"
                          type="submit"
                          disableButtons={disableButtons}
                        />
                      </Col>
                      <Col xl={2}>
                        <CusButton
                          action="cancel"
                          content="Hủy"
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

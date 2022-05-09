import { Formik, Form, Field, FastField } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { TextField } from "../../custom_field/TextField/TextField";
import "./PatientForm.css";
import { initialValues, patientSchema } from "../../formControl/patientForm.ts";
import { SelectField } from "../../custom_field/SelectField/SelectField";

export const PatientForm = () => {
    const fakeOptions = [
    { value: 1, label: "Hanoi" },
    { value: 2, label: "TPHCM" },
    { value: 3, label: "HaiPhong" },
  ];
  const relationship =[
    {value: "Bố", label: "Bố"},
    {value: "Mẹ", label: "Mẹ"},
    {value: "Anh trai", label: "Anh trai"},
  ]
  return (
    <Container fluid>
      <Row style={{ marginTop: "70px" }}>
        {/* left-side */}
        <Col xl={8}>
          <div className="left-side">
            <Formik
              initialValues={initialValues}
              validationSchema={patientSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formikProps) => {
                const values = {formikProps}
                console.log(values);
                return (
                  <Form>
                    {/* hồ  sơ*/}
                    <div className="block shadow-fb">
                      <div className="category-title">Hồ sơ</div>
                      <Row>
                        <Col xl={3}>
                          <Field
                            name="patientId"
                            label="Mã BN"
                            component={TextField}
                            // error={errors.patientID}
                            // touched={touched.patientId}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="recordId"
                            label="Số HS"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="insuranceCode"
                            label="Thẻ"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="name"
                            label="Tên bệnh nhân"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="age"
                            label="Tuổi"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="gender"
                            label="Giới tính"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={3}>
                          <Field
                            name="ethnic"
                            label="Dân tộc"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <FastField
                            name="phoneNumber"
                            label="SĐT"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="addressId"
                            label="Địa chỉ"
                            component={SelectField}
                            options={fakeOptions}
                          />
                        </Col>
                        <Col xl={12}>
                          <Field
                            name="detailAddress"
                            label="Địa chỉ chi tiết"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <FastField
                            name="relative"
                            label="Người thân"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <FastField
                            name="relationship"
                            label="Quan hệ"
                            component={SelectField}
                            options={relationship}
                          />
                        </Col>
                        <Col xl={12}>
                          <FastField
                            name="addrRelative"
                            label="Địa chỉ liên hệ"
                            component={TextField}
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
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="insuranceCode"
                            label="Số thẻ"
                            component={TextField}
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
                            component={TextField}
                          />
                        </Col>
                        <Col xl={3}>
                          <FastField
                            name="date"
                            label="Ngày"
                            component={TextField}
                            disabled="true"
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
                            component={TextField}
                          />
                        </Col>
                        <Col xl={6}>
                          <Field
                            name="clinicId"
                            label="Phòng"
                            component={TextField}
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
                          <FastField
                            name="preHospital"
                            label="Bệnh viện"
                            component={TextField}
                          />
                        </Col>
                        <Col xl={12}>
                          <FastField
                            name="disease"
                            label="Bệnh"
                            component={TextField}
                          />
                        </Col>
                      </Row>
                    </div>
                    <button type="button" >
                      check values
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Col>

        {/* right-side */}
        <Col xl={4}>
          <div className="right-side block shadow-fb">
            <div className="category-title">Thông tin các phòng khám</div>
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
                <input type="text" />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <label>Lần khám trong tháng</label>
              </div>
              <div>
                <input type="text" />
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
    </Container>
  );
};

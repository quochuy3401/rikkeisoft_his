import { Col, Container, Row } from "react-bootstrap";
import { InputGroup } from "../InputGroup/InputGroup";
import "./PatientForm.css";

export const PatientForm = () => {
  return (
    <Container>
      <Row style={{ marginTop: "70px" }}>
        {/* left-side */}
        <Col xl={8}>
          <div className="left-side">
            {/* hồ  sơ*/}
            <form>
              <div className="block shadow-fb">
                <div className="category-title">Hồ sơ</div>
                <Row>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Mã BN" />
                  </Col>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Số HS" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Thẻ" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Tên bệnh nhân" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Tuổi" />
                  </Col>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Giới tính" />
                  </Col>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Dân tộc" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="SĐT" />
                  </Col>
                  <Col xl={12}>
                    <InputGroup id="" name="" label="Địa chỉ" />
                  </Col>
                  <Col xl={12}>
                    <InputGroup id="" name="" label="Địa chỉ chi tiết" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Người thân" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Quan hệ" />
                  </Col>
                  <Col xl={12}>
                    <InputGroup id="" name="" label="Địa chỉ liên hệ" />
                  </Col>
                </Row>
              </div>
              {/* đối tượng bệnh nhân */}
              <div className="block shadow-fb">
                <div className="category-title">Tiếp nhận hồ sơ</div>
                <Row>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Đối tượng" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Số thẻ" />
                  </Col>
                </Row>
              </div>
              {/* thông tin khám */}
              <div className="block shadow-fb">
                <div className="category-title">Thông tin khám</div>
                <Row>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Tình trạng BN" />
                  </Col>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Ngày" />
                  </Col>
                  <Col xl={3}>
                    <InputGroup id="" name="" label="Số phiếu" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Kiểu khám" />
                  </Col>
                  <Col xl={6}>
                    <InputGroup id="" name="" label="Phòng" />
                  </Col>
                </Row>
              </div>
              {/* thông tin chuyển tuyến */}
              <div className="block shadow-fb">
                <div className="category-title">Thông tin chuyển tuyến</div>
                <Row>
                  <Col xl={12}>
                    <InputGroup id="" name="" label="Bệnh viện" />
                  </Col>
                  <Col xl={12}>
                    <InputGroup id="" name="" label="Bệnh" />
                  </Col>
                </Row>
              </div>
            </form>
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

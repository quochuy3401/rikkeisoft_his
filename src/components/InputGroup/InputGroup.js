import { Col, Row } from "react-bootstrap";
import "./InputGroup.css";

export const InputGroup = (props) => {
  const { label, id, name } = props;
  return (
    <>
      <div className="input-wrapper d-flex">
        <div>
          <label>{label}</label>
        </div>
        <div>
          <input type="text" id={id} name={name} />
        </div>
      </div>
    </>
  );
};

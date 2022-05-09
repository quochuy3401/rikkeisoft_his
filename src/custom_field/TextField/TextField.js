import "./TextField.css";

export const TextField = (props) => {
  const { field, label, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <div className="input-wrapper d-flex">
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled === "true" ? true : false}
          // className={error && touched && "error" }
        />
      </div>
    </div>
  );
};

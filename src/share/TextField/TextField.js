import "./TextField.css";

export const TextField = (props) => {
  const { field, form, label, disabled, disableFields } = props;
  const { name, value, onChange, onBlur } = field;
  const { touched, errors } = form;
  const isDisabled =
    (disableFields && disableFields.indexOf(name) !== -1) || disabled
      ? true
      : false;

  // const upperCaseName = (name) => {
  //   const words = name.toLowerCase().split(" ");
  //   words
  //     .map((word) => {
  //       return word[0].toUpperCase() + word.substring(1);
  //     })
  //     .join(" ");
  // };

  // if ((name = "name")) {
  //   value = upperCaseName(value);
  // }

  return (
    <div className="input-wrapper d-flex">
      <div>
        <label>{label}</label>
      </div>
      <div className="input-field">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={isDisabled}
          className={
            touched[name] && errors[name] ? "field-error trigger" : "trigger"
          }
        />
        {errors[name] && touched[name] && (
          <div className="error-msg">{errors[name]}</div>
        )}
      </div>
    </div>
  );
};

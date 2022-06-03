import Select from "react-select";
import "./SelectField.css";

export const SelectField = (props) => {
  const { field, form, label, disabled, options, disableFields } = props;
  const { name, value, onChange, onBlur } = field;
  const { touched, errors } = form;
  
  const isDisabled =
    (disableFields && disableFields.indexOf(name) !== -1) || disabled
      ? true
      : false;

  const selectedOption =
    options.find((option) => option.value === value) || null;

  const handelOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    onChange(changeEvent);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: "#9e9e9e",
      minHeight: "24px",
      height: "24px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "24px",
      padding: "0 6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      padding: "0px",
    }),
    indicatorSeparator: (state) => ({
      marginTop: "0px",
      marginBottom: "0px",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "24px",
    }),
  };

  return (
    <div className="select-wrapper d-flex">
      <div>
        <label>{label}</label>
      </div>
      <div className="select-field">
        <Select
          className={
            touched[name] && errors[name]
              ? "field-error select-input"
              : "select-input"
          }
          id={name}
          name={name}
          value={selectedOption}
          onChange={handelOptionChange}
          onBlur={onBlur}
          options={options}
          isDisabled={isDisabled}
          placeholder=""
          isClearable="true"
          styles={customStyles}
        />
        {errors[name] && touched[name] && (
          <div className="error-msg">{errors[name]}</div>
        )}
      </div>
    </div>
  );
};
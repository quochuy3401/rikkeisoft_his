import Select from "react-select";
import "./SelectField.css";

export const SelectField = (props) => {
  const { field, label, disabled, options } = props;
  const { name, value, onChange, onBlur } = field;
//   const fakeOptions = [
//     { value: 1, label: "Hanoi" },
//     { value: 2, label: "TPHCM" },
//     { value: 3, label: "HaiPhong" },
//   ];

  const selectedOption = options.find((option) => option.value === value);

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

  return (
    <div className="select-wrapper d-flex">
      <div>
        <label>{label}</label>
      </div>
      <Select
        className="select-input"
        id={name}
        name={name}
        value={selectedOption}
        onChange={handelOptionChange}
        onBlur={onBlur}
        options={options}
        disabled={disabled || false}
        placeholder=""
        // className={error && touched && "error" }
      />
    </div>
  );
};

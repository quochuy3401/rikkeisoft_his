import "./CusButton.css";

export const CusButton = (props) => {
  const { content, handleClick, type, action, disableButtons } = props;
  const isDisable = disableButtons.find((button) => button === action)
    ? true
    : false;

  return (
    <button className="cus-button" onClick={handleClick} type={type} disabled={isDisable}>
      {content}
    </button>
  );
};

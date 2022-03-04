import "styles/Button.css";

interface ButtonOutlinedPropsInterface {
  label?: string;
  onClick?: () => void;
}
interface ButtonRoundedPropsInterface {
  label?: string;
  width?: number | string;
  padding?: number;
  onClick?: () => void;
}
interface ButtonNormalPropsInterface {
  label?: string;
  width?: number | string;
  padding?: number;
  disabled?: boolean;
  isCopied?: boolean;
  onClick?: () => void;
}

export const ButtonOutlined = (props: ButtonOutlinedPropsInterface) => {
  return (
    <button onClick={props.onClick} className="button-outlined">
      <p className="font-700 text-btn-outlined">{props.label}</p>
    </button>
  );
};

export const ButtonRounded = (props: ButtonRoundedPropsInterface) => {
  return (
    <button
      style={{ width: props.width ?? 104, padding: props.padding ?? 8 }}
      onClick={props.onClick}
      className="button-rounded"
    >
      <p className="font-700 text-btn-rounded">{props.label}</p>
    </button>
  );
};

export const ButtonNormal = (props: ButtonNormalPropsInterface) => {
  return (
    <button
      disabled={props.disabled}
      style={{
        width: props.width ?? 153,
        padding: props.padding,
        cursor: props.disabled ? "not-allowed" : "pointer",
        backgroundColor: props.isCopied ? "#3b3054" : "#2acfcf",
      }}
      onClick={props.onClick}
      className="button-normal"
    >
      <p className="font-700 text-btn-normal">{props.label}</p>
    </button>
  );
};

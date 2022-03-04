import { ChangeEvent } from "react";
import "styles/Input.css";
interface InputPropsInterface {
  placeholder?: string;
  isError?: string;
  value?: string;
  padding?: number;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputPropsInterface) => {
  return (
    <input
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
      style={{ padding: props.padding ?? 24 }}
      placeholder={props.placeholder}
      className="container-input"
      type="text"
    />
  );
};

export default Input;

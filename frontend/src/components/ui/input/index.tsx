import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputArea, InputText } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputText {...rest} />;
};

const TextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
  return <InputArea {...rest} />;
};

export { Input, TextArea };

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonPage, TextButton } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean | any;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
  return (
    <ButtonPage disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </ButtonPage>
  );
};

export default Button;

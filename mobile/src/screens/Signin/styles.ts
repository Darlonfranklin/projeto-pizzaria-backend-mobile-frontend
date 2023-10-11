import styled from "styled-components/native";

interface IButtonProps {
  primary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1d1d2e;
`;

export const ImageSrc = styled.Image`
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 95%;
  align-items: center;
  justify-content: center;
  padding: 14px;
`;

export const InputText = styled.TextInput`
  width: 95%;
  height: 40px;
  background-color: #101026;
  margin-bottom: 12px;
  border-radius: 4px;
  padding-left: 15px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity<IButtonProps>`
  width: 95%;
  height: 40px;
  background-color: ${(props) => (props.primary ? "#3fffa3" : "#00FFFF")};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const ButtonText = styled.Text<IButtonProps>`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
  color: ${(props) => (props.primary ? "#000" : "#FFFFFF")};
`;

export const Error = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

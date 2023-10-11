import styled from "styled-components/native";

export const ContainerSafeView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1d1d2e;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #fff;
`;

export const InputText = styled.TextInput`
  width: 90%;
  height: 60px;
  margin: 20px;
  font-size: 29px;
  color: #fff;
  background-color: #101026;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #3fffa3;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
  color: #000;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1d1d2e;
  padding: 5%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-right: 14px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  margin-top: 24px;
`;

export const TextInput = styled.Text`
  padding-left: 12px;
  font-size: 17px;
  color: #fff;
`;

export const InputButton = styled.TouchableOpacity`
  background-color: #101026;
  border-radius: 4px;
  width: 100%;
  height: 55px;
  margin-bottom: 12px;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  background-color: #101026;
  border-radius: 4px;
  width: 67%;
  text-align: center;
  height: 55px;
  color: #fff;
  margin-bottom: 12px;
  font-size: 20px;
  justify-content: center;
`;

export const QtdContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QtdText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Actions = styled.View`
  margin-top: 12px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 20%;
  background-color: #3fd1ff;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #101026;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonAdvanced = styled.TouchableOpacity`
  background-color: #3fffa3;
  width: 75%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const FlatListModal = styled.FlatList`
  flex: 1;
  margin-top: 24px;
`;

export const ModalOrder = styled.Modal``;

export const ButtonTrash = styled.TouchableOpacity``;

import {
  Button,
  ButtonText,
  ContainerSafeView,
  InputText,
  Title,
} from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import React from "react";
import { api } from "../../services/api";

const Dashboard: React.FC = () => {
  const { control, handleSubmit, getValues } = useForm();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function openOrder() {
    const numberTable = getValues("number");

    if (numberTable === "") {
      alert("Digite numero da mesa");
    }

    const response = await api.post("/order", {
      table: Number(numberTable),
    });
    navigation.navigate("Order", {
      number: numberTable,
      order_id: response.data.id,
    });
  }

  return (
    <ContainerSafeView>
      <Title>Novo pedido</Title>

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputText
            placeholder="Número da mesa"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#fff"
            keyboardType="numeric"
          />
        )}
        name="number"
      />

      <Button onPress={handleSubmit(openOrder)}>
        <ButtonText>Abrir mesa</ButtonText>
      </Button>
    </ContainerSafeView>
  );
};

export default Dashboard;

import {
  Button,
  ButtonText,
  ContainerSafeView,
  InputText,
  Title,
} from "./styles";
import { useForm, Controller } from "react-hook-form";

const Dashboard: React.FC = () => {
  const { control, handleSubmit, getValues, formState } = useForm();

  async function openOrder() {
    const getNumberValue = getValues("number");
    alert("Olá mesa: " + getNumberValue);
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

import {
  Button,
  Container,
  ImageSrc,
  InputContainer,
  InputText,
  ButtonText,
  Error,
} from "./styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidator } from "../../validators/loginValidator";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidator) });

  const { signIn, loadingAuth } = useContext(AuthContext);

  async function onSubmit(data: { email: string; password: string }) {
    const { email, password } = data;
    await signIn({ email, password });
  }

  return (
    <Container>
      <ImageSrc source={require("../../assets/logo.png")} />
      <InputContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputText
              onChangeText={onChange}
              value={value}
              placeholder="E-mail"
              placeholderTextColor="#f0f0f0"
            />
          )}
          name="email"
        />
        {errors.email && <Error>{errors.email?.message}</Error>}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputText
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              placeholder="Senha"
              placeholderTextColor="#f0f0f0"
            />
          )}
          name="password"
        />
        {errors.password && <Error>{errors.password?.message}</Error>}
        <Button onPress={handleSubmit(onSubmit)} primary={true}>
          {loadingAuth ? (
            <ActivityIndicator size={18} color="#FFF" />
          ) : (
            <ButtonText primary={true}>Acessar</ButtonText>
          )}
        </Button>
        <Button primary={false} onPress={() => reset()}>
          <ButtonText primary={true}>Limpar</ButtonText>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default SignIn;

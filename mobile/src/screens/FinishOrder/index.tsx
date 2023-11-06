import React from "react";
import { Alert, ButtonFinish, ButtonText, Container, Title } from "./styles";

import { Feather } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProps = RouteProp<RouteDetailParams, "FinishOrder">;

const FinishOrder: React.FC = () => {
  const route = useRoute<FinishOrderRouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params?.order_id,
      });
      navigation.popToTop();
    } catch (err) {
      console.log("ERRO AO FINALIZAR, tente mais tarde.");
    }
  }

  return (
    <Container>
      <Alert>Você deseja finalizar esse pedido?</Alert>
      <Title>Mesa {route.params.number}</Title>

      <ButtonFinish onPress={handleFinish}>
        <ButtonText>Finalizar pedido</ButtonText>
        <Feather name="shopping-cart" size={20} color="#1d1d2e" />
      </ButtonFinish>
    </Container>
  );
};
export default FinishOrder;

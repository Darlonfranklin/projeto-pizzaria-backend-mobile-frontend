import Header from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import {
  Button,
  ButtonList,
  Container,
  ContainerHeader,
  EmptyList,
  ListOrders,
  OrderItem,
  Tag,
} from "./styles";

import { FiRefreshCcw } from "react-icons/fi";
import { setupAPIClient } from "@/services/api";
import Modal from "react-modal";
import ModalOrder from "@/components/ModalOrder";

type OrderProps = {
  id: string;
  table: string;
  status: boolean;
  draft: boolean;
  name: string | null;
};

interface HomeProps {
  orders: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  };
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  };
};

const Dashboard = ({ orders }: HomeProps) => {
  const [orderList, setOrderList] = useState(orders || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupAPIClient();

    const response = await apiClient.get("/order/detail", {
      params: {
        order_id: id,
      },
    });
    setModalItem(response.data);
    setModalVisible(true);
  }

  async function handleFinishItem(id: string) {
    const apiClient = setupAPIClient();
    await apiClient.put("/order/finish", {
      order_id: id,
    });

    const response = await apiClient.get("/orders");

    setOrderList(response.data);
    setModalVisible(false);
  }

  async function handleRefreshOrders() {
    const apiClient = setupAPIClient();

    const response = await apiClient.get("/orders");
    setOrderList(response.data);
  }

  Modal.setAppElement("#__next");

  return (
    <Fragment>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>
      <Header />
      <Container>
        <ContainerHeader>
          <h1>Últimos pedidos</h1>
          <Button onClick={handleRefreshOrders}>
            <FiRefreshCcw size={25} color="#3fffa3" />
          </Button>
        </ContainerHeader>

        <ListOrders>
          {orderList.length === 0 && (
            <EmptyList>Nenhum pedido aberto encontrado...</EmptyList>
          )}
          {orderList.map((item: any) => (
            <OrderItem key={item.id}>
              <ButtonList onClick={() => handleOpenModalView(item.id)}>
                <Tag />
                <span>Mesa {item.table}</span>
              </ButtonList>
            </OrderItem>
          ))}
        </ListOrders>
        {modalVisible && (
          <ModalOrder
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            order={modalItem}
            handleFinishOrder={handleFinishItem}
          />
        )}
      </Container>
    </Fragment>
  );
};

export const getServerSideProps = canSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/orders");
  console.log("aqui voltou", response);

  return {
    props: {
      orders: response.data,
    },
  };
});

export default Dashboard;

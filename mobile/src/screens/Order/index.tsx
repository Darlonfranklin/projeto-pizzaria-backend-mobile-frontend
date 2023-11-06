import React, { useEffect, useState } from "react";
import {
  Actions,
  ButtonAdd,
  ButtonAdvanced,
  ButtonText,
  ButtonTrash,
  Container,
  FlatListModal,
  Header,
  InputButton,
  InputText,
  ModalOrder,
  QtdContainer,
  QtdText,
  TextInput,
  Title,
} from "./styles";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import ModalPicker from "../../components/ModalPicker";
import ListItem from "../../components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

export type CategoryProps = {
  id: string;
  name: string;
};

type ProductProps = {
  id: string;
  name: string;
};

type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

const Order: React.FC = () => {
  const route = useRoute<OrderRouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<
    CategoryProps | undefined
  >();
  const [modalCategoryVisible, setModalCategoryVisible] =
    useState<boolean>(false);

  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductsSelected] = useState<
    ProductProps | undefined
  >();
  const [modalProductVisible, setModalProductVisible] =
    useState<boolean>(false);

  const [amount, setAmount] = useState<string>("1");
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadingInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }
    loadingInfo();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/category/product", {
        params: {
          category_id: categorySelected?.id,
        },
      });

      setProducts(response.data);
      setProductsSelected(response.data[0]);
    }
    loadProducts();
  }, [categorySelected]);

  const handleCloseOrder = async () => {
    try {
      await api.delete("/order", {
        params: {
          order_id: route.params?.order_id,
        },
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  function handleChangeProduct(item: ProductProps) {
    setProductsSelected(item);
  }

  async function handleAdd() {
    const response = await api.post("/order/add", {
      order_id: route.params?.order_id,
      product_id: productSelected?.id,
      amount: Number(amount),
    });

    let data = {
      id: response.data.id,
      product_id: productSelected?.id as string,
      name: productSelected?.name as string,
      amount: amount,
    };

    setItems((oldArray) => [...oldArray, data]);
  }

  async function handleDeleteItem(item_id: string) {
    await api.delete("/order/remove", {
      params: {
        item_id: item_id,
      },
    });
    let removeItem = items.filter((item) => {
      return item.id !== item_id;
    });
    setItems(removeItem);
  }

  function handleFinishOrder() {
    navigation.navigate("FinishOrder", {
      number: route.params?.number,
      order_id: route.params?.order_id,
    });
  }

  return (
    <Container>
      <Header>
        <Title>Mesa {route.params.number}</Title>
        {items.length === 0 && (
          <ButtonTrash onPress={handleCloseOrder}>
            <Feather name="trash-2" size={28} color="#FF3F4B" />
          </ButtonTrash>
        )}
      </Header>

      {category.length !== 0 && (
        <InputButton onPress={() => setModalCategoryVisible(true)}>
          <TextInput>{categorySelected?.name}</TextInput>
        </InputButton>
      )}

      {products.length !== 0 && (
        <InputButton onPress={() => setModalProductVisible(true)}>
          <TextInput>{productSelected?.name}</TextInput>
        </InputButton>
      )}
      <QtdContainer>
        <QtdText>Quantidade</QtdText>
        <InputText
          placeholderTextColor="#F0F0F0"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </QtdContainer>

      <Actions>
        <ButtonAdd onPress={handleAdd}>
          <ButtonText>+</ButtonText>
        </ButtonAdd>

        <ButtonAdvanced
          style={[{ opacity: items.length === 0 ? 0.3 : 1 }]}
          onPress={handleFinishOrder}
        >
          <ButtonText>Avançar</ButtonText>
        </ButtonAdvanced>
      </Actions>

      <FlatListModal
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <ListItem data={item} deleteItem={handleDeleteItem} />
        )}
      />

      <ModalOrder
        transparent={true}
        visible={modalCategoryVisible}
        animationType="fade"
      >
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectedItem={handleChangeCategory}
        />
      </ModalOrder>

      <ModalOrder
        transparent={true}
        visible={modalProductVisible}
        animationType="fade"
      >
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={products}
          selectedItem={handleChangeProduct}
        />
      </ModalOrder>
    </Container>
  );
};

export default Order;

import React from "react";
import { ButtonTrash, Container, Content } from "./styles";
import { Feather } from "@expo/vector-icons";

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
  deleteItem: (item_id: string) => void;
}
const ListItem: React.FC<ItemProps> = ({ data, deleteItem }) => {
  function handleDeleteItem() {
    deleteItem(data.id);
  }

  return (
    <Container>
      <Content>
        {data.amount} - {data.name}
      </Content>
      <ButtonTrash onPress={handleDeleteItem}>
        <Feather name="trash-2" color="#FF3F4B" size={25} />
      </ButtonTrash>
    </Container>
  );
};

export default ListItem;

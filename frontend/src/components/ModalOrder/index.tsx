import { OrderItemProps } from "@/pages/dashboard";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import {
  Button,
  ButtonOrder,
  Container,
  ContainerItem,
  Description,
  Table,
} from "./styles";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleFinishOrder: (id: string) => void;
  order: OrderItemProps[];
}

const ModalOrder = ({
  isOpen,
  onRequestClose,
  order,
  handleFinishOrder,
}: ModalOrderProps) => {
  const customStyles = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Button type="button" onClick={onRequestClose}>
        <FiX size={45} color="#f34748" />
      </Button>

      <Container>
        <h2>Detalhes do pedido</h2>
        <Table>
          Mesa: <strong>{order[0].order.table}</strong>
        </Table>

        {order.map((item) => (
          <ContainerItem key={item.id}>
            <span>
              {item.amount} - <strong>{item.product.name}</strong>
            </span>
            <Description>{item.product.description}</Description>
          </ContainerItem>
        ))}
        <ButtonOrder
          type="button"
          onClick={() => handleFinishOrder(order[0].order_id)}
        >
          Concluir pedido
        </ButtonOrder>
      </Container>
    </Modal>
  );
};

export default ModalOrder;

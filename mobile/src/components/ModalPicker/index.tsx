import React from "react";
import {
  TouchContainer,
  Content,
  ScrollViewContainer,
  Item,
  Option,
} from "./styles";
import { CategoryProps } from "../../screens/Order";

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

const ModalPicker: React.FC<ModalPickerProps> = ({
  options,
  handleCloseModal,
  selectedItem,
}) => {
  function onPressItem(item: CategoryProps) {
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <Option key={index} onPress={() => onPressItem(item)}>
      <Item>{item?.name}</Item>
    </Option>
  ));
  return (
    <TouchContainer onPress={handleCloseModal}>
      <Content>
        <ScrollViewContainer showsVerticalScrollIndicator={false}>
          {option}
        </ScrollViewContainer>
      </Content>
    </TouchContainer>
  );
};

export default ModalPicker;

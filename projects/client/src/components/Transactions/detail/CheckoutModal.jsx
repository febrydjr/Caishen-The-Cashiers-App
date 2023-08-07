import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../../../api/transaction";

const CheckoutModal = ({ isOpen, onClose, setUpdateCarts, total }) => {
  const toast = useToast();
  const [money, setMoney] = useState("");
  const [change, setChange] = useState(total);

  const handleChange = (event) => {
    setMoney(Number(event.target.value));
  };

  useEffect(() => {
    setChange(money - total);
  }, [total, money]);

  const handleSubmit = async () => {
    await addTransaction(toast);
    setUpdateCarts(uuidv4());
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily={"Fira Code"}>
        <ModalHeader>Checkout!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={"center"} direction={"column"}>
            <Text mb={1} alignSelf={"left"}>
              Total: {total}
            </Text>
            <Input
              id="customer-money"
              type="number"
              placeholder="Input Customer Money"
              // value={money}
              onChange={handleChange}
            />
            <Text alignSelf={"center"} mt={4}>
              Change:
            </Text>
            <Text alignSelf={"center"} fontSize={"40px"}>
              {!change ? 0 : change}
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            _hover={{ color: "black", bgColor: "gray.100" }}
            bgColor={"green"}
            color={"white"}
            ml={3}
            onClick={handleSubmit}
          >
            Checkout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;

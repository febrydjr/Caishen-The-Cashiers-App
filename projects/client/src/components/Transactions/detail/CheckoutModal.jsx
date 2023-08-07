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
  Select,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AddProductModal = ({ isOpen, onClose }) => {
  const toast = useToast();

  const handleSubmit = async (values) => {
    console.log("CHECKOUT SUCCESS");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontFamily={"Fira Code"} fontSize={"2xl"} fontWeight={700}>
            Checkout!
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Form>
          <ModalBody>
            <Text fontSize={"sm"} mb={4} fontWeight={500} color={"gray.600"}>
              Enter Customer Money :
            </Text>
            <Field
              mb={2}
              as={Input}
              type="text"
              name="change"
              rounded={"lg"}
              placeholder="Enter Category Name"
              _placeholder={{ fontSize: "sm", color: "gray.400" }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleSubmit}
              display={"flex"}
              justifyContent={"center"}
              w={"100%"}
              rounded={"lg"}
              color={"white"}
              _hover={{ bg: "green" }}
              bg={"#2A2B2E"}
            >
              Checkout!
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default AddProductModal;

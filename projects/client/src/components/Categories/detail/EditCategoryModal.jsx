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
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { RiDeleteBinFill } from "react-icons/ri";

const EditCategoryModal = ({ isOpen, onClose, category }) => {
  const toast = useToast();
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `http://localhost:8000/api/products/category/${category.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: "Category deleted!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Error deleting category!",
        description: error.response.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (values) => {
    try {
      await axios.patch("http://localhost:8000/api/products/category", {
        categoryId: String(category.id),
        name: values.name,
      });
      toast({
        title: "Successfully Edit Category!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error editing Category!",
        description: error.response.data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontFamily={"Fira Code"} fontSize={"2xl"} fontWeight={700}>
            Edit Category
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ categoryId: "", name: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <ModalBody>
                <Text
                  fontSize={"sm"}
                  mb={4}
                  fontWeight={500}
                  color={"gray.600"}
                >
                  Enter Category Detail!
                </Text>
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="name"
                  rounded={"lg"}
                  placeholder="Enter Category Name"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={() => handleDelete()}>
                  <RiDeleteBinFill size={20} />
                </Button>
                <Button
                  type="submit"
                  display={"flex"}
                  justifyContent={"center"}
                  w={"100%"}
                  rounded={"lg"}
                  color={"white"}
                  _hover={{ bg: "green" }}
                  bg={"#2A2B2E"}
                >
                  Submit Data
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default EditCategoryModal;

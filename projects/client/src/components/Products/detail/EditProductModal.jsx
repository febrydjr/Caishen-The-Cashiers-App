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
import { useState, useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const EditProductModal = ({ isOpen, onClose, productId }) => {
  const toast = useToast();
  const [category, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("localhost:8000/api/products/categories");
      setCategory(res.data.data);
    } catch (error) {
      // alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      await axios.patch(`http://localhost:8000/api/products/${productId}`, {
        name: values.name,
        description: values.description,
        price: values.price,
        category: values.category,
      });
      toast({
        title: "Successfully Edit Product!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error editing Product!",
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
        <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <ModalBody>
                <Text
                  fontSize={"sm"}
                  mb={4}
                  fontWeight={500}
                  color={"gray.600"}
                >
                  Enter Product Detail!
                </Text>
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="name"
                  rounded={"lg"}
                  placeholder="Enter Product Name"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="description"
                  rounded={"lg"}
                  placeholder="Enter Product Description"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="price"
                  rounded={"lg"}
                  placeholder="Enter Product Price"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="stock"
                  rounded={"lg"}
                  placeholder="Enter Product Stock"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="imageupload"
                  rounded={"lg"}
                  placeholder="Upload Product Images"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="categoryId"
                  rounded={"lg"}
                  placeholder="Dropdown Category"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
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

export default EditProductModal;

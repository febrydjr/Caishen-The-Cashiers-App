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
  Select,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { RiDeleteBinFill } from "react-icons/ri";

const EditProductModal = ({ isOpen, onClose, productId }) => {
  const toast = useToast();
  const [category, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products/categories"
      );
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("image", selectedImage);
      formData.append("id_categories", values.category);

      await axios.patch(
        `http://localhost:8000/api/products/${productId}`,
        formData
      );
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
            Edit Product
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            stock: "",
            category: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
            stock: Yup.number().required("Required"),
            category: Yup.string().required("Required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
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
                  type="number"
                  name="price"
                  rounded={"lg"}
                  placeholder="Enter Product Price"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  type="number"
                  name="stock"
                  rounded={"lg"}
                  placeholder="Enter Product Stock"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Input}
                  onChange={(e) => handleImageUpload(e)}
                  type="file"
                  name="image"
                  rounded={"lg"}
                  accept="image/*"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  mb={2}
                  as={Select}
                  name="category"
                  rounded={"lg"}
                  placeholder="Select Category"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                  onChange={(event) => {
                    setSelectedCategory(event.target.value);
                    setFieldValue("category", event.target.value);
                  }}
                >
                  {category.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
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

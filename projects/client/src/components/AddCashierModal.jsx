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

const ChangeUsernameModal = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object().shape({
    currentUsername: Yup.string().required("Current Username is required"),
    newUsername: Yup.string().required("New Username is required"),
  });

  const toast = useToast();
  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        {
          currentUsername: values.currentUsername,
          newUsername: values.newUsername,
          FE_URL: "http://localhost:3000",
        }
      );
      toast({
        title: "Username changed successfully",
        description: "check your email for verification",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error changing username:", error);
      toast({
        title: "Error changing username",
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
            Add Cashier
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ currentUsername: "", newUsername: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <ModalBody>
                <Text
                  fontFamily={"monospace"}
                  fontSize={"sm"}
                  mb={4}
                  fontWeight={500}
                  color={"gray.600"}
                >
                  Enter Cashier Detail!
                </Text>
                <Field
                  mb={2}
                  as={Input}
                  type="text"
                  name="currentUsername"
                  rounded={"lg"}
                  focusBorderColor="#C77DFF"
                  placeholder="Enter Cashier Name"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
                <Field
                  as={Input}
                  type="text"
                  name="newUsername"
                  rounded={"lg"}
                  placeholder="Enter Cashier Username"
                  _placeholder={{ fontSize: "sm", color: "gray.400" }}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  fontFamily={"monospace"}
                  display={"flex"}
                  justifyContent={"center"}
                  w={"100%"}
                  rounded={"lg"}
                  color={"white"}
                  colorScheme={"facebook"}
                >
                  Change Username
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default ChangeUsernameModal;

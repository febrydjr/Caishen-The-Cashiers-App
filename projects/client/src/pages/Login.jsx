import React from "react";
import axios from "axios";
import {
  Box,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Toggle, setToggle] = React.useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required("Username/Email is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string().email("Invalid email"),
  });

  const initialValues = {
    identifier: "",
    password: "",
    email: "",
  };

  const handleReset = async (values) => {
    console.log(values.email, "RESET PASSWORD");
  };

  const handleLogin = async (values) => {
    try {
      const { identifier, password } = values;
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        identifier,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        toast({
          title: "Success",
          description: "Login Success",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/dashboard");
      }
    } catch (err) {
      // console.error(err);
      toast({
        title: "Error",
        description: "Login Failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bgImage={"/bglogin.png"}
      fontFamily={"Fira Code"}
      backgroundSize={"cover"}
      h={"100vh"}
    >
      <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
        <Box
          bgColor={"#2A2B2E"}
          w="450px"
          p={5}
          border={"1px solid #2D2D2D"}
          borderWidth={1}
          borderRadius={8}
          color={"white"}
          boxShadow={"dark-lg"}
        >
          <Text fontSize={"4xl"}>CaishenPOS Login!</Text>
          <Text fontSize="12px" mb={8}>
            Welcome back! please enter your detail!
          </Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={Toggle ? handleReset : handleLogin}
          >
            {({ errors, touched }) => (
              <Form>
                {!Toggle && (
                  <>
                    <Field name="identifier">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.identifier && form.touched.identifier
                          }
                          mb={2}
                        >
                          <FormLabel htmlFor="identifier">
                            Username/Email
                          </FormLabel>
                          <Input {...field} id="identifier" />
                          <FormErrorMessage>
                            {form.errors.identifier}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                          mb={2}
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input {...field} id="password" type="password" />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button type="submit" colorScheme="gray" mt={1} mb={4}>
                      Login
                    </Button>
                    <Text fontSize={"12px"}>
                      Forgot Password? &nbsp;
                      <Link onClick={() => setToggle(!Toggle)}>
                        Click here!
                      </Link>
                    </Text>
                  </>
                )}
                {Toggle && (
                  <>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                          mb={2}
                        >
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input {...field} id="email" type="email" />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button type="submit" mb={4} colorScheme="blue">
                      Send Link
                    </Button>
                    <Text fontSize={"12px"}>
                      <Link onClick={() => setToggle(!Toggle)}>
                        Back to login
                      </Link>
                    </Text>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

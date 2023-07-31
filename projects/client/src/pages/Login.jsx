import React from "react";
import {
  Box,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [Toggle, setToggle] = React.useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

  const handleLogin = (values) => {
    console.log(values.username, values.password);
  };

  const handleReset = (values) => {
    console.log(values.email);
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
          <Text fontSize={"4xl"}>Caishen Login!</Text>
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
                    <Field name="username">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.username && form.touched.username
                          }
                          mb={2}
                        >
                          <FormLabel htmlFor="username">Username</FormLabel>
                          <Input {...field} id="username" />
                          <FormErrorMessage>
                            {form.errors.username}
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
                    <Button
                      onClick={handleLogin}
                      type="submit"
                      colorScheme="gray"
                      mt={1}
                      mb={4}
                    >
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
                    <Button mb={4} type="submit" colorScheme="blue">
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

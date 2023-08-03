import {
  Box,
  Flex,
  Text,
  Button,
  Divider,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsBoxArrowInLeft } from "react-icons/bs";
import EditPhotoModal from "../components/EditPhotoModal";
import getImage from "../api/getImage";
import { PiUploadBold } from "react-icons/pi";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [is_active, setIs_active] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [is_admin, setIs_admin] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNavigate = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        const {
          name: fetchName,
          username: fetchUsername,
          avatar: fetchAvatar,
          email: fetchEmail,
          phone: fetchPhone,
          is_active: fetchStatus,
          is_admin: fetchIsAdmin,
        } = response.data.data;
        setName(fetchName);
        setUsername(fetchUsername);
        setAvatar(fetchAvatar);
        setEmail(fetchEmail);
        setPhone(fetchPhone);
        setIs_active(fetchStatus);
        setIs_admin(fetchIsAdmin);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("photo");

  const handleSavePhoto = (newPhoto) => {
    setCurrentPhoto(newPhoto);
  };

  const openPhotoModal = () => {
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  return (
    <Box fontFamily={"Fira Code"} bg="#2e2e2e" pt={10} minH="100vh">
      <Button onClick={handleNavigate} ml={10} p={4} mb={4}>
        <Flex alignItems={"center"}>
          <BsBoxArrowInLeft size={24} />
          <Text>&nbsp;DASHBOARD</Text>
        </Flex>
      </Button>
      <Flex px={"10"} alignItems={"s"} gap={8}>
        <Box w="50%" boxShadow="dark-lg" rounded={"lg"}>
          <Card bgColor={"#FAC1D9"} mb={4} boxShadow="none">
            <CardBody textAlign="center">
              <center>
                <Image
                  src={getImage(avatar)} // ini error gabisa get gambar
                  alt="avatar"
                  borderRadius="full"
                  boxSize="160px"
                  mb={2}
                />
              </center>
              <Button
                color={"black"}
                bgColor={"#EDF2F7"}
                _hover={{ bgColor: "#CFDDDB", color: "black" }}
                mb={"2"}
                onClick={openPhotoModal}
              >
                <PiUploadBold size={18} />
                &nbsp;Upload Photo
                <EditPhotoModal
                  isOpen={isPhotoModalOpen}
                  onClose={closePhotoModal}
                  currentPhoto={currentPhoto}
                  onSave={handleSavePhoto}
                  onImageUpload={handleImageUpload}
                />
              </Button>
              <Text fontSize={"sm"} color="gray.500" mb={1}>
                *Max File Size: 1MB
              </Text>
              <Text fontSize={"sm"} color="gray.500">
                *PNG, JPG, JPEG and GIF file extensions
              </Text>
            </CardBody>
          </Card>
        </Box>

        <Box w="50%" boxShadow="dark-lg" rounded={"lg"}>
          <Card bgColor={"#FAC1D9"} boxShadow="none">
            <CardBody>
              <Flex>
                <Box w="30%">
                  <Text>Full Name</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{name}</Text>
                </Box>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Username</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{username}</Text>
                </Box>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Email</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{email}</Text>
                </Box>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Role</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{is_admin ? "Cashier" : "Admin"}</Text>
                </Box>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Phone</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{phone}</Text>
                </Box>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Status</Text>
                </Box>
                <Text color="gray.500" w="70%">
                  {is_active ? "Active" : "Inactive"}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
}

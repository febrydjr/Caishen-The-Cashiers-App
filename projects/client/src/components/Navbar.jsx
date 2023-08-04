import {
  Box,
  Flex,
  Link,
  Text,
  Spacer,
  Image,
  Avatar,
  IconButton,
  Collapse,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiHamburgerMenu, GiToken } from "react-icons/gi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import getImage from "../api/getImage";
import axios from "axios";

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchData = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { avatar } = response.data.data;
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleSearch = () => {
    // const filteredArticles = articlesData.filter((article) => {
    //   const { title, author, category } = article;
    //   const lowerCaseQuery = searchQuery.toLowerCase();
    //   return (
    //     title.toLowerCase().includes(lowerCaseQuery) ||
    //     author.toLowerCase().includes(lowerCaseQuery) ||
    //     category.toLowerCase().includes(lowerCaseQuery)
    //   );
    // });
    // navigate("/search-results", { state: { filteredArticles } });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box
      w={"100vw"}
      fontFamily={"Fira Code"}
      fontSize={"large"}
      bg="#2A2B2E"
      py={3}
      px={6}
    >
      <Flex align="center" justify="space-between" color="white">
        <Flex align="center">
          <Link as={RouterLink} to="/">
            <Image
              src="https://www.freepnglogos.com/uploads/games-png/games-file-wpvg-icon-svg-wikipedia-31.png"
              alt="Logo"
              boxSize={8}
              mr={4}
            />
          </Link>
          <Link
            as={RouterLink}
            to="/"
            fontWeight="bold"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
          >
            CaishenPOS
          </Link>
          <Input
            w={"300px"}
            fontFamily={"Fira Code"}
            placeholder="Search products..."
            _placeholder={{ color: "white" }}
            ml={10}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <Button
            ml={2}
            colorScheme="gray"
            _hover={{ bg: "#DAFFFB" }}
            onClick={handleSearch}
          >
            <AiOutlineSearch size={"20px"} />
          </Button>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} align="center">
          {token ? (
            <>
              <Button
                size={"sm"}
                as={RouterLink}
                to="/"
                onClick={handleLogout}
                _hover={{ textColor: "black", bgColor: "white" }}
                bgColor={"red.500"}
                textColor={"white"}
              >
                Sign Out
              </Button>
              <Link mr={4} as={RouterLink} to="/profile">
                <Avatar name="User" src={getImage(avatar)} size="sm" ml={4} />
              </Link>
            </>
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/login"
                mr={4}
                _hover={{ textDecoration: "none" }}
              >
                Log In
              </Link>
              <Link
                as={RouterLink}
                to="/register"
                _hover={{ textDecoration: "none" }}
              >
                Register
              </Link>
            </>
          )}
        </Flex>
        <IconButton
          aria-label="Toggle navigation"
          icon={isToggle ? <AiOutlineClose /> : <GiHamburgerMenu />}
          onClick={handleToggle}
          display={{ base: "flex", md: "none" }}
        />
      </Flex>
    </Box>
  );
}

export default Navbar;

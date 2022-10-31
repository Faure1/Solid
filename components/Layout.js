import React from 'react'
import {
    Container,
    Row,
    Col,
    Text,
    Grid,
    Card,
    Checkbox,
    Input,
    Navbar,
    Dropdown,
    Button,
    Collapse,
    Image,
    Spacer,
    Switch,
    changeTheme,
    useTheme,
  } from "@nextui-org/react";
import { FaShoppingCart,FaTrash,FaSun,FaMoon } from 'react-icons/fa';

const Layout = ({children}) => {
    const { type, isDark } = useTheme();
    const handleChange = () => {
        const nextTheme = isDark ? "light" : "dark";
        window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
        changeTheme(nextTheme);
      };
  return (
    <>
    <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Historia
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
            <Navbar.Link href="#">menu</Navbar.Link>
          <Navbar.Link href="#">centro1</Navbar.Link>
          <Navbar.Link  href="#">
          centro2
          </Navbar.Link>
          <Navbar.Link href="#">centro3</Navbar.Link>
          <Navbar.Link href="#">centro4</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
            <div>
            <Switch
              checked={isDark}
              onChange={handleChange}
              size="xl"
              iconOn={<FaMoon filled />}
              iconOff={<FaSun filled />}
            />
            </div>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation></Navbar.Collapse>
      </Navbar>
    {children}
    <Grid css={{mb:"50px"}}>
          <Dropdown>
            <Dropdown.Button color="secondary" shadow>
              Participantes
            </Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              variant="shadow"
              aria-label="Actions"
            >
              <Dropdown.Item key="nico">Nicolas Pereyra</Dropdown.Item>
              <Dropdown.Item key="faure">Lautaro Faure</Dropdown.Item>
              <Dropdown.Item key="luz">Luz Strickler</Dropdown.Item>
              <Dropdown.Item key="sele">Selena Ramos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
    </>
  )
}

export default Layout
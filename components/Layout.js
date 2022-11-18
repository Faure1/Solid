/** @format */

import React, { useState } from "react";
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
  Link,
  Popover,
} from "@nextui-org/react";
import { FaShoppingCart, FaTrash, FaSun, FaMoon } from "react-icons/fa";
import Head from "next/head";

const Layout = ({ children }) => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
      </Head>
      <Navbar isBordered variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand>
          <Text b color='inherit' hideIn='xs'>
            Solid
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='highlight'>
          <Navbar.Link href='../'>Inicio</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}>
          <div>
            <Switch
              checked={isDark}
              color='secondary'
              onChange={handleChange}
              size='xl'
              iconOn={<FaMoon filled />}
              iconOff={<FaSun filled />}
            />
          </div>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link css={{ color: "violet" }} href='../'>
              Inicio
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Dropdown>
              <Dropdown.Button color='secondary' size='md' flat>
                centros
              </Dropdown.Button>
              <Dropdown.Menu
                color='secondary'
                variant='shadow'
                aria-label='Actions'>
                <Dropdown.Item key='nico'>
                  <Link id='boton' className='linked2' href='./centro1'>
                    Esma
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key='faure'>
                  <Link id='boton' className='linked2' href='./centro2'>
                    Club atlético
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key='luz'>
                  <Link id='boton' className='linked2' href='./centro3'>
                    El infierno de avellaneda
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key='sele'>
                  <Link id='boton' className='linked2' href='./centro4'>
                    El OLIMPO
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key='a'>
                  <Link id='boton' className='linked2' href='./centro5'>
                    Santa fe quinta de funes
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key='d'>
                  <Link id='boton' className='linked2' href='./centro6'>
                    Batallón de arsenales
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <Grid css={{ mt: "20px" }} className='subrayado'></Grid>
      <Navbar css={{ mt: "20px" }}>
        <Grid css={{ mb: "40px" }}>
          <Popover>
            <Popover.Trigger>
              <Button auto flat>
                Integrantes
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$4" }}>-Nicolas Pereyra</Text>
              <Text css={{ p: "$4" }}>-Lautaro Faure</Text>
              <Text css={{ p: "$4" }}>-Luz Strickler</Text>
              <Text css={{ p: "$4" }}>-Selena Ramos</Text>
            </Popover.Content>
          </Popover>
        </Grid>
        <Grid>
          Solid
        </Grid>
 
      </Navbar>
    </>
  );
};

export default Layout;

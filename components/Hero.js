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
  
export const Hero = ({titulo, clase, desc}) => {
  return (
    <Grid.Container className={`as ${clase}`} >
        <Grid className='grid-hover'>
          <Text h4 id={titulo} >
            {titulo}
          </Text>
          <Text className='text' id={desc} >
            {desc}
          </Text>
        </Grid>
    </Grid.Container>
  )
}

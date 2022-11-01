import React from "react";
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
} from "@nextui-org/react";

export const Hero = ({ titulo, clase, desc, href }) => {
  return (
    
      <Grid.Container className={`as ${clase}`}>
        <Grid xs={1} md={1}></Grid>
        <Grid xs={7} md={7}  className='grid-hover'>
          <Grid css={{mt:"2rem"}}>
          <Text h4 color="white" id={titulo}>
            {titulo}
          </Text>
          <Text className='text' color="white" id={desc}>
            {desc}
          </Text>
          </Grid> 
        </Grid>
        <Grid xs={4} md={4} alignItems="center" justify="center" css={{mb:"3rem"}}>
        <Link id="boton" href={href} >
        <Button color="secondary" auto   >
          Ir
        </Button>
        </Link>
        </Grid>
      </Grid.Container>

  );
};
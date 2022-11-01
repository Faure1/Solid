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
} from "@nextui-org/react";

const Bootstrap1 = ({ direccion, titulo, contedido }) => {
  return (
    <Grid.Container>
      <Grid xs={12} md={5} >
          <Image
            width={400}
            height={400}
            layout='intrinsic'
            src={direccion}
            alt={titulo}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Grid.Container justify="center">
            <Grid>
              <Text h4 css={{pt:"4rem"}}>{titulo}</Text> 
            </Grid>
            <Grid css={{p:"10%", pt:"1rem"}} >
              <Text >{contedido}</Text>
            </Grid>
          </Grid.Container>
        </Grid>
    </Grid.Container>
  );
};

export default Bootstrap1;
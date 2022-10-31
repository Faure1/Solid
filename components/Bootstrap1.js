
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
      <Grid xs={12} md={6} >
          <Image
            width={350}
            height={350}
            layout='intrinsic'
            src={direccion}
            alt={titulo}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Grid.Container alignItems="center"justify="center">
            <Grid>
               <Text h4 >{titulo}</Text> 
            </Grid>
            <Grid >
              <Text>{contedido}</Text>
            </Grid>
          </Grid.Container>
        </Grid>
    </Grid.Container>
  );
};

export default Bootstrap1;

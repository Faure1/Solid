
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

const Bootstrap2 = ({ direccion, titulo, contedido }) => {
  return (
    <Grid.Container>
        <Grid xs={12} md={6}>
          <Grid.Container  alignItems="center"justify="center">
            <Grid>
                <h4 className='text-center fuente'>{titulo}</h4>
            </Grid>
            <Grid >
              <p className='text-center la-pesca fuente'>{contedido}</p>
            </Grid>
          </Grid.Container>
        </Grid>
      <Grid xs={12} md={6} >
          <Image
            width={350}
            height={350}
            layout='intrinsic'
            src={direccion}
            alt={titulo}
          />
        </Grid>
    </Grid.Container>
  );
};

export default Bootstrap2;
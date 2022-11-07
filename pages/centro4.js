/** @format */

import React from "react";
import Layout from "../components/Layout";

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
import { Hero } from "../components/Hero";
import Bootstrap1 from "../components/Bootstrap1";
import Swiper4 from "../components/Swiper4";

const centro4 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>EL OLIMPO</Text>
        </Grid>
        <Grid xs={5}></Grid>
        <Grid xs={2} className='subrayado'></Grid>
        <Grid xs={5}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/hero4.png"}
            contedido='El centro clandestino de detención, tortura y exterminio funcionó desde el 16 de agosto de 1978 hasta fines de enero de 1979 en un predio perteneciente a la División Automotores de la Policía Federal. 
            el centro sólo funcionó durante cinco meses, de agosto de 1978 a enero de 1979, allí fueron alojados 700 detenidos, entre ellos militantes de diversas organizaciones políticas, la mayoría de las cuales permanecen desaparecidas, sobreviviendo solamente 50.​Por este centro pasaron personajes reconocidos del país, como Jorge Fontevecchia, fundador de una gran editorial
            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center' css={{ mt: "50px" }}>
        <Grid justify='center' css={{ p: "5%" }} xs={12} md={5}>
          <Text>
            La infraestructura fue construida por el Personal del Servicio
            Penitenciario Federal quienes se encargaron de las celdas para
            alojar a los detenidos, oficinas y salas de tortura. Los galpones
            fueron vaciados, creando un gran patio interno techado. Luego de
            esto comenzaron a trasladarse detenidos que eran secuestrados y
            transportados hasta el centro con los ojos vendados en vehículos
            particulares o camiones del Ejército. Si provenían de otro centro,
            mantenían la letra y el número adjudicado como identificación. El
            centro consistía en los galpones vacíos (utilizados de
            estacionamiento cerrado para descenso y ascenso de los
            secuestrados), el sector administrativo (comedor, enfermería,
            cocina, oficinas y una base de inteligencia), las salas de tortura y
            aislamiento («quirofanos» y tres celdas) y el sector general de
            celdas La sección de detenidos constaba de cuatro hileras
            consecutivas de once celdas cada una. En el espacio entre una hilera
            y la otra había, de izquierda a derecha, un pasillo ciego, uno que
            desembocaba en las duchas y otro que conectaba con el pasillo de las
            oficinas administrativas y la sala de torturas.
          </Text>
        </Grid>
        <Grid justify='center' xs={10} md={6}>
          <Card>
            <Card.Header
              justify='center'
              css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col justify='center'>
                <Text
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='violet'
                  h3></Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='img/centro4/2.png'
              objectFit='cover'
              width='100%'
              height='500px'
              alt='centro1'
            />
            <Card.Divider />
            <Card.Footer></Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center">
      <Grid xs={10} justify="center" className='border'>
        <Grid>
          <Text h3>Actualmente</Text>
          <Text css={{ p: "1%" }}>
          La iniciativa de recuperar el sitio surgió de un grupo de vecinas y vecinos comprometidos con la lucha por la memoria, sobrevivientes del propio centro de reclusión, familiares de detenidos-desaparecidos y detenidas-desaparecidas y organismos de derechos humanos.
En 2003 la Legislatura porteña lo declaró Sitio Histórico y en octubre del año siguiente se firmó un convenio destinándolo al funcionamiento de un “sitio de recuperación de la memoria histórica de los crímenes cometidos por el terrorismo de Estado y de promoción de los derechos humanos y los valores democráticos”.
En octubre de 2014, se declaró lugar histórico nacional.
          </Text>
        </Grid>
      </Grid>
      </Grid.Container>
      <Grid.Container justify='center' css={{ mt: "50px" }}>
        <Grid justify='center' md={4} xs={12}>
          <Swiper4 />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro4;

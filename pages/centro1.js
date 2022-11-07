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
import Swiper1 from "../components/Swiper1";

const centro1 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>ESMA </Text>
        </Grid>
        <Grid xs={5}></Grid>
        <Grid xs={2} className='subrayado'></Grid>
        <Grid xs={5}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/centro1/1.png"}
            contedido='El ESMA es evidencia del accionar del terrorismo de Estado y prueba judicial en las causas por crímenes de humanidad en Argentina. Este establecimiento funcionó un centro clandestino de detención, tortura y exterminio por el que pasaron unas cinco mil personas detenidas-desaparecidas, militantes políticos y sociales, de organizaciones revolucionarias armadas y no armadas, trabajadoras, trabajadores y gremialistas, estudiantes, profesionales, artistas y religiosas, donde la mayoría de estas personas fueron arrojadas vivas al mar.
            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center' css={{ mt: "50px" }}>
        <Grid justify='center' css={{ p: "5%" }} xs={12} md={5}>
          <Text>
            Desde la ESMA, la Armada planificó secuestros y llevó a cabo
            asesinatos de manera sistemática; en sus instalaciones torturó y
            mantuvo a los prisioneros encapuchados y engrillados, y dispuso su
            desaparición forzada. En una maternidad clandestina instalada en el
            edificio nacieron en cautiverio niñas y niños que fueron separados
            de sus madres para luego convertirse en víctimas de apropiación
            ilegal o robo. Todo el predio con sus edificaciones ,incluidas las
            instituciones educativas, estuvo al servicio del accionar ilegal. De
            este modo, toda la estructura cumplió con una doble función: escuela
            y centro clandestino. Todo el predio con sus edificaciones
            ,incluidas las instituciones educativas, estuvo al servicio del
            accionar ilegal. De este modo, toda la estructura cumplió con una
            doble función: escuela y centro clandestino
          </Text>
        </Grid>
        <Grid justify='center' xs={12} md={6}>
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
                  h3>
                  Recorrido Histórico por la ex ESMA
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='img/hero1.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
            <Card.Divider />
            <Card.Footer>
              <Button color='secondary' auto>
                <Link
                  target={"_blank"}
                  className='linked'
                  href='https://www.youtube.com/watch?v=6dj-u1DLnas'>
                  IR
                </Link>
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center'>
        <Grid xs={10} className='border'>
          <Grid >
            <Text h3>Actualmente</Text>
            <Text css={{ p: "1%" }}>
            En 2004 comenzó un período de recuperación para transformar al
            predio de la ESMA en un Espacio para la Memoria y para la Promoción
            y la Defensa de los Derechos Humanos. El 19 de mayo de 2015, se
            inauguró el Museo Sitio de Memoria ESMA en el ex Casino de
            Oficiales, donde no se alteró el edificio. El guión del Museo está
            basado en los testimonios que las y los sobrevivientes brindaron.
            Hoy el lugar es un espacio de denuncia del terrorismo de Estado y
            transmisión de la memoria. Su misión es contribuir a conocer,
            vivenciar y comprender las violaciones a los derechos humanos
            cometidas por el Estado argentino, siendo parte de uno de los
            Patrimonios de la Humanidad de la Unesco.
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center' css={{ mt: "50px" }}>
        <Grid justify='center' md={5} xs={12}>
          <Swiper1 />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro1;

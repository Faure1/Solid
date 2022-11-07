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
import Swiper6 from "../components/Swiper6";


const centro6 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>BATALLÓN DE ARSENALES</Text>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4} className='subrayado'></Grid>
        <Grid xs={4}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/hero6.png"}
            contedido='El predio del Batallón de Arsenales 603, perteneciente al Ejército, fue utilizado como Centro clandestino de detención y allí permanecieron secuestrados y fueron torturados mujeres y hombres perseguidos por su militancia política, social y sindical.
            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{ mt: "50px" }}>
        <Grid justify="center" css={{ p: "5%" }} xs={12} md={5}>
          <Text>Las obras para la construcción del arsenal comenzaron el 4 de octubre de 1904 en el terreno «Campo de los Granaderos» y fueron terminadas en 1909. En 1996 tomó el nombre de Batallón de Arsenales 603 . En 1967 y 1971 ocurrieron explosiones en depósitos de municiones, causando daños significativos.</Text>
        </Grid>
        <Grid justify="center" xs={10} md={6}>
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
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='img/centro6/1.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
            <Card.Divider />
            <Card.Footer>
              <Text h4>
              <Button  color='secondary' auto>
                <Link
                  target={"_blank"}
                  className='linked'
                  href='https://www.youtube.com/watch?v=pNTzoUd8OEg'>
                  IR
                </Link>
              </Button>
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center'>
        <Grid xs={10} className='border'>
          <Grid >
            <Text h3>Actualmente</Text>
            <Text css={{ p: "1%" }}>
            Se convirtió en un lugar de Memoria ante el Estado de represión de la Argentina de ese momento, fue uno de los pocos establecimientos que no abrió sus puertas para conocerlo, pero aún así sigue siendo de interés cultural e histórico, a pesar de conocer muy poco de este.


            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{mt:"50px"}}>
        <Grid justify="center" md={5} xs={12}>
        <Swiper6/>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro6;

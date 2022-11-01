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
import Swiper2 from "../components/Swiper2";


const centro2 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>CLUB ATLÉTICO</Text>
        </Grid>
        <Grid xs={5}></Grid>
        <Grid xs={2} className='subrayado'></Grid>
        <Grid xs={5}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/hero2.png"}
            contedido='  El Club Atlético fue un centro clandestino de detención, tortura y exterminio que  funcionó entre los meses de febrero y diciembre de 1977.
            El Atlético funcionaba en el sótano de un edificio de tres plantas, en el primer nivel se ubicaba un salón azulejado, al que se accedía por unas puertas de vidrio, donde se encontraba un escritorio grande y otro pequeño; en ellos se identificaba y asignaba un número a cada detenido-desaparecido.
            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{ mt: "50px" }}>
        <Grid justify="center" css={{ p: "5%" }} xs={12} md={5}>
          <Text>
          Fue un centro clandestino de detención que operó durante el terrorismo de Estado ejecutado por la dictadura autodenominada «Proceso de Reorganización Nacional» (presidida por la Junta Militar de Gobierno)
Entre 1976 y 1979 cumplieron funciones en el lugar unos 200 policías pero por tratarse de una brigada de investigaciones, muchos de los efectivos vestían de civil aunque también había personal militar y entre ambas fuerzas formaban los grupos de tareas, que eran quienes realizaban los secuestros, las torturas, violaciones, desapariciones y asesinatos de cualquiera que sea opositor

          </Text>
        </Grid>
        <Grid justify="center" xs={12} md={6}>
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
              src='img/centro2/3.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
            <Card.Divider />
            <Card.Footer>
            <Button  color='secondary' auto>
                <Link
                  target={"_blank"}
                  className='linked'
                  href='https://www.youtube.com/watch?v=VNPilw-mKOg'>
                  IR
                </Link>
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{mt:"50px"}}>
        <Grid justify="center" md={5} xs={12}>
        <Swiper2/>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro2;

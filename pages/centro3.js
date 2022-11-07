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
import Swiper3 from "../components/Swiper3";


const centro3 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>EL INFIERNO DE AVELLANEDA</Text>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4} className='subrayado'></Grid>
        <Grid xs={4}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/hero3.png"}
            contedido=' Este centro funcionó desde 1976 hasta 1978 y se estima que pasaron alrededor de 330 personas, entre ellos activistas gremiales. La mayoría continúan desaparecidos y otros fueron identificados en el sector 134 del cementerio municipal.
            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{ mt: "50px" }}>
        <Grid justify="center" css={{ p: "5%" }} xs={12} md={5}>
          <Text>
          Desde allí, tras una puerta disimulada se accedía al subsuelo.​El subsuelo carecía de ventilación y luz natural. La temperatura en verano rondaba entre    los 40 y 45 °C, mientras que en invierno se sentía mucho el frío y las paredes destilaban agua constantemente debido a la gran humedad del ambiente. La escalera a través de la que se descendía al subsuelo llegaba a una sala provista de una mesa de ping pong que usaban los represores. Al costado de la misma se encontraba una pequeña sala de guardia y dos celdas para incomunicados, una sala de torturas y otras para enfermería. También existía una cocina, lavadero y duchas, éstas con una abertura que daba a la superficie externa por donde los guardias observaban a las mujeres. El promedio de secuestros era de seis o siete por día, pero hubo oportunidades en que han llegado a ingresar hasta 20 personas en un día. A intervalos regulares, un grupo importante de detenidos-desaparecidos partía con destino desconocido y poseía una capacidad para unas 200 personas
          </Text>
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
              src='img/centro3/1.png'
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
                  href='https://youtu.be/zlVvue1aO-M'>
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
            La municipalidad de Avellaneda entre el 2012 y 2017, puso en marcha una unidad especializada de investigación, dando como resultado el primer Archivo Municipal de la Memoria Colectiva y Popular, pasando de tener un registro inicial de 79 víctimas a un registro que se complementa diariamente y que arroja la cifra de 604 a la actualidad.
El Espacio además es utilizado como sitio para la memoria, la cultura y la educación en homenaje a las víctimas del terrorismo de Estado.

            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{mt:"50px"}}>
        <Grid justify="center" md={5} xs={12}>
        <Swiper3/>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro3;

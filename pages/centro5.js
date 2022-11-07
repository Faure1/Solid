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
import Swiper5 from "../components/Swiper5";

const centro5 = () => {
  return (
    <Layout>
      <Grid.Container css={{ mt: "50px" }}>
        <Grid xs={12} justify='center'>
          <Text h1>QUINTA DE FUNES</Text>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={4} className='subrayado'></Grid>
        <Grid xs={4}></Grid>
        <Grid>
          <Bootstrap1
            direccion={"img/hero5.png"}
            contedido='Fue un lugar en el que miembros de la Inteligencia y del Ejército mantuvieron cautivos a hombres y mujeres perseguidos por su militancia política, entre septiembre de 1977 y enero de 1978.
            Eran dos viviendas que fueron utilizadas como CCD, donde al menos 15 personas estuvieron secuestradas a principios de 1978, incluso ocultados con alfalfa, donde luego los prisioneros eran trasladados a su trágico destino final.

            '></Bootstrap1>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{ mt: "50px" }}>
        <Grid justify="center" css={{ p: "5%" }} xs={12} md={5}>
          <Text>
          Este establecimiento ocupó tres manzanas y era custodiado por personal de Gendarmería Nacional, vestidos de civil. Allí funcionaba una imprenta clandestina, desde la cual, el Ejército falsificaba folletos de militantes de Montoneros. En la Quinta de Funes, se elaboró el Plan de Inteligencia conocido como Operación México cuyo objetivo fue secuestrar a integrantes de la cúpula Montoneros, que estaban en ese país.4​ Las personas secuestradas en «Quinta de Funes» fueron derivadas luego del fracaso de esa operación a la Escuela Magnasco y por último a la casa quinta conocida como La Intermedia donde todas ellas fueron ejecutadas ilícitamente.
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
              src='img/centro5/1.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
            <Card.Divider />
            <Card.Footer/>
  
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify='center'>
        <Grid xs={10} className='border'>
          <Grid >
            <Text h3>Actualmente</Text>
            <Text css={{ p: "1%" }}>
            En 2016 la señalizaron Sitio de Memoria del Terrorismo de Estado y se aprobó la expropiación del predio para conservar la edificación y resguardar los valores testimoniales históricos y culturales. Las instalaciones serán destinadas a la constitución de un espacio de memoria histórica de interés municipal y a un establecimiento educativo público 
En 2017 el centro abrió sus puertas con fines educativos y culturales.
En 2018 se lo rebautizó Universidad de los Valores y todavía no se hizo oficial la fecha de su inauguración.15​ Según el gobierno santafesino, la idea es darle un significado nuevo a este lugar, convirtiéndolo en un espacio educativo donde estudiantes primarios y secundarios puedan aprender sobre los crímenes de lesa humanidad ocurridos en Argentina.
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" css={{mt:"50px"}}>
        <Grid justify="center" md={5} xs={12}>
        <Swiper5/>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default centro5;

/** @format */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import { Navigation } from "swiper";
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

const Swiper1 = () => {
  return (
    <>
<Swiper navigation={true} pagination={true} modules={[Pagination,Navigation]} className="mySwiper">
        <SwiperSlide >
            <Card.Image
              src='img/centro1/1.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
        </SwiperSlide>
        <SwiperSlide>
        <Card.Image
              src='img/centro1/2.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
        </SwiperSlide>
        <SwiperSlide>
        <Card.Image
              src='img/centro1/3.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
        </SwiperSlide>
        <SwiperSlide>
        <Card.Image
              src='img/hero1.png'
              objectFit='cover'
              width='100%'
              height='100%'
              alt='centro1'
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swiper1;

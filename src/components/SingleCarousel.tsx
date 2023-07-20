import React from "react";
// @ts-ignore
import CardPage from "./CardPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SingleCarouselInterface } from "../interfaces/SingleCarouselInterface";
import styles from "./SingleCarousel.module.css";

const SingleCarousel = (props: SingleCarouselInterface) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={props.class}>
      <div className={styles.spaceContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.space}></div>
      </div>
      <Carousel responsive={responsive} className={styles.carouselContainer}>
        {props.data.map((card) => {
          return (
            <CardPage
              key={card.id}
              title={card.title}
              description={card.description}
              link={card.link}
              images={card.images}
            ></CardPage>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SingleCarousel;

import React from "react";
// @ts-ignore
import workoutImg from "../assests/images/workout.jpg";
import styles from "./HealthContent.module.css";
import CardPage from "../UI/CardPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HealthContent = () => {
  const cards = [
    {
      id: 1,
      title: "1",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 2,
      title: "2",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 3,
      title: "3",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 4,
      title: "4",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 5,
      title: "5",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 6,
      title: "6",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 7,
      title: "7",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },

    {
      id: 8,
      title: "8",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },
    {
      id: 9,
      title: "9",
      description:
        "Managing and creating weekly workout plans for your convenience",
      images: workoutImg,
      link: "workouts",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div className={styles.healthContent}>
      <h1>Health Articles</h1>
      <Carousel responsive={responsive} itemClass={styles.carouselItem}>
        {cards.map((card) => {
          return (
            <>
              <CardPage
                key={card.id}
                title={card.title}
                description={card.description}
                link={card.link}
                images={card.images}
              ></CardPage>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HealthContent;

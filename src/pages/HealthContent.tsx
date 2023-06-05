import React from "react";
// @ts-ignore
import workoutImg from "../assests/images/workout.jpg";
import styles from "./HealthContent.module.css";
import CardPage from "../UI/CardPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleCarousel from "../UI/SingleCarousel";

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

  return (
    <div className={styles.healthContent}>
      <SingleCarousel
        class={styles.title}
        title="Health News"
        data={cards}
      ></SingleCarousel>
      <SingleCarousel
        class={styles.title}
        title="Health Tips"
        data={cards}
      ></SingleCarousel>
      <SingleCarousel
        class={styles.title}
        title="Health Articles"
        data={cards}
      ></SingleCarousel>
    </div>
  );
};

export default HealthContent;

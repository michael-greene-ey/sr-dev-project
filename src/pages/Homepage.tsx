import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardHome from "../UI/CardHome";
// @ts-ignore
import workoutImg from "../assests/images/workout.jpg";
//@ts-ignore
import healthContentImg from "../assests/images/health-content.jpg";
import styles from "./Homepage.module.css";

const Homepage = () => {
  //temp data
  const page = [
    {
      id: 1,
      title: "Workout Plans",
      description:
        "Managing and creating weekly workout plans for your convenience",
      image: workoutImg,
    },
    {
      id: 2,
      title: "Health Content",
      description: "Managing and creating health content for you routine",
      image: healthContentImg,
    },
  ];

  return (
    <div className={styles.homepage}>
      <Carousel variant="dark" interval={null}>
        {page.map((card) => {
          console.log(card);
          return (
            <Carousel.Item>
              <CardHome
                title={card.title}
                description={card.description}
                images={card.image}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Homepage;

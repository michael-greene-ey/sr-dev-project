import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { WORKOUT } from "../assests/Constants";
import SingleCarousel from "../components/SingleCarousel";
import { CardHomeInterface as CardInterface } from "../interfaces/CardHomeInterface";
import styles from "./Workouts.module.css";

const HealthContent = () => {
  const [pageCards, setPageCards] = useState<CardInterface[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    try {
      const res = await fetch(WORKOUT);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setPageCards([...data]);
    } catch (error) {
      error instanceof Error
        ? console.log("An error occurred:", error.message)
        : console.log("Unknown Failure", error);
    }
  };

  return (
    <div className={styles.workout}>
      <div className={styles.overlay}>
        <SingleCarousel
          cardName={styles.title}
          title="Full Body Workout"
          data={pageCards || []}
        ></SingleCarousel>
        <SingleCarousel
          cardName={styles.title}
          title="Leg Days"
          data={pageCards || []}
        ></SingleCarousel>
        <SingleCarousel
          cardName={styles.title}
          title="Bro Splits"
          data={pageCards || []}
        ></SingleCarousel>
      </div>
    </div>
  );
};

export default HealthContent;

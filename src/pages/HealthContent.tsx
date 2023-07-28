import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { HEALTH_CONTENT } from "../assests/Constants";
import SingleCarousel from "../components/SingleCarousel";
import { CardHomeInterface as CardInterface } from "../interfaces/CardHomeInterface";
import styles from "./HealthContent.module.css";

const HealthContent = () => {
  const [pageCards, setPageCards] = useState<CardInterface[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    try {
      const res = await fetch(HEALTH_CONTENT);

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
    <>
      <div className={styles.healthContent}>
        <div className={styles.overlay}>
          <SingleCarousel
            cardName={styles.title}
            title="Health Articles"
            data={pageCards || []}
          ></SingleCarousel>
          <SingleCarousel
            cardName={styles.title}
            title="Health Tips"
            data={pageCards || []}
          ></SingleCarousel>
          <SingleCarousel
            cardName={styles.title}
            title="Health News"
            data={pageCards || []}
          ></SingleCarousel>
        </div>
      </div>
    </>
  );
};

export default HealthContent;

import React, { useState, useEffect } from "react";

import "react-multi-carousel/lib/styles.css";
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
      const res = await fetch("http://localhost:3000/health-content");

      let error;

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
        error = res.status;
      }
      const data = await res.json();
      setPageCards([...data]);
    } catch (error: any) {
      console.log("An error occurred:", error.message);
    }
  };

  return (
    <div className={styles.healthContent}>
      <SingleCarousel
        class={styles.title}
        title="Health Articles"
        data={pageCards || []}
      ></SingleCarousel>
      <SingleCarousel
        class={styles.title}
        title="Health Tips"
        data={pageCards || []}
      ></SingleCarousel>
      <SingleCarousel
        class={styles.title}
        title="Health News"
        data={pageCards || []}
      ></SingleCarousel>
    </div>
  );
};

export default HealthContent;

import React from "react";
import styles from "./BentoGrid.module.css";

const BentoGrid = () => {
  const bentoItems = [
    {
      id: 1,
      title: "LOGOIPSUM",
      logoImage: "/images/logos/logo1.png",
      span: "tall",
    },
    {
      id: 2,
      title: "LOGOIPSUM",
      logoImage: "/images/logos/logo2.png",
      span: "wide",
    },
    {
      id: 3,
      title: "LOGOIPSUM",
      logoImage: "/images/logos/logo3.png",
      span: "wide-tall",
    },
    {
      id: 4,
      title: "LOGOIPSUM",
      logoImage: "/images/logos/logo4.png",
      span: "wide-tall-square",
    },
    {
      id: 5,
      title: "",
      logoImage: "/images/logos/logo5.png",
      span: "square",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.gridItem} ${styles[item.span]}`}
            >
              <div className={styles.gradientBg} />

              <div className={styles.itemContent}>
                <div className={styles.logo}>
                  <img
                    src={process.env.PUBLIC_URL + item.logoImage}
                    alt={item.title}
                    className={styles.logoImage}
                  />
                </div>

                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

import React from "react";

import Logo from "/public/images/logo.png";
import Image from "next/image";
import styles from "../header.module.scss";

const header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image width={325} height={70} src={Logo} alt="Logotipe" />
        <div className={styles.navigation_block}>
          <span className={styles.navigation_item}>Главная</span>
          <span className={styles.navigation_item}>Услуги</span>
          <span className={styles.navigation_item}>Наши работы</span>
          <span className={styles.navigation_item}>Контакты</span>
        </div>
        <button className={styles.feedback_btn}>Обратная связь</button>
      </div>
    </div>
  );
};

export default header;

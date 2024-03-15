import Link from "next/link";
import styles from "./page.module.css";

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, create
          <span className={styles.highlight}> By You</span>
        </h1>
        <p>
          Coose Your Favorite recipe and cook it yourself. Its is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share You Favorite Food</Link>
        </p>
      </header>
      <main className={styles.main}> </main>
    </>
  );
}

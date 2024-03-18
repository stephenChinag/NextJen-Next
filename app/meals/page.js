import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, create
          <span className={styles.highlight}> byy You</span>
        </h1>
        <p>
          Coose Your Favorite recipe and cook it yourself. Its is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share You Favorite Food</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  console.log(params);
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1> {meal.title}</h1>
          <p className={styles.creator}>
            {" "}
            by <a href={`mailto:${"EMAIL"}`}> NAME</a>
          </p>
          <p className={styles.summary}> {meal.summary} </p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

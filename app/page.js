"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={styles.hero}>
            <h1> NextLevel Food for NextLevel Foodies</h1>
            <p> Tast & share food from all ove the world.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community"> Join the Community </Link>
            <Link href="/meals"> Explore Meals </Link>
          </div>
        </div>
      </header>
    </>
  );
}

// {
//   /* <main>
//       <h1 style={{ color: "white", textAlign: "center" }}>
//         Time to get started!
//       </h1>
//       <p>
//         <Link href="/meals"> Meals</Link>
//       </p>
//       <p>
//         <Link href="/meals/share"> Meals</Link>
//       </p>
//       <p>
//         <Link href="/community"> Meals</Link>
//       </p>
//     </main> */
// }

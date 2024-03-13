import Link from "next/link";
import logoImg from "@/assets/logo.png";

import styles from "./main-header.module.css";
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="A plate with Food on It" priority />
        Next Level Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals"> Meals</Link>
          </li>
          <li>
            <Link href="/community"> Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

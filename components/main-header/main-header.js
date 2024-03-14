"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";

import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with Food on It" priority />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodie Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Home page</h1>
      <p>
        Et minim consectetur consectetur ad aute voluptate occaecat ea amet
        culpa ad proident pariatur. Commodo sunt nostrud laborum ex qui velit
        tempor eu dolore irure. Cupidatat sit cupidatat eu ea pariatur duis sit
        sunt irure sunt reprehenderit excepteur. Ea sit amet adipisicing officia
        proident. Anim eiusmod ut nulla adipisicing reprehenderit veniam
        occaecat consectetur adipisicing exercitation. Irure ad ea ipsum elit
        irure do. Quis dolor ex et velit mollit consequat eiusmod quis.
      </p>
      <p>
        Et minim consectetur consectetur ad aute voluptate occaecat ea amet
        culpa ad proident pariatur. Commodo sunt nostrud laborum ex qui velit
        tempor eu dolore irure. Cupidatat sit cupidatat eu ea pariatur duis sit
        sunt irure sunt reprehenderit excepteur. Ea sit amet adipisicing officia
        proident. Anim eiusmod ut nulla adipisicing reprehenderit veniam
        occaecat consectetur adipisicing exercitation. Irure ad ea ipsum elit
        irure do. Quis dolor ex et velit mollit consequat eiusmod quis.
      </p>
    </div>
  );
}

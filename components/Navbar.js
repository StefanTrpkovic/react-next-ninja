import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninja'>Ninjas List</Link>
    </nav>
  );
};

export default Navbar;

import styles from "@/styles/Ninja.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjasList = await res.json();

  return {
    props: {
      ninjasList,
    },
  };
};

const Ninja = ({ ninjasList }) => {
  return (
    <>
      <h1>Ninjas List</h1>

      {ninjasList.map((ninja) => (
        <Link
          href={`/ninja/${ninja.id}`}
          key={ninja.id}
          className={styles.ninjaList}
        >
          <p> {ninja.name}</p>
        </Link>
      ))}
    </>
  );
};

export default Ninja;

import styles from "@/styles/NinjaDetails.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjasList = await res.json();

  const paths = ninjasList.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const ninja = await res.json();

  return {
    props: {
      ninja,
    },
  };
}

const Details = ({ ninja }) => {
  return (
    <div className={styles.ninja}>
      <p>id: {ninja.id}</p>
      <p>name: {ninja.name}</p>
      <p>city: {ninja.address.city}</p>
      <p>email: {ninja.email}</p>
    </div>
  );
};

export default Details;

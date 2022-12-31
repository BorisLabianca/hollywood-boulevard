import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import HomeCategory from "../components/HomeCategory";

export default function Home({ animations, adventures, comedies, thrillers }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          minHeight: "calc(100vh - 140px)",
          padding: "35px",
          boxSizing: "border-box",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <HomeCategory movieGenre={animations} category={"films d'animation"} />
        <HomeCategory movieGenre={adventures} category={"films d'aventure"} />
        <HomeCategory movieGenre={comedies} category={"comédies"} />
        <HomeCategory movieGenre={thrillers} category={"thrillers"} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let dataToSend = [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/movies/");
    // console.log(data);
    dataToSend = data.data;
  } catch (error) {
    console.log("catch home>>", error);
  }
  // console.log(dataToSend);
  return { props: dataToSend };
}

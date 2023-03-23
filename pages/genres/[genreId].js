import axios from "axios";
import MovieCardGenrePage from "../../components/MovieCardGenrePage";

const genre = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex items-center justify-center gap-[40px] flex-wrap box-border w-full p-8 text-3xl font-bold my-0 mx-auto max-w-7xl min-h-[calc(100vh-178px)]">
      {data.map((movie) => {
        return <MovieCardGenrePage movie={movie} />;
      })}
    </div>
  );
};

export default genre;

export async function getServerSideProps(context) {
  const genreId = context.params.genreId;

  let dataToSend = [];
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/genres/${genreId}`
    );
    dataToSend = data;
  } catch (error) {
    console.log("catch genres/genreId>> ", error);
  }
  return { props: { data: dataToSend } };
}

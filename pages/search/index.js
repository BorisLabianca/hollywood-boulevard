import axios from "axios";
import MovieCardGenrePage from "../../components/MovieCardGenrePage";

const search = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div className="flex items-center justify-center gap-[40px] flex-wrap box-border w-full p-8 text-3xl font-bold my-0 mx-auto max-w-7xl min-h-[calc(100vh-178px)]">
      {searchResults.map((movie) => {
        return <MovieCardGenrePage movie={movie} />;
      })}
    </div>
  );
};

export default search;

export async function getServerSideProps(context) {
  const title = context.query.title;
  let dataToSend = [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/search", {
      params: { title: title },
    });
    // console.log("search response ===>", data);
    dataToSend = data;
  } catch (error) {
    console.log("catch search>>", error.response);
  }
  return { props: { searchResults: dataToSend } };
}

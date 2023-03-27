import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchQueries } from "../features/searchBar/searchBarSlice";

const SearchTitleLine = ({ elem }) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/movies/${elem._id}`}
      className="w-full h-24 flex items-end p-1 box-border gap-2 hover:bg-slate-200"
      onClick={() => {
        dispatch(setSearchQueries(""));
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
        alt={`Affiche du film ${elem.original_title}`}
        style={{ width: "auto%", height: "100%", objectFit: "cover" }}
      />
      <h3 className="text-base font-normal">{elem.title}</h3>
    </Link>
  );
};

export default SearchTitleLine;

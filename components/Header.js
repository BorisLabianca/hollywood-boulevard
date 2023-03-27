import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQueries } from "../features/searchBar/searchBarSlice";
import SearchTitleLine from "./SearchTitleLine";

const Header = () => {
  const { dataToSearchFrom, searchQueries } = useSelector(
    (store) => store.searchBar
  );
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(dataToSearchFrom);
  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchQueries) {
      return;
    }
    const queries = searchQueries;
    dispatch(setSearchQueries(""));
    router.push(
      {
        pathname: "/search",
        query: { title: queries },
      },
      "/search"
    );
  };
  return (
    <div className="shadow-lg box-border w-full sticky top-0 bg-white z-10">
      <div className="flex items-center justify-center gap-[10px] flex-col box-border w-full p-8 text-xl md:text-3xl font-bold my-0 mx-auto max-w-7xl relative">
        <Link
          href="/"
          className="logo-container h-[50px] p-[10px] flex items-center"
        >
          <Image
            src={logo}
            style={{ width: "200px", height: "180%", objectFit: "cover" }}
            alt="logo"
          />
        </Link>
        <h1>HOLLYWOOD BOULEVARD</h1>
        <form
          onSubmit={handleSearch}
          className=" rounded-lg w-full h-[40px] overflow-hidden border-solid border border-black grid grid-cols-10"
        >
          <input
            type="text"
            placeholder="Tapez le titre d'un film..."
            className="outline-none w-full h-full border-none text-lg box-border py-[5px] px-[10px] col-span-9"
            value={searchQueries}
            onChange={(event) => {
              dispatch(setSearchQueries(event.target.value));
            }}
          />
          <button
            className="border-none bg-black text-white h-full text-transparent md:text-lg md:text-white col-span-1"
            type="submit"
          >
            Rechercher
          </button>
          {searchQueries && (
            <div className="absolute bg-white overflow-y-scroll max-h-80 top-48 text-base rounded-md w-full">
              {dataToSearchFrom
                .filter((elem) =>
                  elem.title.toLowerCase().includes(searchQueries.toLowerCase())
                )
                .map((elem) => {
                  return <SearchTitleLine key={elem._id} elem={elem} />;
                })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  const handleSearch = async () => {};
  return (
    <div className="shadow-lg box-border w-full sticky top-0 bg-white z-10">
      <div className="flex items-center justify-center gap-[10px] flex-col box-border w-full p-8 text-xl md:text-3xl font-bold my-0 mx-auto max-w-7xl">
        <Link
          href="/"
          className="logo-container"
          style={{
            height: "50px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            style={{ width: "200px", height: "180%", objectFit: "cover" }}
            alt="logo"
          />
        </Link>
        <h1>HOLLYWOOD BOULEVARD</h1>
        <div
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "40px",
            overflow: "hidden",
            border: "solid 1px black",
            display: "grid",
            gridTemplateColumns: "90% 10%",
          }}
        >
          <input
            type="text"
            placeholder="Tapez le titre d'un film..."
            className="outline-none w-full h-full border-none text-lg box-border py-[5px] px-[10px]"
          />
          <button
            className="border-none bg-black text-white h-full text-transparent md:text-lg md:text-white"
            onClick={handleSearch}
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  const handleSearch = async () => {};
  return (
    <div
      style={{
        boxShadow: "0px 2px 5px gray",
        boxSizing: "border-box",
        width: "100%",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: "10",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "100%",
          padding: "35px",
          fontSize: "28px",
          fontWeight: "700",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
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
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              fontSize: "18px",
              boxSizing: "border-box",
              padding: "5px 10px 5px 10px",
            }}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "black",
              color: "white",
              height: "100%",
            }}
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

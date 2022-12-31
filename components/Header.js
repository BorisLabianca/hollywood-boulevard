import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 2px 5px gray",
        boxSizing: "border-box",
        width: "100%",
        padding: "15px",
        fontSize: "28px",
        fontWeight: "700",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
      }}
    >
      <Link
        href="/"
        className="logo-container"
        style={{
          height: "50px",
          padding: "10px 35px",
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
    </div>
  );
};

export default Header;

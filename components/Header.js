import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
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
